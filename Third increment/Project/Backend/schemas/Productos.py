from pydantic import BaseModel

class ProductosEntrada(BaseModel):
    nombre: str
    partida: int 
    clave: int 
    almacen: int 
    unidad: str 
    precio: float
    cantidad: int 


class ProductosSalida(BaseModel):
    clave: int 
    precio: float
    cantidad: int 
