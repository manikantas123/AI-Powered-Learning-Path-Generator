import requests
url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAWJEeGBRAfowyosnE2suVjRpMG8LSiqhA"
headers = {'Content-Type': 'application/json'}
payload = {"contents": [{"parts": [{"text": "Hello"}]}]}
res = requests.post(url, headers=headers, json=payload)
print(res.status_code)


print(res.text)
