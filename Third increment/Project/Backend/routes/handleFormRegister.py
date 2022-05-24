from fastapi import APIRouter
from config.db import engine
from models.tables import usuarios
from schemas.Users import UserRegister
from config.cryptography import f

newUser = APIRouter()

@newUser.post('/register')
def registrarUsuario(user:UserRegister):
    conexion = engine.connect()
    nuevoUsuario = {"nombre": user.nombre, "correo_electronico": user.email.lower()}
    nuevoUsuario["contrasena"] = f.encrypt(user.contrasena.encode("utf-8"))    
    
    user = conexion.execute(usuarios.select().where(usuarios.c.correo_electronico == nuevoUsuario["correo_electronico"])).first()
    
    if user:
        message = "El email ingresado ya existe en el sistema."
    else:
        resultado = conexion.execute(usuarios.insert().values(nuevoUsuario))
        if resultado:
            message = 204
    conexion.close()
    engine.dispose()
    return message
    
    
    



