import os
import sqlite3
import jwt
import datetime
import json
import PyPDF2
import google.generativeai as genai
from functools import wraps
from flask import Flask, request, jsonify, send_from_directory
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from flask_cors import CORS

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

SECRET_KEY = 'your_super_secret_key_here' # In a real app, use environment variables
DB_NAME = 'users.db'

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            college_name TEXT NOT NULL,
            mobile_number TEXT NOT NULL,
            education_level TEXT NOT NULL,
            target_role TEXT,
            match_percentage INTEGER,
            missing_skills TEXT,
            roadmap TEXT
        )
    ''')
    try: cursor.execute('ALTER TABLE users ADD COLUMN target_role TEXT')
    except: pass
    try: cursor.execute('ALTER TABLE users ADD COLUMN match_percentage INTEGER')
    except: pass
    try: cursor.execute('ALTER TABLE users ADD COLUMN missing_skills TEXT')
    except: pass
    try: cursor.execute('ALTER TABLE users ADD COLUMN roadmap TEXT')
    except: pass
    try: cursor.execute('ALTER TABLE users ADD COLUMN resume_filename TEXT')
    except: pass
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_roadmaps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            target_role TEXT NOT NULL,
            match_percentage INTEGER,
            missing_skills TEXT,
            roadmap_data TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        auth_header = request.headers.get('Authorization')
        if auth_header and auth_header.startswith('Bearer '):
            token = auth_header.split(' ')[1]
            
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
            
        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            current_user = data['username']
        except Exception as e:
            return jsonify({'message': 'Token is invalid!'}), 401
            
        return f(current_user, *args, **kwargs)
    return decorated

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('.', path)

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'Missing data'}), 400
        
    username = data.get('username')
    password = data.get('password')
    college_name = data.get('college_name')
    mobile_number = data.get('mobile_number')
    education_level = data.get('education_level')
    
    if not all([username, password, college_name, mobile_number, education_level]):
        return jsonify({'message': 'All fields are required'}), 400
        
    hashed_password = generate_password_hash(password)
    
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (username, password, college_name, mobile_number, education_level) VALUES (?, ?, ?, ?, ?)",
                       (username, hashed_password, college_name, mobile_number, education_level))
        conn.commit()
    except sqlite3.IntegrityError:
        return jsonify({'message': 'Username already exists'}), 409
    finally:
        conn.close()
        
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data.get('username') or not data.get('password'):
        return jsonify({'message': 'Could not verify'}), 401
        
    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE username = ?', (data['username'],)).fetchone()
    conn.close()
    
    if user and check_password_hash(user['password'], data['password']):
        token = jwt.encode({
            'username': user['username'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }, SECRET_KEY, algorithm='HS256')
        
        return jsonify({
            'token': token,
            'user': {
                'username': user['username'],
                'college_name': user['college_name'],
                'mobile_number': user['mobile_number'],
                'education_level': user['education_level'],
                'target_role': user['target_role'],
                'match_percentage': user['match_percentage'],
                'missing_skills': json.loads(user['missing_skills']) if user['missing_skills'] else [],
                'roadmap': json.loads(user['roadmap']) if user['roadmap'] else [],
                'resume_filename': user['resume_filename']
            }
        })
        
    return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/api/profile', methods=['GET'])
@token_required
def profile(current_user):
    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE username = ?', (current_user,)).fetchone()
    conn.close()
    
    if user:
        return jsonify({
            'username': user['username'],
            'college_name': user['college_name'],
            'mobile_number': user['mobile_number'],
            'education_level': user['education_level'],
            'target_role': user['target_role'],
            'match_percentage': user['match_percentage'],
            'missing_skills': json.loads(user['missing_skills']) if user['missing_skills'] else [],
            'roadmap': json.loads(user['roadmap']) if user['roadmap'] else [],
            'resume_filename': user['resume_filename']
        })
    return jsonify({'message': 'User not found'}), 404

@app.route('/api/profile/update', methods=['POST'])
@token_required
def update_profile(current_user):
    username = request.form.get('username')
    education_level = request.form.get('education_level')
    college_name = request.form.get('college_name')
    mobile_number = request.form.get('mobile_number')
    
    file = request.files.get('resume')
    resume_filename = None
    
    if file and file.filename.endswith('.pdf'):
        filename = secure_filename(file.filename)
        unique_filename = f"{current_user}_{filename}"
        filepath = os.path.join(UPLOAD_FOLDER, unique_filename)
        file.save(filepath)
        resume_filename = unique_filename

    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        if resume_filename:
            cursor.execute('''UPDATE users SET username=?, education_level=?, college_name=?, mobile_number=?, resume_filename=? WHERE username=?''', 
                           (username, education_level, college_name, mobile_number, resume_filename, current_user))
        else:
            cursor.execute('''UPDATE users SET username=?, education_level=?, college_name=?, mobile_number=? WHERE username=?''', 
                           (username, education_level, college_name, mobile_number, current_user))
        conn.commit()
        return jsonify({'message': 'Profile updated successfully', 'resume_filename': resume_filename}), 200
    except sqlite3.IntegrityError:
        return jsonify({'message': 'Username already exists'}), 409
    except Exception as e:
        print(f"Update Profile Error: {e}")
        return jsonify({'message': 'Error updating profile'}), 500
    finally:
        conn.close()

@app.route('/api/roadmaps/history', methods=['GET'])
@token_required
def get_roadmap_history(current_user):
    conn = get_db_connection()
    try:
        roadmaps = conn.execute('SELECT * FROM user_roadmaps WHERE username = ? ORDER BY created_at DESC', (current_user,)).fetchall()
        result = []
        for r in roadmaps:
            result.append({
                'id': r['id'],
                'target_role': r['target_role'],
                'match_percentage': r['match_percentage'],
                'missing_skills': json.loads(r['missing_skills']) if r['missing_skills'] else [],
                'roadmap_data': json.loads(r['roadmap_data']) if r['roadmap_data'] else [],
                'created_at': r['created_at']
            })
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500
    finally:
        conn.close()

@app.route('/uploads/<path:filename>')
def download_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

def extract_text_from_pdf(pdf_path):
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            for page in reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading PDF: {e}")
    return text

@app.route('/api/analyze-resume', methods=['POST'])
@token_required
def analyze_resume(current_user):
    if 'resume' not in request.files:
        return jsonify({'message': 'No resume file part'}), 400
    file = request.files['resume']
    target_role = request.form.get('role')
    
    if file.filename == '' or not target_role:
        return jsonify({'message': 'No selected file or role'}), 400
        
    if file and file.filename.endswith('.pdf'):
        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        
        # Extract text
        resume_text = extract_text_from_pdf(filepath)
        
        # Extract question answers if present
        question_answers_json = request.form.get('question_answers', '{}')
        try:
            qa_dict = json.loads(question_answers_json)
            qa_text = "\n".join([f"- {k}: {v}" for k, v in qa_dict.items()]) if qa_dict else "None provided."
        except:
            qa_text = "None provided."

        # Call Gemini AI using REST API like the frontend
        prompt = f"""
        Analyze this resume for the role of '{target_role}'.
        Resume Text: {resume_text[:10000]}
        
        The user has also provided self-assessment ratings/answers for specific skills relevant to this role:
        {qa_text}
        
        Please incorporate these self-assessments when generating the roadmap and identifying missing skills. If their rating is low, prioritize that skill in the roadmap.

        Based on your detailed analysis of the resume against the role requirements, accurately calculate a realistic match score (integer from 0 to 100). 
        
        Return a JSON object ONLY with no markdown formatting. It must strictly follow this structure (replace example values with your actual evaluated data):
        {{
            "match_percentage": 62,
            "missing_skills": ["Real Missing Skill 1", "Real Missing Skill 2"],
            "custom_roadmap": [
                {{
                    "title": "Chapter 1 Title",
                    "nsqf": "Level 5",
                    "topics": [
                        {{
                            "name": "Topic 1",
                            "subs": ["Sub 1", "Sub 2"]
                        }}
                    ]
                }}
            ]
        }}
        The custom_roadmap should consist of 5-8 chapters tailored to bridge the user's specific missing skills and land the role of {target_role}. Keep 'nsqf' values between Level 5 and 7.
        """
        
        try:
            import requests
            url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyB0lfrS3m8Kpp-ttD_1-bboWecIx0erdd0"
            headers = {'Content-Type': 'application/json'}
            payload = {"contents": [{"parts": [{"text": prompt}]}]}
            
            api_res = requests.post(url, headers=headers, json=payload)
            api_res.raise_for_status()
            res_data = api_res.json()
            result_text = res_data['candidates'][0]['content']['parts'][0]['text'].strip()
            
            # Clean possible markdown wrap
            if result_text.startswith('```json'):
                result_text = result_text[7:-3].strip()
            elif result_text.startswith('```'):
                result_text = result_text[3:-3].strip()
                
            analysis_data = json.loads(result_text)
            
            # Save into DB
            conn = get_db_connection()
            try:
                cursor = conn.cursor()
                cursor.execute('''
                    UPDATE users 
                    SET target_role = ?, match_percentage = ?, missing_skills = ?, roadmap = ?
                    WHERE username = ?
                ''', (
                    target_role, 
                    analysis_data.get('match_percentage', 0), 
                    json.dumps(analysis_data.get('missing_skills', [])), 
                    json.dumps(analysis_data.get('custom_roadmap', [])),
                    current_user
                ))
                
                cursor.execute('''
                    INSERT INTO user_roadmaps (username, target_role, match_percentage, missing_skills, roadmap_data)
                    VALUES (?, ?, ?, ?, ?)
                ''', (
                    current_user,
                    target_role,
                    analysis_data.get('match_percentage', 0),
                    json.dumps(analysis_data.get('missing_skills', [])),
                    json.dumps(analysis_data.get('custom_roadmap', []))
                ))
                conn.commit()
            except Exception as db_e:
                print("DB Update Error", db_e)
            finally:
                conn.close()
            
            # Clean up uploaded file
            if os.path.exists(filepath):
                os.remove(filepath)
                
            return jsonify(analysis_data), 200
            
        except Exception as e:
            print("AI Processing Error:", str(e))
            if os.path.exists(filepath):
                os.remove(filepath)
            return jsonify({'message': 'Failed to process AI analysis', 'error': str(e)}), 500
            
    return jsonify({'message': 'Invalid file format. Please upload a PDF.'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
