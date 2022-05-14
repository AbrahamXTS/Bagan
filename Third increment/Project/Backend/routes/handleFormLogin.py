from fastapi import APIRouter
from config.db import engine
from models.tables import usuarios
from schemas.Users import UserLogin
from config.cryptography import f

userLogin = APIRouter()

@userLogin.post('/login')
def isLogin(user: UserLogin):
    conexion = engine.connect()
    userLogin = {"correo_electronico": user.email.lower()}
    userLogin["contrasena"] = f.encrypt(user.contrasena.encode("utf-8")) 
    
    user = conexion.execute(usuarios.select().where((usuarios.c.correo_electronico == userLogin["correo_electronico"]) and (usuarios.c.contrasena == userLogin["contrasena"] ))).first()

    if user: 
        message = 204
    else:
        message = "Credenciales incorrectas."
    
    conexion.close()
    engine.dispose()
        
    return message