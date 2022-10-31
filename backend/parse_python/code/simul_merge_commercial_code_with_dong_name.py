#라이브러리 import
# 매출데이터 + 상권코드 + 시군구명 + 행정동명 합친 엑셀파일

import pandas as pd


df_sales = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\data\상권코드.xlsx')
df_sales
len(df_sales)

df_dongName = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\data\행정동_코드.xlsx')

print(df_sales.iloc[0])
print(df_dongName.iloc[0])

df_sales.rename(columns = {'ADSTRD_CD':'행정동코드'},inplace=True)
df_dongName['행정동코드'] = df_dongName['행정동코드'] / 100
df_dongName = df_dongName.astype({'행정동코드':'int64'})
df_dongName

print(df_sales.info())
print(df_dongName.info())

# 상권_코드 일치하는 경우 시군구, 읍면동 넣어주기
total_sales = pd.merge(left=df_sales, right=df_dongName, on="행정동코드", how="left")
len(total_sales)

total_sales[total_sales.duplicated(subset=['기준_분기_코드', '상권_코드', '서비스_업종_코드'])]

total_sales.drop_duplicates(subset=['기준_분기_코드', '상권_코드', '서비스_업종_코드'], inplace=True, keep='first')

len(total_sales)
total_sales.to_excel("simul_code_with_dong_Name.xlsx")

