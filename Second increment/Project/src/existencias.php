<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Tabla de existencias</title>
	<link href="../dist/output.css" rel="stylesheet" />
</head>

<body class="bg-gris-claro">
	<div class="px-10 bg-rojo w-full h-[72px] flex items-center sticky top-0 z-50">
		<a href="#" class="uppercase text-blanco font-extrabold text-lg">Cancelar</a>
	</div>

	<h1 class="text-center uppercase text-[27px] font-extrabold py-8">Tabla de existencias</h1>
	
	<form class="flex justify-center">
		<input type="search" placeholder="Escriba el nombre o la clave del artículo ..." class="outline-none h-[58px] w-9/12 md:w-[672px] text-texto rounded-l-[10px] indent-5">

		<button type="submit "class="bg-rojo h-[58px] w-[87px] rounded-r-[10px] flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<circle cx="10" cy="10" r="7" />
				<line x1="21" y1="21" x2="15" y2="15" />
			</svg>
		</button>
	</form>

	<div class="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700">
		<ul class="pl-[30px] pt-[1rem]"">
			<li class="flex items-center">		
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Nombre del artculo:</p> 
				<p class="text-lg">Acido muriatico</p>
			</li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Número de partida:</p>
				<p class="text-lg">21601</p>
			</li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Clave del artículo:</p>
				<p class="text-lg">0271</p>
			</li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Tipo de unidad:</p>
				<p class="text-lg">Litro</p>
			</li>
			
			<li class="flex items-center">

				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Número de existencias:</p>
				<p class="text-lg">2</p>
			</li>
		</ul>

		<div class="flex items-center mt-[0.25rem] pb-5 mx-[2rem] justify-end">
			<div class="flex">
				<button type="submit" class="bg-gris-oscuro w-[80px] h-[50px] flex items-center justify-center rounded-[3px] mr-[16px]">
					<svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.4697 2C14.685 2 7.72535 6.07243 2.24643 14.2173C2.09005 14.4523 2.00434 14.7302 2.00016 15.0157C1.99598 15.3013 2.0735 15.5817 2.22293 15.8215C6.43266 22.6556 13.2992 28 21.4697 28C29.5514 28 36.5589 22.6393 40.7765 15.7899C40.9224 15.5548 41 15.281 41 15.0014C41 14.7217 40.9224 14.4479 40.7765 14.2128C36.5493 7.44194 29.4904 2 21.4697 2Z" stroke="#EEEEEE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M21.4991 22.2223C25.3453 22.2223 28.4631 18.9888 28.4631 15.0001C28.4631 11.0113 25.3453 7.77783 21.4991 7.77783C17.653 7.77783 14.5352 11.0113 14.5352 15.0001C14.5352 18.9888 17.653 22.2223 21.4991 22.2223Z" stroke="#EEEEEE" stroke-width="3" stroke-miterlimit="10"/>
					</svg>
				</button>

				<button type="submit" class="bg-azul w-[80px] h-[50px] flex items-center justify-center rounded-[3px]">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-printer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
						<path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
						<rect x="7" y="13" width="10" height="8" rx="2" />
					</svg>
				</button>
			</div>
		</div>

	</div>
</body>

</html>