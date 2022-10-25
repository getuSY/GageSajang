#라이브러리 import

import requests
import pprint
import json

# 1~1671 까지 있음
# 1~1000 data 받아오기
# url 입력
url = 'http://openapi.seoul.go.kr:8088/464f495a466461383130346555427362/json/TbgisTrdarRelm/1/1000/'

response = requests.get(url)
contents = response.text

# 데이터 결과값 예쁘게 출력해주는 코드
pp = pprint.PrettyPrinter(indent=4)
print(pp.pprint(contents))

## json을 DataFrame으로 변환하기 ##

#문자열을 json으로 변경
json_ob = json.loads(contents)
print(type(json_ob)) #json타입 확인
print(json_ob)
# 필요한 내용만 꺼내기
body = json_ob['TbgisTrdarRelm']
body = body['row']
print(body)
print(len(body))

# pandas import
import pandas as pd
# Dataframe으로 만들기
dataframe = pd.json_normalize(body) #상권분석서비스
dataframe = dataframe.astype({'ADSTRD_CD':'int64', 'SIGNGU_CD' : 'int64'})
print(dataframe.info())

# 1000~2000 data 받아오기
url2 = 'http://openapi.seoul.go.kr:8088/464f495a466461383130346555427362/json/TbgisTrdarRelm/1001/2000/'

response2 = requests.get(url2)
contents2 = response2.text

# 데이터 결과값 예쁘게 출력해주는 코드
pp = pprint.PrettyPrinter(indent=4)
print(pp.pprint(contents2))

## json을 DataFrame으로 변환하기 ##

#문자열을 json으로 변경
json_ob2 = json.loads(contents2)
print(type(json_ob2)) #json타입 확인
print(json_ob2)
# 필요한 내용만 꺼내기
body2 = json_ob2['TbgisTrdarRelm']
body2 = body2['row']
print(body2)
print(len(body2))

# pandas import
import pandas as pd
# Dataframe으로 만들기
dataframe2 = pd.json_normalize(body2) #상권분석서비스
len(dataframe2)

dataframe2 = dataframe2.astype({'ADSTRD_CD':'int64', 'SIGNGU_CD' : 'int64'})
print(dataframe2.info())

# dataframe + dataframe2 합치기
total_dataframe = pd.concat([dataframe, dataframe2])
len(total_dataframe)

total_dataframe.to_excel("commercial_area_code.xlsx")