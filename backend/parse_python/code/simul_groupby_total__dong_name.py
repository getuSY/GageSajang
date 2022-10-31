#라이브러리 import
# 연도별 행정동별 업종별 매출데이터

import pandas as pd
import numpy as np

df_sales = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\data\final\final_with_dong\simul_final_with_dong_2021.xlsx')
df_sales
df_sales.drop('Unnamed: 0', axis=1, inplace=True)

# len(np.unique(df_sales[['상권_코드', '서비스_업종_코드']], axis=0))

print(df_sales.info())
df_sales = df_sales.astype({'기준_년_코드':'object', '상권_코드':'object', '기준_분기_코드':'object', '행정동코드':'object'})
df = df_sales.groupby(['기준_년_코드', '기준_분기_코드', '시군구명', '읍면동명', '서비스_업종_코드', '서비스_업종_코드_명'], as_index=False).mean()
df
# df.rename(columns = {'분기당_매출_금액':'매출_금액'},inplace=True)
df.info()
df = df.astype({'기준_년_코드':'object', '기준_분기_코드':'object'})
df['분기당_매출_금액'] = df['분기당_매출_금액'].fillna(0)
df['분기당_매출_금액'] = df['분기당_매출_금액'].replace(np.inf, 0)
df['분기당_매출_건수'] = df['분기당_매출_건수'].fillna(0)
df['분기당_매출_건수'] = df['분기당_매출_건수'].replace(np.inf, 0)
df['점포수'] = df['점포수'].fillna(0)
df['점포수'] = df['점포수'].replace(np.inf, 0)
df['유사_업종_점포_수'] = df['유사_업종_점포_수'].fillna(0)
df['유사_업종_점포_수'] = df['유사_업종_점포_수'].replace(np.inf, 0)
df['개업_점포_수'] = df['개업_점포_수'].fillna(0)
df['개업_점포_수'] = df['개업_점포_수'].replace(np.inf, 0)

df['폐업_점포_수'] = df['폐업_점포_수'].fillna(0)
df['폐업_점포_수'] = df['폐업_점포_수'].replace(np.inf, 0)
df['프랜차이즈_점포_수'] = df['프랜차이즈_점포_수'].fillna(0)
df['프랜차이즈_점포_수'] = df['프랜차이즈_점포_수'].replace(np.inf, 0)
df['총_생활인구_수'] = df['총_생활인구_수'].fillna(df['총_생활인구_수'].mean())
df['총_생활인구_수'] = df['총_생활인구_수'].replace(np.inf, df['총_생활인구_수'].mean())
df['남성_생활인구_수'] = df['남성_생활인구_수'].fillna(df['남성_생활인구_수'].mean())
df['남성_생활인구_수'] = df['남성_생활인구_수'].replace(np.inf, df['남성_생활인구_수'].mean())
df['여성_생활인구_수'] = df['여성_생활인구_수'].fillna(df['여성_생활인구_수'].mean())
df['여성_생활인구_수'] = df['여성_생활인구_수'].replace(np.inf, df['여성_생활인구_수'].mean())

df['월_평균_소득_금액'] = df['월_평균_소득_금액'].fillna(df['월_평균_소득_금액'].mean())
df['월_평균_소득_금액'] = df['월_평균_소득_금액'].replace(np.inf, df['월_평균_소득_금액'].mean())
df['소득_구간_코드'] = df['소득_구간_코드'].fillna(df['소득_구간_코드'].mean())
df['소득_구간_코드'] = df['소득_구간_코드'].replace(np.inf, df['소득_구간_코드'].mean())
df['지출_총금액'] = df['지출_총금액'].fillna(df['지출_총금액'].mean())
df['지출_총금액'] = df['지출_총금액'].replace(np.inf, df['지출_총금액'].mean())
df['총 상주인구 수'] = df['총 상주인구 수'].fillna(df['총 상주인구 수'].mean())
df['총 상주인구 수'] = df['총 상주인구 수'].replace(np.inf, df['총 상주인구 수'].mean())
df['총_직장_인구_수'] = df['총_직장_인구_수'].fillna(df['총_직장_인구_수'].mean())
df['총_직장_인구_수'] = df['총_직장_인구_수'].replace(np.inf, df['총_직장_인구_수'].mean())
df['총_직장_인구_수'] = df['총_직장_인구_수'].fillna(df['총_직장_인구_수'].mean())
df['총_직장_인구_수'] = df['총_직장_인구_수'].replace(np.inf, df['총_직장_인구_수'].mean())

df['남성_직장_인구_수'] = df['남성_직장_인구_수'].fillna(df['남성_직장_인구_수'].mean())
df['남성_직장_인구_수'] = df['남성_직장_인구_수'].replace(np.inf, df['남성_직장_인구_수'].mean())
df['여성_직장_인구_수'] = df['여성_직장_인구_수'].fillna(df['여성_직장_인구_수'].mean())
df['여성_직장_인구_수'] = df['여성_직장_인구_수'].replace(np.inf, df['여성_직장_인구_수'].mean())
df['아파트_평균_시가'] = df['아파트_평균_시가'].fillna(df['아파트_평균_시가'].mean())
df['아파트_평균_시가'] = df['아파트_평균_시가'].replace(np.inf, df['아파트_평균_시가'].mean())
df['집객시설_수'] = df['집객시설_수'].fillna(df['집객시설_수'].mean())
df['집객시설_수'] = df['집객시설_수'].replace(np.inf, df['집객시설_수'].mean())

df['분기당_매출_건수/점포수'] = df['분기당_매출_금액'] / df['점포수']
df['분기당_매출_건수/점포수'] = df['분기당_매출_건수/점포수'].fillna(0)
df['분기당_매출_건수/점포수'] = df['분기당_매출_건수/점포수'].replace(np.inf, 0)


df = df.astype({'분기당_매출_금액':'int64', '분기당_매출_건수':'int64', '점포수':'int64', '유사_업종_점포_수':'int64', '개업_점포_수':'int64', '폐업_점포_수':'int64', '프랜차이즈_점포_수':'int64', '총_생활인구_수':'int64',  '남성_생활인구_수':'int64',  '여성_생활인구_수':'int64', '월_평균_소득_금액':'int64', '소득_구간_코드':'int64', '지출_총금액':'int64', '총 상주인구 수':'int64', '총_직장_인구_수':'int64', '남성_직장_인구_수':'int64', '여성_직장_인구_수':'int64', '아파트_평균_시가':'int64', '집객시설_수':'int64', '분기당_매출_건수/점포수':'int64'})
df.to_excel("real_final_2021.xlsx")

