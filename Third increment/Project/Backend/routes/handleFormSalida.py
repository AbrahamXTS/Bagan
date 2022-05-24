from email import message
from fastapi import APIRouter
from config.db import engine
from models.tables import vale_salida, lista_vales_salida
from utils.actualizarProducto import actualizarProductoSalida
from utils.obtenerCantidadExistente import obtenerCantidadExistente
from schemas.FormSalida import FormSalida

formSalida = APIRouter()

@formSalida.post('/salida')
def llenarFormulario(form:FormSalida):
    conexion = engine.connect()

    datoSalida = {'id_solicitante': form.solicitante, 'fecha':form.fecha, 'total_salida':form.totalSalida}    
    idValeSalida = llenarValeSalida(datoSalida, conexion) #Retorna el id generado al llenar la tabla 'vale_salida'

    for producto in form.productos:
        
        cantidadExistente = obtenerCantidadExistente(producto.clave, conexion)   
         
        if cantidadExistente >= producto.cantidad:
            actualizarProductoSalida(producto.clave, producto.cantidad, cantidadExistente, conexion)
            llenarListaSalida(idValeSalida, producto.cantidad, producto.clave, producto.precio, conexion)
        else: 
            message = "La cantidad solicitada es mayor a la existente" 

    conexion.close()
    engine.dispose()
    return 204

def llenarValeSalida(datoSalida, db):
    resultado = db.execute(vale_salida.insert().values(datoSalida))
    
    return resultado.lastrowid
    
def llenarListaSalida(idValeSalida, cantidad, claveProducto, precio, db): 
    listaValeSalida = {"id_vale_salida": idValeSalida,"cantidad_salida":cantidad,"articulo":claveProducto, "precio_unitario":precio}
    
    resultado = db.execute(lista_vales_salida.insert().values(listaValeSalida))