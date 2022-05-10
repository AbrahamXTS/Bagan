from fastapi import FastAPI
from routes.handleForLogin import userLogin
from routes.handleForRegister import newUser

app = FastAPI()

app.include_router(userLogin)
app.include_router(newUser)

