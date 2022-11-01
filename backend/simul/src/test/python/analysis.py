# Data
import numpy as np
import pandas as pd
import pymongo
# Visualization
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go

#warning
import warnings


connection = pymongo.MongoClient("mongodb://localhost:27017/")
db = connection["simulation"]
simul = db["simul"]
doc = simul.find()


documents = []
for x in doc: documents.append(x)

df = pd.DataFrame(documents)
df.info()
len(df)

df.drop(['_id', '시군구명', '읍면동명', '서비스_업종_코드', '서비스_업종_코드_명', '분기당_매출_금액'], axis = 1, inplace=True)

corr_df = df.corr()
corr_df = corr_df.apply(lambda x: round(x ,2))
corr_df

s = corr_df.unstack()
s

# Series이므로 DataFrame으로 변경한다.
df = pd.DataFrame(s[s < 1].sort_values(ascending=False), columns=['corr'])
df.style.background_gradient(cmap='viridis')

fig, ax = plt.subplots()
plt.rcParams['font.family'] = 'NanumGothic'
im = ax.imshow(corr_df, cmap='Greys')

# Color Bar
cbar = ax.figure.colorbar(im, ax=ax)

ax.set_xticks(np.arange(len(corr_df.columns)))
ax.set_yticks(np.arange(len(corr_df.index)))

ax.set_xticklabels(corr_df.columns)
ax.set_yticklabels(corr_df.columns)

for x in range(len(corr_df.columns)):
    for y in range(len(corr_df.index)):
        ax.text(y, x, corr_df.iloc[y, x], ha='center', va='center', color='g')

fig.tight_layout()
plt.show()

ax = sns.heatmap(corr_df, annot=True, annot_kws=dict(color='g'), cmap='Greys')
plt.show()
