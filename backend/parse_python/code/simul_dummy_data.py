#라이브러리 import
# 연도별 행정동별 업종별 매출데이터

import pandas as pd
import numpy as np

df_sales = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\data\final\real_final\real_final_2022.xlsx')
df_sales.info()

df_dummy = df_sales.copy()
df_dummy.info()

year = 2023
ratio = 1.3

df_dummy['기준_년_코드'] = year

df_dummy['분기당_매출_건수'] = df_sales['분기당_매출_건수'] * ratio
df_dummy['점포수'] = df_sales['점포수'] * ratio
df_dummy['유사_업종_점포_수'] = df_sales['유사_업종_점포_수'] * ratio
df_dummy['개업_점포_수'] = df_sales['개업_점포_수'] * ratio
df_dummy['폐업_점포_수'] = df_sales['폐업_점포_수'] * ratio
df_dummy['프랜차이즈_점포_수'] = df_sales['프랜차이즈_점포_수'] * ratio
df_dummy['총_생활인구_수'] = df_sales['총_생활인구_수'] * ratio
df_dummy['남성_생활인구_수'] = df_sales['남성_생활인구_수'] * ratio
df_dummy['여성_생활인구_수'] = df_sales['여성_생활인구_수'] * ratio
df_dummy['월_평균_소득_금액'] = df_sales['월_평균_소득_금액'] * ratio
df_dummy['소득_구간_코드'] = df_sales['소득_구간_코드'] *ratio
df_dummy['지출_총금액'] = df_sales['지출_총금액'] * ratio
df_dummy['총 상주인구 수'] = df_sales['총 상주인구 수'] * ratio
df_dummy['총_직장_인구_수'] = df_sales['총_직장_인구_수'] * ratio
df_dummy['남성_직장_인구_수'] = df_sales['남성_직장_인구_수'] * ratio
df_dummy['여성_직장_인구_수'] = df_sales['여성_직장_인구_수'] * ratio
df_dummy['아파트_평균_시가'] = df_sales['아파트_평균_시가'] * ratio
df_dummy['집객시설_수'] = df_sales['집객시설_수'] *ratio
df_dummy['분기당_매출_금액/점포수'] = df_sales['분기당_매출_금액/점포수'] *ratio

df = df_dummy.astype({'분기당_매출_건수':'int64', '점포수':'int64', '유사_업종_점포_수':'int64', '개업_점포_수':'int64', '폐업_점포_수':'int64', '프랜차이즈_점포_수':'int64', '총_생활인구_수':'int64',  '남성_생활인구_수':'int64',  '여성_생활인구_수':'int64', '월_평균_소득_금액':'int64', '소득_구간_코드':'int64', '지출_총금액':'int64', '총 상주인구 수':'int64', '총_직장_인구_수':'int64', '남성_직장_인구_수':'int64', '여성_직장_인구_수':'int64', '아파트_평균_시가':'int64', '집객시설_수':'int64', '분기당_매출_금액/점포수':'int64'})


df.to_excel("real_final_2023.xlsx", index=False)

