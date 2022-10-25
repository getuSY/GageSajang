# 분기별 => 행정동별 업종별 연도별 매출 데이터

#라이브러리 import

import requests
import pprint
import json
import pandas as pd

df = pd.read_excel('C:\\Users\\SSAFY\\Desktop\\E205\S07P31E205\\backend\parse_python\\boongi_sales\\sales_2021.xlsx')
print(df.info())
df = df.astype({'기준_년_코드':'object'})
df = df.groupby(['기준_년_코드', '상권_구분_코드', '상권_코드', '서비스_업종_코드', '상권_코드_명', '서비스_업종_코드_명'], as_index=False).sum()
df['점포수'] = df['점포수'] / 4
df = df.astype({'점포수':'int64'})
df
df.to_excel("sales_year_2021.xlsx")
