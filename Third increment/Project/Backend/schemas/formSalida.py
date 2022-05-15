from typing import List
from pydantic import BaseModel
from schemas.Productos import ProductosSalida

class FormSalida(BaseModel):
    solicitante: int
    fecha: str
    totalSalida: float
    productos: List[ProductosSalida]