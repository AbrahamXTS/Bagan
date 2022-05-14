from sqlalchemy import Table
from config.db import meta, engine

usuarios = Table('usuarios', meta, autoload = True, autoload_with=engine) 

areas = Table('areas', meta, autoload = True, autoload_with=engine)

partidas = Table('catalogo_partidas', meta, autoload = True, autoload_with=engine)

almacenes = Table('almacenes', meta, autoload = True, autoload_with=engine)

productos = Table('producto', meta, autoload = True, autoload_with=engine)

vale_entrada = Table('vale_entrada', meta, autoload = True, autoload_with=engine)

lista_vales_entrada = Table('lista_vales_entrada',meta, autoload = True, autoload_with=engine)
