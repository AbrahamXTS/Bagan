import React from 'react'

export default function Resume({datos, productosBD, areas}) {

    const { area } = areas.find((area) => area.id == datos.solicitante)

     return (
        <>
			<header className="py-8">
				<h1 className="text-center uppercase text-[27px] font-bold">Resumen de salida</h1>
			</header>

            <div className="drop-shadow-xl mx-auto rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 py-5 px-8 mb-8">
                <ul>
					<li className="flex items-center">
						<p className="uppercase font-bold my-[13px] mr-2 text-lg">Total de articulos:</p> 
						<p className="text-lg">{datos.productos.length}</p>
					</li>
					<li className="flex items-center ">
						<p className="uppercase font-bold my-[13px] mr-2 text-lg">Total de salidas:</p>
						<p className="text-lg">{`$${datos.totalSalida}`}</p>
					</li>
					<li className="flex items-center">
						<p className="uppercase font-bold mr-2 my-[13px] text-lg">Área solicitante:</p>
						<p className="text-lg">{area}</p>
					</li>
				</ul>
				<div className="md:flex mx-auto md:justify-end mt-5 md:mt-[10px]">
					<button type="button" className="bg-azul w-full md:w-[80px] h-[50px] rounded-[3px]">
						<svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /> <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /> <rect x="7" y="13" width="10" height="8" rx="2" /> </svg>
					</button>
				</div>
            </div>

            {datos.productos.map((producto, index) => {

                const {nombre_articulo, tipo_unidad} = productosBD.find((productoBD) => productoBD.clave_articulo == producto.clave);
                
                return (
                    <div key={index} className="drop-shadow-xl  mx-auto rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 mb-8 py-3">
                        <li className="list-none pl-[30px] py-[1rem]">
                            <div className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Nombre del articulo:</p> 
                                <p className="text-lg">{nombre_articulo}</p>
                            </div>
                            <div className="flex items-center ">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Clave del articulo:</p>
                                <p className="text-lg">{producto.clave}</p>
                            </div>
                            <div className="flex items-center ">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Tipo de unidad:</p>
                                <p className="text-lg">{tipo_unidad}</p>
                            </div>
                            <div className="flex items-center ">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Cantidad de artículos:</p>
                                <p className="text-lg">{producto.cantidad}</p>
                            </div>
                            <div className="flex items-center ">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Precio unitario:</p>
                                <p className="text-lg">{`$${producto.precio}`}</p>
                            </div>
                            <div className="flex items-center ">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Precio total:</p>
                                <p className="text-lg">{`$${producto.precio * producto.cantidad}`}</p>
                            </div>
                        </li>
                    </div>
                )
            })}
        </>
    )
}
