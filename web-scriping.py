from bs4 import BeautifulSoup
import requests
import re

url = requests.get('https://divar.ir/s/hamedan/auto')
soup = BeautifulSoup(url.content,'html.parser')

result = soup.find_all('div',attrs={'class' : 'post-card-item kt-col-6 kt-col-xxl-4'})
for row in result:
    regex = re.findall(r"(\w.*)\،.\w{3}\s(\w{0,4})(\w{0,100}\,\w{0,100}).*\s(\w{0,100}\,\w{0,100}\,\w{0,100})",row.text)
    for Name_Car,Sal_Sakht,Karkard,Price in regex:
        print("Name Car : %s \nSal Sakht : %s \nKm : %s \nPrice : %s"%(Name_Car,Sal_Sakht,Karkard,Price))
        print("------------------------------")
    




#(\w.*)\،.\w{3}\s(\w{0,4})(\w{0,100}\,\w{0,100}).*\s(\w{0,100}\,\w{0,100}\,\w{0,100})
