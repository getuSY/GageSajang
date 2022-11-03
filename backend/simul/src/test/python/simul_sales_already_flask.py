from flask import Flask  #간단히 플라스크 서버를 만든다
from flask import request

from urllib import parse

app = Flask(__name__)

@app.route("/simul/sales/already", methods=['POST'])
def simulation():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json
        import matplotlib.pyplot as plt

        print("already simulation")
        params = request.get_json()
        # print(params)
        # params = json.loads(request.get_json(), encoding='utf-8')

        if len(params) == 0:
                return 'No parameter'
        #
        # for key in params.keys():
        #         print(key, params[key])

        # mongo DB 연결
        connection = pymongo.MongoClient("mongodb://localhost:27017/")
        db = connection["simulation"]
        simul = db["simul"]

        year = params["year"]
        quarter = params['quarter']
        dongName = params["dongName"]
        industryName = params["industryName"]
        value = params["value"]

        # year = 2022
        # quarter = 4
        # dongName = "개포2동"
        # industryName = "한식음식점"
        # value = 60000330

        myquery = {"읍면동명": dongName, "서비스_업종_코드_명": industryName}

        doc = simul.find(myquery)

        documents = []
        for x in doc: documents.append(x)

        # 데이터 전처리
        # 사용자가 입력한 매출금액으로 변경
        df = pd.DataFrame(documents)
        index = df.index[(df['기준_년_코드'] == year) & (df['기준_분기_코드'] == quarter) & (df['읍면동명'] == dongName) & (df['서비스_업종_코드_명'] == industryName)].tolist()[0]
        df.loc[(df['기준_년_코드'] == year) & ( df['기준_분기_코드'] == quarter) & (df['읍면동명'] == dongName ) & (df['서비스_업종_코드_명'] == industryName) , '분기당_매출_금액/점포수'] = value

        # 데이터 전처리 (예측 위한)
        df = df.astype({'분기당_매출_금액/점포수': 'int64'})
        #
        df.drop(['_id', '시군구명', '읍면동명', '서비스_업종_코드', '서비스_업종_코드_명'], axis=1, inplace=True)
        #
        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '총_생활인구_수', '소득_구간_코드', '지출_총금액', '총 상주인구 수',
                '총_직장_인구_수', '아파트_평균_시가', '집객시설_수']]
        #
        y = df[['분기당_매출_금액/점포수']]
        #
        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)
        #
        from sklearn.preprocessing import MinMaxScaler
        scaler = MinMaxScaler()

        normalization_df = features_polynomial.copy()
        normalization_df[:] = scaler.fit_transform(normalization_df[:])

        x_train = x.copy()
        x_test = x.copy()

        y_train = y.copy()
        # y_test = y.copy()

        regression = LinearRegression()
        regression.fit(x_train, y_train)

        y_predict = regression.predict(x_test)

        # print(x_test['기준_년_코드'])
        # print("predict")
        # print(y_predict.tolist())
        # print("answer")
        # print(y_test)

        y_predict = y_predict.astype('int64')

        list = y_predict.flatten().tolist()
        list[index] = value

        objList = []

        year = 2013
        for i, sale in enumerate(list[1:]) :
                obj = { "year" : year, "quarter" : i%4 + 1, "value" : sale, "dongName" : dongName, "industryName" : industryName}
                objList.append(obj)
                if i % 4 == 3 : year+=1

        result = { "result" : objList}

        return json.dumps(result)

        # return null


if __name__ == "__main__":
        # print(simulation("개포2동", "한식음식점"))
        app.run(debug=False, host="127.0.0.1", port=5000)
