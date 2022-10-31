import sys
import inspect
import pymongo
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

print(inspect.getfile(plt))


connection = pymongo.MongoClient("mongodb://localhost:27017/")
db = connection["simulation"]
simul = db["simul"]

myquery = {"읍면동명" : "개포2동", "서비스_업종_코드_명" : "한식음식점"}

doc = simul.find(myquery)

documents = []
for x in doc: documents.append(x)

df = pd.DataFrame(documents)
df.info()
len(df)
df[df['기준_년_코드']== 2019]

df = df.astype({'분기당_매출_건수/점포수':'int64'})

df.drop(['_id', '시군구명', '읍면동명', '서비스_업종_코드', '서비스_업종_코드_명', '분기당_매출_금액'], axis = 1, inplace=True)

x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '유사_업종_점포_수',
        '개업_점포_수', '폐업_점포_수', '프랜차이즈_점포_수', '총_생활인구_수' ,'남성_생활인구_수',
        '여성_생활인구_수', '월_평균_소득_금액', '소득_구간_코드', '지출_총금액', '총 상주인구 수',
        '총_직장_인구_수', '남성_직장_인구_수', '여성_직장_인구_수', '아파트_평균_시가',
        '집객시설_수']]

y = df[['분기당_매출_건수/점포수']]

x_train, x_test, y_train, y_test = train_test_split(x, y, train_size=0.8, test_size=0.2)

mlr = LinearRegression()
mlr.fit(x_train, y_train)

#  이렇게 값을 넣으면 예측이 됨
# my_apartment = [[1, 1, 620, 16, 1, 98, 1, 0, 1, 0, 0, 1, 1, 0]]
# my_predict = mlr.predict(my_apartment)

y_predict = mlr.predict(x_test)

print(x_test['기준_년_코드'])
print(y_predict)
print(y_test)

#  시각화
plt.scatter(y_test, y_predict, alpha=0.4)
plt.xlabel("Actual Sales")
plt.ylabel("Predicted Sales")
plt.title("MULTIPLE LINEAR REGRESSION")
plt.show()
