from config.db import engine
from fastapi import APIRouter

almacenes = APIRouter()

@almacenes.get('/almacenes')
def getAlmacen():
    conexion = engine.connect()
    almacenes = conexion.execute("SELECT * FROM almacenes").fetchall()
    conexion.close()
    engine.dispose()
    return almacenes