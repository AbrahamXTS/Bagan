from datetime import date

def obtenerFichasEntrada(db):
    sentencia = '''SELECT clave_articulo, nombre_articulo, fecha, tipo_unidad, cantidad_entrada, partidas FROM lista_vales_entrada
                   INNER JOIN vale_entrada ON vale_entrada.no_factura = lista_vales_entrada.factura
                   INNER JOIN producto ON producto.clave_articulo = lista_vales_entrada.articulo
                   INNER JOIN catalogo_partidas ON catalogo_partidas.id = producto.id_partida
                '''
    fichasEntrada = db.execute(sentencia).fetchall()

    return fichasEntrada

def obtenerFichasSalida(db): 
    fecha = str(date.today())
    sentencia = '''SELECT clave_articulo, nombre_articulo, fecha, tipo_unidad, cantidad_salida, partidas FROM lista_vales_salida
                   INNER JOIN vale_salida ON vale_salida.id = lista_vales_salida.id_vale_salida
                   INNER JOIN producto ON producto.clave_articulo = lista_vales_salida.articulo
                   INNER JOIN catalogo_partidas ON catalogo_partidas.id = producto.id_partida
                '''
    fichasSalida = db.execute(sentencia).fetchall()
    
    return fichasSalida

def obtenerFichaProducto(ficha, tipo): 
    producto = {
                'tipo': tipo,
                'fecha': ficha['fecha'],
                'clave': ficha['clave_articulo'],
                'nombre': ficha['nombre_articulo'], 
                'unidad': ficha['tipo_unidad'],
                'partida': ficha['partidas']
            }
    if tipo == "Entrada":
        producto['cantidadEntrada'] = ficha['cantidad_entrada']
    else: 
        producto['cantidadSalida'] = ficha['cantidad_salida']
        
    
    return producto