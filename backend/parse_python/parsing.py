#라이브러리 impor

import requests
import pprint
import json

# url 입력

url = 'http://openapi.seoul.go.kr:8088/464f495a466461383130346555427362/json/TbgisTrdarRelm/1/100/'

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

# pandas import
import pandas as pd

# Dataframe으로 만들기
dataframe = pd.json_normalize(body) #상권분석서비스

df_dongName = pd.read_excel(r'dongName.xlsx')
print(df_dongName.iloc[0])
print(dataframe.iloc[15])
df_dongName['행정기관코드'] = df_dongName['행정기관코드']/100
df_dongName = df_dongName.astype({'행정기관코드':'int64'})
df_dongName.rename(columns = {'행정기관코드':'ADSTRD_CD'},inplace=True)
dataframe = dataframe.astype({'ADSTRD_CD':'int64', 'SIGNGU_CD' : 'int64'})
print(df_dongName.info())
print(dataframe.info())
#dataframe에 ADSTRD_CD 과  df_dongName에 ADSTRD_CD 일치하는 경우 시군구, 읍면동 넣어주기

dataframe2 = pd.merge(dataframe, df_dongName, on="ADSTRD_CD", how="left")
dataframe2 = dataframe2.dropna()
print(dataframe2)