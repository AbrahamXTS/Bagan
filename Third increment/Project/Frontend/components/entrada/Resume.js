export default function Resume({datos}) {

	console.log(datos)

  	return (
		<>
			<header class="py-8">
				<h1 class="text-center uppercase text-[27px] font-bold">Resumen de factura</h1>
			</header>

			<div class="drop-shadow-xl mx-auto rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 py-5 px-8 mb-8">
				<ul>
					<li class="flex items-center">
						<p class="uppercase font-bold my-[13px] mr-2 text-lg">Total de articulos:</p> 
						<p class="text-lg">{datos.productos.length}</p>
					</li>

					<li class="flex items-center ">
						<p class="uppercase font-bold my-[13px] mr-2 text-lg">Total de entradas:</p>
						<p class="text-lg">{`$${datos.totalEntrada}`}</p>
					</li>

					<li class="flex items-center ">
						<p class="uppercase font-bold mr-2 my-[13px] text-lg">Tienda de procedencia:</p>
						<p class="text-lg">{datos.procedencia}</p>
					</li>

					<li class="flex items-center">
						<p class="uppercase font-bold mr-2 my-[13px] text-lg">Número de factura:</p>
						<p class="text-lg">{datos.factura}</p>
					</li>
				</ul>
				<div class="md:flex mx-auto md:justify-end mt-5 md:mt-[10px]">
					<button type="button" class="bg-azul w-full md:w-[80px] h-[50px] rounded-[3px]">
						<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /> <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /> <rect x="7" y="13" width="10" height="8" rx="2" /> </svg>
					</button>
				</div>
			</div>

			{datos.productos.map((producto) => (
				<div class="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 px-4 md:px-8 py-8">
					<ul>
						<li class="flex items-center">
							<p class="uppercase font-bold mr-[7px] my-[13px] text-lg">Nombre del articulo:</p> 
							<p class="text-lg">{producto.nombre}</p>
						</li>
						<li class="flex items-center">
							<p class="uppercase font-bold mr-[7px] my-[13px] text-lg">Numero de partida:</p>
							<p class="text-lg">{producto.partida}</p>
						</li>
						<li class="flex items-center">
							<p class="uppercase font-bold mr-[7px] my-[13px] text-lg">Clave del articulo:</p>
							<p class="text-lg">{producto.clave}</p>
						</li>
						<li class="flex items-center">
							<p class="uppercase font-bold mr-[7px] my-[13px] text-lg">Tipo de unidad:</p>
							<p class="text-lg">{producto.unidad}</p>
						</li>
						<li class="flex items-center">
							<p class="uppercase font-bold mr-[7px] my-[13px] text-lg">Cantidad de artículos:</p>
							<p class="text-lg">{producto.cantidad}</p>
						</li>
						<li class="flex items-center">
							<p class="uppercase font-bold mr-[7px] my-[13px] text-lg">Precio unitario:</p>
							<p class="text-lg">{`$${producto.precio}`}</p>
						</li>
						<li class="flex items-center">
							<p class="uppercase font-bold mr-[7px] my-[13px] text-lg">Precio total:</p>
							<p class="text-lg">{`$${producto.cantidad * producto.precio}`}</p>
						</li>
					</ul>
				</div>
			))}
		</>
  	)
}
