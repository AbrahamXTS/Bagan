from pydantic import BaseModel
from typing import Optional


class UserLogin(BaseModel): 
    correo_electronico: str 
    contrasena: str 
    
class UserRegister(BaseModel): 
    id: Optional[int]
    nombre: str
    contrasena: str
    correo_electronico: str
    
    