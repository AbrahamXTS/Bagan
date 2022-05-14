from config.db import engine
from fastapi import APIRouter

partidas = APIRouter()

@partidas.get('/partidas')
def getPartidas():
    conexion = engine.connect()
    partidas = conexion.execute("SELECT * FROM catalogo_partidas").fetchall()
    conexion.close()
    engine.dispose()
    return partidas


