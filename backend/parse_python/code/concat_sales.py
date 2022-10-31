# #라이브러리 import
# # 상권코드 + 시군구명 + 행정동명 합친 엑셀파일
# import requests
# import pprint
# import json
# import pandas as pd
# import numpy as np
# from pathlib import Path
#
#
# # for year in range(2017, 2022):
#     # path = "C:\\Users\\SSAFY\\Downloads\\new_sales\\sales_" + str(year)
#     # path = "C:/Users/SSAFY/Desktop/E205/S07P31E205/backend/parse_python/new_sales/sales_" + str(year)
#     # path = "./sales_" + str(year)
#     # file_name = "sales_" + str(year)
#     # path = Path.joinpath(Path.cwd(), "backend", "parse_python", "new_sales", file_name)
#     # print(path)
#     # print(Path.cwd())
#     # print(path)
#     df = pd.read_excel('C:\\Users\\SSAFY\\Desktop\E205\S07P31E205\\backend\parse_python\\new_sales\sales_2017.xlsx')
# df2 = pd.read_excel('C:\\Users\\SSAFY\\Desktop\E205\S07P31E205\\backend\parse_python\\new_sales\sales_2018.xlsx')
# df3 = pd.read_excel('C:\\Users\\SSAFY\\Desktop\E205\S07P31E205\\backend\parse_python\\new_sales\sales_2019.xlsx')
# df4 = pd.read_excel('C:\\Users\\SSAFY\\Desktop\E205\S07P31E205\\backend\parse_python\\new_sales\sales_2020.xlsx')
# df5 = pd.read_excel('C:\\Users\\SSAFY\\Desktop\E205\S07P31E205\\backend\parse_python\\new_sales\sales_2021.xlsx')
#
# total_sales = pd.concat([df,df2, df3, df4, df5])
# len(total_sales)
# total_sales.to_excel("total_sales.xlsx")
