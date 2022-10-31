#라이브러리 import
# 매출데이터 + 상권코드 + 시군구명 + 행정동명 합친 엑셀파일

import pandas as pd


df_sales = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\simul_sales\sales_2017.xlsx')
df_sales
df_sales.drop('Unnamed: 0', axis=1, inplace=True)
len(df_sales)

df_dongName = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\S07P31E205\backend\parse_python\final_commercialCode_sigungu_dong.xlsx')

print(df_sales.iloc[0])
print(df_dongName.iloc[0])

df_dongName.rename(columns = {'TRDAR_CD':'상권_코드'},inplace=True)

print(df_sales.info())
print(df_dongName.info())

# 상권_코드 일치하는 경우 시군구, 읍면동 넣어주기
total_sales = pd.merge(left=df_sales, right=df_dongName, on="상권_코드", how="left")
len(total_sales)

total_sales[total_sales.duplicated(subset=['기준_분기_코드', '상권_코드', '서비스_업종_코드'])]

total_sales.drop_duplicates(subset=['기준_분기_코드', '상권_코드', '서비스_업종_코드'], inplace=True, keep='first')

len(total_sales)
total_sales.to_excel("simul_dong_2017.xlsx")

