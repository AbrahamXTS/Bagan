from sqlalchemy import Table
from config.db import meta, engine

usuarios = Table('usuarios', meta, autoload = True, autoload_with=engine) 

areas = Table('areas', meta, autoload = True, autoload_with=engine)

