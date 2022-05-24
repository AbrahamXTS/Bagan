
def obtenerUltimoPrecio(clave, db):
    sentencia = "SELECT precio_unitario AS ultimoPrecio FROM lista_vales_entrada WHERE articulo = %s ORDER BY id DESC"
    ultimoPrecio = db.execute(sentencia,(str(clave))).first()
    return ultimoPrecio

def obtenerProducto(clave, db):
    sentencia = ''' SELECT nombre_articulo, cantidad, tipo_unidad, partidas, almacen FROM producto
                    INNER JOIN catalogo_partidas ON catalogo_partidas.id = producto.id_partida
                    INNER JOIN almacenes ON almacenes.id = producto.id_almacen
                    WHERE clave_articulo = %s'''
    datosProducto =  db.execute(sentencia,(str(clave))).first()
    return datosProducto

def obtenerEntradas(clave, db):
    sentencia = "SELECT AVG(precio_unitario) AS promedio, SUM(cantidad_entrada) AS cantidadEntrada FROM lista_vales_entrada WHERE articulo = %s"
    datosEntrada = db.execute(sentencia,(str(clave))).first()
    return datosEntrada

def obtenerSalidas(clave, db): 
    sentecia = "SELECT SUM(cantidad_salida) AS cantidadSalida FROM lista_vales_salida WHERE articulo = %s"
    datosSalida = db.execute(sentecia,(str(clave))).first()
    return datosSalida

def obtenerDatosProducto(clave, ultimoPrecio, datosProducto, datosEntrada, datosSalida):
    producto = {
        'nombre':datosProducto['nombre_articulo'],
        'clave':clave, 
        'partida':datosProducto['partidas'],
        'unidad': datosProducto['tipo_unidad'],
        'almacen':datosProducto['almacen'], 
        'entradas':datosEntrada['cantidadEntrada'], 
        'salidas':datosSalida['cantidadSalida'], 
        'existencias':datosProducto['cantidad'], 
        'precioPromedio':datosEntrada['promedio'], 
        'ultimoPrecio': ultimoPrecio['ultimoPrecio'] 
    }
    
    if producto['salidas'] == None:
        producto['salidas'] = 0; 
    return producto