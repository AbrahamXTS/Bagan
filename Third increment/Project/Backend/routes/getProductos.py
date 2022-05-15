from fastapi import APIRouter
from config.db import engine
from models.tables import productos

productos = APIRouter()

@productos.get('/productos')
def mostrarProductos():
    conexion = engine.connect()    
    sentencia = "SELECT AVG(precio_unitario) AS promedio, clave_articulo, nombre_articulo, tipo_unidad, cantidad FROM lista_vales_entrada INNER JOIN producto ON producto.clave_articulo = lista_vales_entrada.articulo GROUP BY clave_articulo"
    articulos = conexion.execute(sentencia).fetchall()
    
    conexion.close()
    engine.dispose()
    return articulos
