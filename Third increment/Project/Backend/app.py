from fastapi import FastAPI
from routes.handleForLogin import userLogin
from routes.handleForRegister import newUser
from routes.mostrarPartidas import partidas


app = FastAPI()

app.include_router(userLogin)
app.include_router(newUser)
app.include_router(partidas)



