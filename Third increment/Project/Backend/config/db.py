from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql://root:896y434Y21nKzEunuaBm@containers-us-west-59.railway.app:6881/railway") 
# engine = create_engine("mysql://b7b3847958afa6:7a302153@us-cdbr-east-05.cleardb.net/heroku_734445b07dc2ede")
meta = MetaData()