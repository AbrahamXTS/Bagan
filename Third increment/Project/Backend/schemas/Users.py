from pydantic import BaseModel
from typing import Optional

class UserLogin(BaseModel): 
    email: str 
    contrasena: str 
    
class UserRegister(BaseModel): 
    id: Optional[int]
    nombre: str
    contrasena: str
    email: str