from models.tables import productos

def actualizarProductoEntrada(producto, db): 
    
    cantidadAnterior = db.execute(productos.select().where(productos.c.clave_articulo == producto.clave)).first()
    
    cantidadActual = cantidadAnterior['cantidad'] + producto.cantidad

    resultado = db.execute(productos.update().values(cantidad = cantidadActual).where(productos.c.clave_articulo == producto.clave))
    
    if resultado: 
        message = "Producto actualizado"
    else: 
        message = "No se pudo actualizar el producto"
    
    print(resultado)

def actualizarProductoSalida(claveProducto, cantidadEntregada, cantidadExistente, db):
    
    nuevaCantidad = cantidadExistente - cantidadEntregada
    
    resultado = db.execute(productos.update().values(cantidad = nuevaCantidad).where(productos.c.clave_articulo == claveProducto))
