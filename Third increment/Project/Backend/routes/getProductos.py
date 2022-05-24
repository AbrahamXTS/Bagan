from http.client import ImproperConnectionState
from itertools import product
from math import prod
from fastapi import APIRouter
from config.db import engine
from models.tables import productos
from utils.obtenerClaves import obtenerClaves
from utils.obtenerDatos import obtenerUltimoPrecio, obtenerEntradas, obtenerProducto, obtenerSalidas, obtenerDatosProducto
from datetime import date
from utils.obtenerFichas import obtenerFichasEntrada, obtenerFichasSalida, obtenerFichaProducto
productos = APIRouter()

@productos.get('/productos')
def mostrarProductos():
    conexion = engine.connect()    
    sentencia = '''SELECT AVG(precio_unitario) AS promedio, clave_articulo, nombre_articulo, tipo_unidad, cantidad FROM lista_vales_entrada 
    INNER JOIN producto ON producto.clave_articulo = lista_vales_entrada.articulo GROUP 
    BY clave_articulo
    '''
    articulos = conexion.execute(sentencia).fetchall()
    
    conexion.close()
    engine.dispose()
    return articulos

@productos.get('/existencias')
def mostrarExisteciaProductos(): 
    conexion = engine.connect()    
    sentencia = '''SELECT AVG(precio_unitario) AS promedio, clave_articulo, nombre_articulo, tipo_unidad, cantidad, partidas FROM lista_vales_entrada
                    INNER JOIN producto ON producto.clave_articulo = lista_vales_entrada.articulo 
                    INNER JOIN catalogo_partidas ON catalogo_partidas.id = producto.id_partida
                    GROUP BY clave_articulo'''
    articulos = conexion.execute(sentencia).fetchall()
    conexion.close()
    engine.dispose()
    return articulos

@productos.get('/articulo')
def mostrarResumenArticulos():
    conexion = engine.connect()
    clavesProducto = obtenerClaves(conexion)
    listaProductos = []
    
    for clave in clavesProducto:
        
        ultimoPrecio  = obtenerUltimoPrecio(clave["clave_articulo"], conexion)
        datosProducto = obtenerProducto(clave['clave_articulo'], conexion)
        datosEntrada = obtenerEntradas(clave['clave_articulo'], conexion)
        datosSalida = obtenerSalidas(clave['clave_articulo'], conexion)
        producto = obtenerDatosProducto(clave['clave_articulo'], ultimoPrecio, datosProducto, datosEntrada, datosSalida)
    
        listaProductos.append(producto)
    
    conexion.close()
    engine.dispose()
    return listaProductos


@productos.get('/resumen')
def mostrarResumenMensual():
    conexion = engine.connect()
    fichasMensuales = []
    fecha = str(date.today())
    
    fichasEntrada = obtenerFichasEntrada(conexion)
    fichasSalida = obtenerFichasSalida(conexion)      

    for ficha in fichasEntrada:
        if ficha['fecha'][0:7] == fecha[0:7]:
            producto = obtenerFichaProducto(ficha, "Entrada")
            fichasMensuales.append(producto)

    for ficha in fichasSalida: 
        if ficha['fecha'][0:7] == fecha[0:7]:
            producto = obtenerFichaProducto(ficha, "Salida")
            fichasMensuales.append(producto)
            
    return fichasMensuales