from pydantic import BaseModel

class Productos(BaseModel):
    nombre: str
    partida: int 
    clave: int 
    almacen: int 
    unidad: str 
    precio: float
    cantidad: int 