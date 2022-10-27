#라이브러리 import
# 연도별 행정동별 업종별 매출데이터

import pandas as pd


df_sales = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\S07P31E205\backend\parse_python\weekday_dong\weekday_dong_2017.xlsx')
df_sales
df_sales.drop('Unnamed: 0', axis=1, inplace=True)
df_sales.drop('점포수', axis=1, inplace=True)

# len(np.unique(df_sales[['상권_코드', '서비스_업종_코드']], axis=0))

print(df_sales.info())
df_sales = df_sales.astype({'기준_년_코드':'object', '상권_코드':'object', '기준_분기_코드':'object'})
df = df_sales.groupby(['기준_년_코드', '시군구', '행정동', '서비스_업종_코드', '서비스_업종_코드_명'], as_index=False).sum()
df
# df.rename(columns = {'분기당_매출_금액':'매출_금액'},inplace=True)
df['총비율'] = df['월요일_매출_비율'] +  df['화요일_매출_비율'] +  df['수요일_매출_비율'] +  df['목요일_매출_비율'] +  df['금요일_매출_비율'] +  df['토요일_매출_비율'] +  df['일요일_매출_비율']

df['월요일_매출_비율'] = df['월요일_매출_비율'] / df['총비율'] * 100
df['화요일_매출_비율'] = df['화요일_매출_비율'] / df['총비율'] * 100
df['수요일_매출_비율'] = df['수요일_매출_비율'] / df['총비율'] * 100
df['목요일_매출_비율'] = df['목요일_매출_비율'] / df['총비율'] * 100
df['금요일_매출_비율'] = df['금요일_매출_비율'] / df['총비율'] * 100
df['토요일_매출_비율'] = df['토요일_매출_비율'] / df['총비율'] * 100
df['일요일_매출_비율'] = df['일요일_매출_비율'] / df['총비율'] * 100

# df['정리된 총합'] = df['월요일_매출_비율'] +  df['화요일_매출_비율'] +  df['수요일_매출_비율'] +  df['목요일_매출_비율'] +  df['금요일_매출_비율'] +  df['토요일_매출_비율'] +  df['일요일_매출_비율']

# df['분기당_매출_금액/점포수']  = df['분기당_매출_금액'] / df['점포수']
# df['분기당_매출_금액/점포수'] = df['분기당_매출_금액/점포수'].fillna(0)
# df['분기당_매출_금액/점포수'] = df['분기당_매출_금액/점포수'].replace(np.inf, 0)
df.drop('총비율', axis=1, inplace=True)
df = df.astype({'월요일_매출_비율':'int64', '화요일_매출_비율':'int64', '수요일_매출_비율':'int64', '목요일_매출_비율':'int64', '금요일_매출_비율':'int64', '토요일_매출_비율':'int64', '일요일_매출_비율':'int64'})
df.to_excel("sales_weekday_dong_2017.xlsx")

