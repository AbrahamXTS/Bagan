from fastapi import APIRouter
from config.db import engine
from schemas.FormEntrada import FormEntrada
from utils.crearProducto import crearProducto
from utils.verificarProducto import verificarProducto
from utils.actualizarProducto import actualizarProductoEntrada
from models.tables import vale_entrada, lista_vales_entrada, productos

formEntrada = APIRouter()

@formEntrada.post('/entrada')
def llenarFormulario(form:FormEntrada):
    conexion = engine.connect()
    
    datoEntrada = {
        'no_factura':form.factura, 
        'procedencia':form.procedencia, 
        'fecha':form.fecha, 
        'total_entrada':form.totalEntrada
    }
    llenarValeEntrada(datoEntrada, conexion)
    
    for producto in form.productos:
        if verificarProducto(producto.clave, conexion) == 1: 
            actualizarProductoEntrada(producto, conexion)
        else:
            crearProducto(producto, conexion)
        llenarListaEntrada(datoEntrada["no_factura"], producto.cantidad, producto.clave, producto.precio, conexion)
        
    conexion.close()
    engine.dispose()
    return 204

def llenarValeEntrada(datoEntrada, db):
    resultado = db.execute(vale_entrada.insert().values(datoEntrada))
    if resultado:
        message = "Los datos se introdujeron correctamente"
    else:
        message = "Los datos no pudieron ser introducidos"
    
    print(message)

def llenarListaEntrada(factura, cantidad, claveArticulo, precio, db): 
    listaValeEntrada = {"factura": factura, "articulo": claveArticulo, "cantidad_entrada": cantidad, "precio_unitario": precio}
    
    resultado = db.execute(lista_vales_entrada.insert().values(listaValeEntrada))
    
    if resultado:
        message = "Nuevo dato en la lista de entradas"
    else:
        message = "No se pudo introducir un nuevo dato en la lista de entradas"

    print(message)
