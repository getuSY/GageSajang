#라이브러리 import
# 상권코드 + 시군구명 + 행정동명 합친 엑셀파일
import requests
import pprint
import json
import pandas as pd
import numpy as np

df_commercialArea = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\S07P31E205\backend\parse_python\commercial_area_code.xlsx')
df_commercialArea.drop('Unnamed: 0', axis=1, inplace=True)
len(df_commercialArea)
len(np.unique(df_commercialArea[['TRDAR_CD']], axis=0))
df_dongName = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\S07P31E205\backend\parse_python\dongName.xlsx')

print(df_dongName.iloc[0])
print(df_commercialArea.iloc[0])

df_dongName['행정기관코드'] = df_dongName['행정기관코드']/100
df_dongName = df_dongName.astype({'행정기관코드':'int64'})
df_dongName.rename(columns = {'행정기관코드':'ADSTRD_CD'},inplace=True)

print(df_dongName.info())
print(df_commercialArea.info())
print(len(df_commercialArea))

#dataframe에 ADSTRD_CD 과  df_dongName에 ADSTRD_CD 일치하는 경우 시군구, 읍면동 넣어주기
total_commercialArea = pd.merge(left=df_commercialArea, right=df_dongName, on="ADSTRD_CD", how="left")
len(total_commercialArea)

len(np.unique(total_commercialArea[['TRDAR_CD']], axis=0))

total_commercialArea.drop_duplicates(subset='TRDAR_CD', inplace=True)

nan_commercialArea = total_commercialArea[total_commercialArea['행정동'].isnull()]
len(nan_commercialArea)
total_commercialArea.to_excel("nan_commercialArea.xlsx") # 행정동명이 없는 컬럼들만 따로 저장

total_commercialArea = total_commercialArea.dropna()

len(total_commercialArea)

total_commercialArea.to_excel("commercial_area_codd_with_dong.xlsx")