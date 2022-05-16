import React from 'react'

export default function PreSalida({areas, handleFirstSubmit, setSolicitante, setFecha}) {
  return (
    <main className="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 px-4 md:px-8 py-5">
        <form className="md:grid md:grid-cols-2 items-center md:gap-x-6" onSubmit={handleFirstSubmit}>
            <div className="flex flex-col mb-[10px]">
                <label htmlFor="procedencia" className="p-2 font-bold text-lg">ÁREA SOLICITANTE</label>
                <select className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" id="procedencia" onChange={(e) => setSolicitante(e.target.value)}>
                <option value="" hidden>Seleccione</option>
                {areas.map(({id, area}) => (<option key={id} value={id}>{area}</option>))}
                </select>
            </div>
            <div className="flex flex-col mb-[10px]">
                <label htmlFor="fecha" className="p-2 font-bold text-lg">FECHA</label>
                <input type="date" id="fecha" className=" text-texto outline-none text-lg px-3 h-[58px] w-full rounded-[10px] border-2 border-gris" onChange={(e) => setFecha(e.target.value)}/>
            </div>
            <div className="flex flex-col md:col-start-1 md:col-end-3 mt-5">
                <button className="font-bold bg-rojo text-lg text-blanco h-[60px] md:h-[70px] w-full">CONTINUAR</button>
            </div>
        </form>
    </main>
  )
}
