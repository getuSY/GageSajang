import redis
import pandas as pd
import pymongo


# Create a redis client
redisClient = redis.StrictRedis(host='localhost', port=6379, db=0)

# Create un dataframe from MongoDB
connection = pymongo.MongoClient("mongodb://localhost:27017/")
db = connection["simulation"]
simul = db["simul"]
doc = simul.find()


documents = []
for x in doc: documents.append(x)

df = pd.DataFrame(documents)
df
len(df)
df.drop(['_id'], axis = 1, inplace=True)

data = df.to_json(force_ascii=False, orient = 'records', indent=4)
data
len(data)
redisClient.set('small', 9999)
redisClient.set('simulation', data)

# Retrieve the data
test = redisClient.get('small')
test
blob = redisClient.get('simulation')
len(blob)
df_from_redis = pd.read_json(blob)
df_from_redis.head()

redisClient.keys()