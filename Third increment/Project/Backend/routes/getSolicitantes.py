from config.db import engine
from fastapi import APIRouter

solicitantes = APIRouter()

@solicitantes.get('/solicitantes')
def getSolicitantes():
    conexion = engine.connect()
    solicitantes = conexion.execute("SELECT * FROM areas").fetchall()
    conexion.close()
    engine.dispose()
    return solicitantes