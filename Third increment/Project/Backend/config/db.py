
from sqlalchemy import create_engine, MetaData

engine = create_engine("")
coneccion = engine.connect()

meta = MetaData()

if coneccion:
    print("Conección exitosa")
else: 
    print("Errore en la conección")
    