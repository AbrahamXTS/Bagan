from fastapi import FastAPI
from routes.handleFormLogin import userLogin
from routes.handleFormRegister import newUser
from routes.handleFormEntrada import formEntrada
from routes.getPartidas import partidas
from routes.getAlmacen import almacenes
from routes.getProductos import productos
from routes.getSolicitantes import solicitantes
from routes.handleFormSalida import formSalida
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/")
def root():
    return {"Hello": "World"}

app.include_router(userLogin)
app.include_router(newUser)
app.include_router(formEntrada)
app.include_router(formSalida)
app.include_router(partidas)
app.include_router(almacenes)
app.include_router(solicitantes)
app.include_router(productos)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","https://abraham-espinosa-09.netlify.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
