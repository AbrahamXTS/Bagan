from fastapi import APIRouter
from config.db import coneccion
from models.tables import usuarios
from schemas.user import UserLogin
from config.cryptography import f



userLogin = APIRouter()

@userLogin.post('/login')
def isLogin(user: UserLogin):
    userLogin = {"correo_electronico": user.correo_electronico.lower()}
    userLogin["contrasena"] = f.encrypt(user.contrasena.encode("utf-8")) 
    
    user = coneccion.execute(usuarios.select().where((usuarios.c.correo_electronico == userLogin["correo_electronico"]) and (usuarios.c.contrasena == userLogin["contrasena"] ))).first()

    if user: 
        print("Inicio de sesión correcto")
    else:
        print("El inicio de sesión no fue exitoso")
        
    return 204
    

