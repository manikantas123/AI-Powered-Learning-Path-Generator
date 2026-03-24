import json
import re

txt_path = "Roadmap.txt"
js_path = "script.js"

with open(txt_path, 'r', encoding='utf-8') as f:
    text = f.read()

roadmaps = {}
roles_blocks = re.split(r'\n\d+\.\s+', '\n' + text)

for block in roles_blocks:
    if not block.strip(): continue
    lines = block.strip().split('\n')
    role_line = lines[0].strip()
    if role_line.endswith("Roadmap"):
        role_name = role_line[:-7].strip()
    else:
        role_name = role_line
        
    roadmaps[role_name] = []
    
    current_module = None
    
    for line in lines[1:]:
        line = line.strip()
        if not line: continue
        
        # Checking if it's a module header (ends with colon, basically no subtopics inline)
        if line.endswith(':') and len(line.split()) < 7:
            current_module = {
                "title": line[:-1].strip(),
                "nsqf": "Level 6",
                "topics": []
            }
            roadmaps[role_name].append(current_module)
        elif ':' in line:
            parts = line.split(':', 1)
            topic_name = parts[0].strip()
            # Handle brackets
            if '(' in parts[1] and ')' in parts[1]:
                # Complex split or just split by comma
                pass
                
            subs_text = parts[1].strip().rstrip('.')
            # Very basic split for subs
            subs = [s.strip() for s in subs_text.split(',') if s.strip()]
            
            topic_dict = {
                "name": topic_name,
                "subs": subs
            }
            
            if current_module is None:
                current_module = {
                    "title": topic_name,
                    "nsqf": "Level 5",
                    "topics": []
                }
                roadmaps[role_name].append(current_module)
                
            current_module["topics"].append(topic_dict)
        else:
            if current_module is None:
                current_module = {
                    "title": line,
                    "nsqf": "Level 5",
                    "topics": []
                }
                roadmaps[role_name].append(current_module)
            else:
                current_module["topics"].append({"name": line, "subs": []})

roleQuestions = {}
for role in roadmaps.keys():
    qs = [
        {"id": "q1", "label": f"Rate your overall practical experience as a {role} (1-10)?", "type": "number", "min": 1, "max": 10},
        {"id": "q2", "label": f"Rate your knowledge of core principles in {role} (1-10)?", "type": "number", "min": 1, "max": 10},
        {"id": "q3", "label": f"Rate your familiarity with standard tools and frameworks for {role} (1-10)?", "type": "number", "min": 1, "max": 10},
        {"id": "q4", "label": f"Rate your problem-solving skills in complex {role} scenarios (1-10)?", "type": "number", "min": 1, "max": 10},
        {"id": "q5", "label": f"Rate your deployment/production experience in {role} (1-10)?", "type": "number", "min": 1, "max": 10}
    ]
    roleQuestions[role] = qs

syllabus_js = "const syllabusBank = " + json.dumps(roadmaps, indent=4) + ";\n\n"
questions_js = "const roleQuestions = " + json.dumps(roleQuestions, indent=4) + ";\n\n"

with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

start_idx = js_content.find("const syllabusBank = {")
end_idx = js_content.find("function navigateTo(viewId)")

if start_idx != -1 and end_idx != -1:
    new_js = js_content[:start_idx] + syllabus_js + questions_js + js_content[end_idx:]
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_js)
    print("SUCCESS")
else:
    print("FAILED TO FIND BOUNDARIES")
