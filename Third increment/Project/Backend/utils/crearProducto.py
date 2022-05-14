from models.tables import vale_entrada, lista_vales_entrada, productos

def crearProducto(producto, db):
    nuevoProducto = {"id_partida": producto.partida, "nombre_articulo":producto.nombre, "clave_articulo": producto.clave,
                     "tipo_unidad": producto.unidad, "id_almacen": producto.almacen, "cantidad": producto.cantidad}
    resultado = db.execute(productos.insert().values(nuevoProducto))
    
    if resultado:
        message = "Se agrego un nuevo producto"
    else:
        message = "No se pudo agregar el producto"
    
    print(resultado)
