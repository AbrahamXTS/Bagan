
def obtenerClaves(db):
    claves = db.execute("SELECT clave_articulo FROM producto").fetchall()
    return claves