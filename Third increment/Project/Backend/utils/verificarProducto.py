from config.db import engine
from models.tables import vale_entrada, lista_vales_entrada, productos

def verificarProducto(claveProducto, db):
    existe = db.execute(productos.select().where(productos.c.clave_articulo == claveProducto)).first()
    
    if existe == None:
        resultado = 0
    else:
        resultado = 1
    
    return resultado