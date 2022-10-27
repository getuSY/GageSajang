#라이브러리 import
# 연도별 행정동별 업종별 매출데이터
import requests
import pprint
import json
import pandas as pd
import numpy as np

df_sales = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\S07P31E205\backend\parse_python\year_dong\year_dong_2017.xlsx')
df_sales
df_sales.drop('Unnamed: 0', axis=1, inplace=True)
len(df_sales)
# len(np.unique(df_sales[['상권_코드', '서비스_업종_코드']], axis=0))

print(df_sales.info())
df_sales = df_sales.astype({'기준_년_코드':'object', '상권_코드':'object', '기준_분기_코드':'object'})
df = df_sales.groupby(['기준_년_코드', '시군구', '행정동', '서비스_업종_코드', '서비스_업종_코드_명'], as_index=False).sum()
df
df.rename(columns = {'분기당_매출_금액':'매출_금액'},inplace=True)
df['매출_금액/점포수'] = df['매출_금액']/df['점포수']
df['매출_금액/점포수'] = df['매출_금액/점포수'].fillna(0)
df['매출_금액/점포수'] = df['매출_금액/점포수'].replace(np.inf, 0)
df = df.astype({'매출_금액/점포수':'int64'})
df.to_excel("sales_year_dong_2017.xlsx")

