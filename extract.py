import re, json  
html = open('form.html', 'r', encoding='utf-16').read()  
m = re.search(r'var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);', html, re.DOTALL)  
data = json.loads(m.group(1))  
fields = data[1][1]  
for f in fields:  
    if f[4]:  
        for sub in f[4]:  
            print(f'  sub-entry.{sub[0]} => {sub[3]}')  
