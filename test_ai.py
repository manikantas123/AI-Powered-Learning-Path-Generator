import google.generativeai as genai
import traceback

genai.configure(api_key="AIzaSyAWJEeGBRAfowyosnE2suVjRpMG8LSiqhA")
model = genai.GenerativeModel('gemini-1.5-flash')

try:
    print("Sending prompt...")
    response = model.generate_content("Hello, this is a test. Provide a simple JSON: {'status': 'ok'}")
    print("Response received.")
    print("Text:", response.text)
except Exception as e:
    print("Error occurred:")
    traceback.print_exc()
