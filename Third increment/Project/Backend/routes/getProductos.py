from fastapi import APIRouter
from config.db import engine

productos = APIRouter()

@productos.get('/productos')
def mostrarProductos():
    conexion = engine.connect()
    productos = conexion.execute("SELECT * FROM producto").fetchall()
    conexion.close()
    engine.dispose()
    return productos
