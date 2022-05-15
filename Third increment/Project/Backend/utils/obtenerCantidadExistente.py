from models.tables import productos


def obtenerCantidadExistente(claveProducto, db):
    cantidadExistente = db.execute(productos.select().where(productos.c.clave_articulo == claveProducto)).first()
    
    return cantidadExistente['cantidad']