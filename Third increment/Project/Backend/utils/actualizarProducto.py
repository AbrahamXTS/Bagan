from models.tables import productos

def actualizarProducto(producto, db): 
    cantidadAnterior = db.execute("SELECT cantidad FROM producto WHERE clave_articulo = clave_articulo",{"clave_articulo":producto.clave}).first()
    
    cantidadActual = cantidadAnterior[0] + producto.cantidad

    resultado = db.execute(productos.update().values(cantidad = cantidadActual).where(productos.c.clave_articulo == producto.clave)).first()
    
    if resultado: 
        message = "Producto actualizado"
    else: 
        message = "No se pudo actualizar el producto"
    
    print(resultado)