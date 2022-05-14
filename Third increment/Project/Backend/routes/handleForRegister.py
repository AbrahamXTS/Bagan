from fastapi import APIRouter
from config.db import coneccion
from models.tables import usuarios
from schemas.user import UserRegister
from config.cryptography import f

newUser = APIRouter()

@newUser.post('/register')
def registrarUsuario(user:UserRegister):
    nuevoUsuario = {"nombre": user.nombre, "correo_electronico": user.correo_electronico.lower()}
    nuevoUsuario["contrasena"] = f.encrypt(user.contrasena.encode("utf-8"))    
    
    user = coneccion.execute(usuarios.select().where(usuarios.c.correo_electronico == nuevoUsuario["correo_electronico"])).first()
    
    if user:
        print("El email ingresado ya existe en el sistema")
    else:
        resultado = coneccion.execute(usuarios.insert().values(nuevoUsuario))
        if resultado:
            print("El registro fue exitoso")
        else:
            print("El registro ha fallado")
            
    return 204


    
    
    
    



