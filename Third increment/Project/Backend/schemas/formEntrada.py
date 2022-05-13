from typing import List
from pydantic import BaseModel
from schemas.Productos import Productos

class FormEntrada(BaseModel):
    procedencia: str
    fecha: str
    factura: int
    totalEntrada: float
    productos: List[Productos]