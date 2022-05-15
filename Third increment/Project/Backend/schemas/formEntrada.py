from typing import List
from pydantic import BaseModel
from schemas.Productos import ProductosEntrada

class FormEntrada(BaseModel):
    procedencia: str
    fecha: str
    factura: int
    totalEntrada: float
    productos: List[ProductosEntrada]