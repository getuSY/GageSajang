from flask import Flask  #간단히 플라스크 서버를 만든다
from flask import request

from urllib import parse
import redis
import pandas as pd

app = Flask(__name__)

@app.route("/simul/sales/maybe")
def salesSimulationForMaybe():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json
        # import matplotlib.pyplot as plt

        connection = pymongo.MongoClient("mongodb://localhost:27017/")
        db = connection["simulation"]
        simul = db["simul"]

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        print("dongName :" + dongName + ", industryName : " + industryName )

        myquery = {"읍면동명": dongName, "서비스_업종_코드_명": industryName}

        doc = simul.find(myquery)

        documents = []
        for x in doc: documents.append(x)

        df = pd.DataFrame(documents)
        df.info()
        len(df)

        # print(df)
        df = df.astype({'분기당_매출_금액/점포수': 'int64'})

        df.drop(['_id', '시군구명', '읍면동명', '서비스_업종_코드', '서비스_업종_코드_명'], axis=1, inplace=True)

        data = df.to_json(force_ascii=False, orient='records', indent=4)

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)
        redisClient.set('simulation', data)


        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '총_생활인구_수', '소득_구간_코드', '지출_총금액', '총 상주인구 수',
                '총_직장_인구_수', '아파트_평균_시가', '집객시설_수']]

        y = df[['분기당_매출_금액/점포수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

        from sklearn.preprocessing import MinMaxScaler
        scaler = MinMaxScaler()

        normalization_df = features_polynomial.copy()
        normalization_df[:] = scaler.fit_transform(normalization_df[:])

        x_train = x.copy()

        x_test1 = x[(x['기준_년_코드']==2022) & (x['기준_분기_코드']==4)]
        x_test2 = x[x['기준_년_코드'] == 2023]
        x_test = pd.concat([x_test1, x_test2])
        print(x_test)
        y_train = y.copy()

        regression = LinearRegression()
        regression.fit(x_train, y_train)

        y_predict = regression.predict(x_test)

        y_predict = y_predict.astype('int64')

        # list = y_predict.flatten().tolist()
        # objList = []
        #
        # obj = { "year" : 2022, "quarter" : 4, "sales": list[0]}
        # objList.append(obj)
        #
        # year = 2023
        # for i, sale in enumerate(list[1:]) :
        #         obj = { "year" : year, "quarter" : i%4 + 1, "sales" : sale}
        #         objList.append(obj)
        #         if i % 4 == 3 : year+=1
        #
        # result = { "result" : objList}

        return json.dumps(y_predict.flatten().tolist())


@app.route("/simul/life/maybe")
def lifeSimulationForMaybe():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)

        data = redisClient.get('simulation')
        df = pd.read_json(data)
        print("df from redis")
        # print(df)

        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '소득_구간_코드', '지출_총금액', '총 상주인구 수',
                '총_직장_인구_수', '아파트_평균_시가', '집객시설_수', '분기당_매출_금액/점포수']]

        y = df[['총_생활인구_수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

        from sklearn.preprocessing import MinMaxScaler
        scaler = MinMaxScaler()

        normalization_df = features_polynomial.copy()
        normalization_df[:] = scaler.fit_transform(normalization_df[:])

        x_train = x.copy()

        x_test1 = x[(x['기준_년_코드']==2022) & (x['기준_분기_코드']==4)]
        x_test2 = x[x['기준_년_코드'] == 2023]
        x_test = pd.concat([x_test1, x_test2])
        print(x_test)
        y_train = y.copy()

        regression = LinearRegression()
        regression.fit(x_train, y_train)

        y_predict = regression.predict(x_test)

        y_predict = y_predict.astype('int64')

        return json.dumps(y_predict.flatten().tolist())


@app.route("/simul/resident/maybe")
def residentSimulationForMaybe():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)

        data = redisClient.get('simulation')
        df = pd.read_json(data)
        print("df from redis")
        # print(df)

        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '소득_구간_코드', '지출_총금액', '총_생활인구_수',
                '총_직장_인구_수', '아파트_평균_시가', '집객시설_수', '분기당_매출_금액/점포수']]

        y = df[['총 상주인구 수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

        from sklearn.preprocessing import MinMaxScaler
        scaler = MinMaxScaler()

        normalization_df = features_polynomial.copy()
        normalization_df[:] = scaler.fit_transform(normalization_df[:])

        x_train = x.copy()

        x_test1 = x[(x['기준_년_코드']==2022) & (x['기준_분기_코드']==4)]
        x_test2 = x[x['기준_년_코드'] == 2023]
        x_test = pd.concat([x_test1, x_test2])
        print(x_test)
        y_train = y.copy()

        regression = LinearRegression()
        regression.fit(x_train, y_train)

        y_predict = regression.predict(x_test)

        y_predict = y_predict.astype('int64')

        return json.dumps(y_predict.flatten().tolist())

@app.route("/simul/job/maybe")
def jobSimulationForMaybe():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)

        data = redisClient.get('simulation')
        df = pd.read_json(data)
        print("df from redis")
        # print(df)

        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '소득_구간_코드', '지출_총금액', '총_생활인구_수',
                '총 상주인구 수', '아파트_평균_시가', '집객시설_수', '분기당_매출_금액/점포수']]

        y = df[['총_직장_인구_수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

        from sklearn.preprocessing import MinMaxScaler
        scaler = MinMaxScaler()

        normalization_df = features_polynomial.copy()
        normalization_df[:] = scaler.fit_transform(normalization_df[:])

        x_train = x.copy()

        x_test1 = x[(x['기준_년_코드']==2022) & (x['기준_분기_코드']==4)]
        x_test2 = x[x['기준_년_코드'] == 2023]
        x_test = pd.concat([x_test1, x_test2])
        print(x_test)
        y_train = y.copy()

        regression = LinearRegression()
        regression.fit(x_train, y_train)

        y_predict = regression.predict(x_test)

        y_predict = y_predict.astype('int64')

        return json.dumps(y_predict.flatten().tolist())

@app.route("/simul/count/maybe")
def countSimulationForMaybe():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)

        data = redisClient.get('simulation')
        df = pd.read_json(data)
        print("df from redis")
        # print(df)

        x = df[['기준_년_코드', '기준_분기_코드', '총_직장_인구_수', '점포수', '프랜차이즈_점포_수', '소득_구간_코드', '지출_총금액', '총_생활인구_수',
                '총 상주인구 수', '아파트_평균_시가', '집객시설_수', '분기당_매출_금액/점포수']]

        df['분기당_매출_건수/점포수'] = df['분기당_매출_건수']/df['점포수']
        y = df[['분기당_매출_건수/점포수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

        from sklearn.preprocessing import MinMaxScaler
        scaler = MinMaxScaler()

        normalization_df = features_polynomial.copy()
        normalization_df[:] = scaler.fit_transform(normalization_df[:])

        x_train = x.copy()

        x_test1 = x[(x['기준_년_코드']==2022) & (x['기준_분기_코드']==4)]
        x_test2 = x[x['기준_년_코드'] == 2023]
        x_test = pd.concat([x_test1, x_test2])
        print(x_test)
        y_train = y.copy()

        regression = LinearRegression()
        regression.fit(x_train, y_train)

        y_predict = regression.predict(x_test)

        y_predict = y_predict.astype('int64')

        return json.dumps(y_predict.flatten().tolist())

@app.route("/simul/sales/already")
def salesSimulationForAlready():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        print("get already sales simulation")

        connection = pymongo.MongoClient("mongodb://localhost:27017/")
        db = connection["simulation"]
        simul = db["simul"]

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))
        year = int(parse.unquote(request.args.get('year')))
        quarter = int(parse.unquote(request.args.get('quarter')))
        value = int(parse.unquote(request.args.get('value')))


        # print(type(dongName) + " "  + type(industryName ))
        print("dongName :" + dongName + ", industryName : " + industryName )

        myquery = {"읍면동명": dongName, "서비스_업종_코드_명": industryName}

        doc = simul.find(myquery)

        documents = []
        for x in doc: documents.append(x)

        df = pd.DataFrame(documents)
        index = df.index[(df['기준_년_코드'] == year) & (df['기준_분기_코드'] == quarter) & (df['읍면동명'] == dongName) & (
                        df['서비스_업종_코드_명'] == industryName)].tolist()[0]
        df.loc[(df['기준_년_코드'] == year) & (df['기준_분기_코드'] == quarter) & (df['읍면동명'] == dongName) & (
                        df['서비스_업종_코드_명'] == industryName), '분기당_매출_금액/점포수'] = value

        df.info()
        len(df)
        # print(df)
        df = df.astype({'분기당_매출_금액/점포수': 'int64'})

        df.drop(['_id', '시군구명', '읍면동명', '서비스_업종_코드', '서비스_업종_코드_명'], axis=1, inplace=True)

        data = df.to_json(force_ascii=False, orient='records', indent=4)

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)
        redisClient.set('simulation', data)

        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '총_생활인구_수', '소득_구간_코드', '지출_총금액', '총 상주인구 수',
                '총_직장_인구_수', '아파트_평균_시가', '집객시설_수']]

        y = df[['분기당_매출_금액/점포수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

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


        y_predict = y_predict.astype('int64')

        list = y_predict.flatten().tolist()
        # list[index] = value

        return json.dumps(list)

@app.route("/simul/life/already")
def lifeSimulationForAready():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        print("get already life simulation")

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)

        data = redisClient.get('simulation')
        df = pd.read_json(data)
        print("df from redis")

        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '분기당_매출_금액/점포수', '소득_구간_코드', '지출_총금액', '총 상주인구 수',
                '총_직장_인구_수', '아파트_평균_시가', '집객시설_수']]

        y = df[['총_생활인구_수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

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


        y_predict = y_predict.astype('int64')

        list = y_predict.flatten().tolist()
        # list[index] = value

        return json.dumps(list)

@app.route("/simul/resident/already")
def residentSimulationForAready():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        print("get already life simulation")

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)

        data = redisClient.get('simulation')
        df = pd.read_json(data)
        print("df from redis")

        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '분기당_매출_금액/점포수', '소득_구간_코드', '지출_총금액', '총_생활인구_수',
                '총_직장_인구_수', '아파트_평균_시가', '집객시설_수']]

        y = df[['총 상주인구 수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

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


        y_predict = y_predict.astype('int64')

        list = y_predict.flatten().tolist()
        # list[index] = value

        return json.dumps(list)

@app.route("/simul/job/already")
def jobSimulationForAready():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        print("get already life simulation")

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)

        data = redisClient.get('simulation')
        df = pd.read_json(data)
        print("df from redis")

        x = df[['기준_년_코드', '기준_분기_코드', '분기당_매출_건수', '점포수', '프랜차이즈_점포_수', '분기당_매출_금액/점포수', '소득_구간_코드', '지출_총금액', '총_생활인구_수',
                '총 상주인구 수', '아파트_평균_시가', '집객시설_수']]

        y = df[['총_직장_인구_수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

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


        y_predict = y_predict.astype('int64')

        list = y_predict.flatten().tolist()
        # list[index] = value

        return json.dumps(list)


@app.route("/simul/count/already")
def countSimulationForAready():
        import sys
        import inspect
        import pymongo
        import pandas as pd
        import numpy as np
        from sklearn.model_selection import train_test_split
        from sklearn.linear_model import LinearRegression
        from sklearn.preprocessing import PolynomialFeatures
        import json

        print("get already life simulation")

        dongName = parse.unquote(request.args.get('dongName'))
        industryName = parse.unquote(request.args.get('industryName'))

        # Create a redis client
        redisClient = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)

        data = redisClient.get('simulation')
        df = pd.read_json(data)
        print("df from redis")

        x = df[['기준_년_코드', '기준_분기_코드', '총_직장_인구_수', '점포수', '프랜차이즈_점포_수', '분기당_매출_금액/점포수', '소득_구간_코드', '지출_총금액', '총_생활인구_수',
                '총 상주인구 수', '아파트_평균_시가', '집객시설_수']]

        y = df[['분기당_매출_건수']]

        polynomial = PolynomialFeatures(degree=2, include_bias=False)
        features_polynomial = polynomial.fit_transform(x)

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


        y_predict = y_predict.astype('int64')

        list = y_predict.flatten().tolist()
        # list[index] = value

        return json.dumps(list)
if __name__ == "__main__":
        # # Create a redis client
        # redisClient = redis.StrictRedis(host='localhost', port=6379, db=0)

        # print(simulation("개포2동", "한식음식점"))
        app.run(debug=False, host="127.0.0.1", port=5000)
