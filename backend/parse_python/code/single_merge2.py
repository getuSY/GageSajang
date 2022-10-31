#라이브러리 import
# 매출데이터 + 상권코드 + 시군구명 + 행정동명 합친 엑셀파일

import pandas as pd


df1 = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\data\소득_상주.xlsx')
df1
len(df1)

df2 = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\data\직장인구.xlsx')

print(df1.iloc[0])
print(df2.iloc[0])

df2.rename(columns = {'기준_년월_코드':'기준_년_코드'},inplace=True)
print(df1.info())
print(df2.info())

# 상권_코드 일치하는 경우 시군구, 읍면동 넣어주기
total_df = pd.merge(left=df1, right=df2, on=['기준_년_코드', '기준_분기_코드', '상권_코드', '상권_코드_명'], how="left")
len(total_df)


total_df.drop_duplicates(subset=['기준_분기_코드', '상권_코드', '기준_년_코드'], inplace=True, keep='first')

len(total_df)
total_df.to_excel("소득_상주_직장.xlsx")

