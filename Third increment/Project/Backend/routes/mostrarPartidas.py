from config.db import coneccion
from fastapi import APIRouter

partidas = APIRouter()

@partidas.get('/partidas')
def mostrarPartidas():
    return coneccion.execute("SELECT * FROM catalogo_partidas").fetchall()


