from sqlalchemy import create_engine, MetaData

engine = create_engine() 
# engine = create_engine("mysql://b7b3847958afa6:7a302153@us-cdbr-east-05.cleardb.net/heroku_734445b07dc2ede")
meta = MetaData()