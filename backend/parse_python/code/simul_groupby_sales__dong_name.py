#라이브러리 import
# 연도별 행정동별 업종별 매출데이터

import pandas as pd
import numpy as np

df_sales = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\simul_dong\simul_dong_2017.xlsx')
df_sales
df_sales.drop('Unnamed: 0', axis=1, inplace=True)

# len(np.unique(df_sales[['상권_코드', '서비스_업종_코드']], axis=0))

print(df_sales.info())
df_sales = df_sales.astype({'기준_년_코드':'object', '기준_분기_코드' : 'object', '상권_코드':'object', '기준_분기_코드':'object'})
df = df_sales.groupby(['기준_년_코드', '기준_분기_코드', '시군구', '행정동', '서비스_업종_코드', '서비스_업종_코드_명'], as_index=False).mean()
df
# df.rename(columns = {'분기당_매출_금액':'매출_금액'},inplace=True)
df.iloc[0]
df['분기당_매출_금액'] = df['분기당_매출_금액']/df['점포수']
df = df.round(0)

df.drop('점포수', axis=1, inplace=True)
df['분기당_매출_금액'] = df['분기당_매출_금액'].fillna(0)
df['분기당_매출_금액'] = df['분기당_매출_금액'].replace(np.inf, 0)
df = df.astype({'분기당_매출_금액':'int64'})
df = df.astype({'월요일_매출_비율':'int64', '화요일_매출_비율':'int64', '수요일_매출_비율':'int64', '목요일_매출_비율':'int64', '금요일_매출_비율':'int64', '토요일_매출_비율':'int64', '일요일_매출_비율':'int64'})
df = df.astype({'시간대_00~06_매출_비율':'int64', '시간대_06~11_매출_비율':'int64', '시간대_11~14_매출_비율':'int64', '시간대_14~17_매출_비율':'int64', '시간대_17~21_매출_비율':'int64', '시간대_21~24_매출_비율':'int64'})
df.to_excel("simul_sales_dong_2017.xlsx")

