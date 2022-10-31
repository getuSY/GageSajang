#라이브러리 import
# 매출데이터 + 상권코드 + 시군구명 + 행정동명 합친 엑셀파일

import pandas as pd


df1 = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\data\multi\매출_점포_생활인구\매출_점포_생활인구_2016.xlsx')
df1
len(df1)

df2 = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\data\최종_single_data.xlsx')

print(df1.iloc[0])
print(df2.iloc[0])
# df2.rename(columns = {'기준 년코드':'기준_년_코드'},inplace=True)
# df2.rename(columns = {'상권 코드':'상권_코드'},inplace=True)
# df2.rename(columns = {'기준 년 코드':'기준_년_코드'},inplace=True)
print(df1.info())
print(df2.info())

# 상권_코드 일치하는 경우 시군구, 읍면동 넣어주기
total_df = pd.merge(left=df1, right=df2, on=['기준_년_코드', '기준_분기_코드', '상권_코드'], how="left")
len(total_df)

# total_df.drop_duplicates(subset=['기준_분기_코드', '상권_코드', '기준_년_코드'], inplace=True, keep='first')

len(total_df)
total_df.to_excel("final_2016.xlsx")

