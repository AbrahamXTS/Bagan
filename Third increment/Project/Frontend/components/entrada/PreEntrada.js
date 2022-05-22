import React from 'react'

export default function PreEntrada({handleFirstSubmit, setProcedencia, setFecha, setFactura}) {
  return (
    <main className="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 px-4 md:px-8 py-5">
        <form className="md:grid md:grid-cols-2 items-center md:gap-x-6" onSubmit={handleFirstSubmit}>
            <div className="flex flex-col mb-[10px]">
                <label htmlFor="procedencia"className="p-2 font-bold text-lg">PROCEDENCIA</label>
                <input onChange={(e) => setProcedencia(e.target.value)} type="text" id="procedencia" name="procedencia" placeholder="Digite la tienda de procedencia" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
            </div>
            <div className="flex flex-col my-[10px] md:mt-0">
                <label htmlFor="fecha"className="p-2 font-bold text-lg">FECHA</label>
                <input onChange={(e) => setFecha(e.target.value)} type="date" id="fecha" name="fecha" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
            </div>
            <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                <label htmlFor="factura"className="p-2 font-bold text-lg">NO. DE FACTURA</label>
                <input onChange={(e) => setFactura(e.target.value)} type="number" id="factura" name="factura" placeholder="Digite el numero de factura" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
            </div>
            <div className="flex flex-col md:col-start-1 md:col-end-3 mt-5">
                <button type="submit" className="font-bold bg-rojo text-lg text-blanco h-[60px] md:h-[70px] w-full">CONTINUAR</button>
            </div>
        </form>		
    </main>
  )
}
