#라이브러리 import
# 연도별 행정동별 업종별 매출데이터

import pandas as pd
import numpy as np

# 월화수목금토일  => 1,2,3,4,5,6,7
# 시간 => 0, 6, 11, 14, 17

df_sales = pd.read_excel(r'C:\Users\SSAFY\Desktop\E205\tmp\S07P31E205\backend\parse_python\simul_groupby_dong\simul_sales_dong_2017.xlsx')
df_sales
df_sales.drop('Unnamed: 0', axis=1, inplace=True)

df_sales.rename(columns = {'월요일_매출_비율':'day1','화요일_매출_비율':'day2','수요일_매출_비율':'day3','목요일_매출_비율':'day4','금요일_매출_비율':'day5','토요일_매출_비율':'day6','일요일_매출_비율':'day7' },inplace=True)
df_sales.rename(columns = {'시간대_00~06_매출_비율':'time1','시간대_06~11_매출_비율':'time2','시간대_11~14_매출_비율':'time3','시간대_14~17_매출_비율':'time4','시간대_17~21_매출_비율':'time5','시간대_21~24_매출_비율':'time6' },inplace=True)

for boongi in range(1, 2):
    boongi_df = df_sales[df_sales['기준_분기_코드'] == boongi]
    boongi_len = len(boongi_df)

    save_df = pd.DataFrame(index=range(0), columns={'시군구', '행정동', '서비스_업종_코드', '서비스_업종_코드_명', '년도', '분기', '요일', '시간', '매출_금액'})
    print("boongi_len : " + boongi_len)
    for idx in range(0, boongi_len):
        sigungu = boongi_df.iloc[idx]['시군구']
        dong = boongi_df.iloc[idx]['행정동']
        service_code = boongi_df.iloc[idx]['서비스_업종_코드']
        service_name = boongi_df.iloc[idx]['서비스_업종_코드_명']
        year = boongi_df.iloc[idx]['기준_년_코드']

        for idx_day in range(1, 8):
            for idx_time in range(1, 7):
                print(idx_day + " " + idx_time)
                day = "day" + str(idx_day)
                time = "time" + str(idx_time)
                sales = boongi_df.iloc[idx]['분기당_매출_금액'] * boongi_df.iloc[idx][day] * boongi_df.iloc[idx][time] * 0.0001
                new_row = pd.DataFrame([[sigungu, dong, service_code, service_name, year, boongi, idx_day, idx_time, sales]], columns=save_df.columns)
                # save_df.append(new_row)
                print(new_row)

        # file_name = "simul_calc_sales_" + str(year) + "_" + str(boongi) +".xlsx"

    # save_df.to_excel(file_name)
    del save_df
