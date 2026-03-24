import requests
res = requests.get('https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyAWJEeGBRAfowyosnE2suVjRpMG8LSiqhA').json()
for m in res.get('models', []):
    if 'generateContent' in m.get('supportedGenerationMethods', []):
        print(m['name'])
