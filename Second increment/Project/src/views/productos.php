<?php require("../includes/cabecera.php"); ?>

<body class="bg-[#F5F5F5]">
	<div class="px-10 bg-rojo w-full h-[72px] flex items-center sticky top-0 z-50 ">
		<a href="#" class="uppercase font-extrabold text-lg text-blanco">Cancelar</a>
	</div>

	<h1 class="text-center uppercase text-[27px] font-extrabold py-8">Resumen general del artículo</h1>
	
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
                <p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Clave del artículo:</p>
                <p class="text-lg">0271</p>
            </li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Número de partida:</p>
				<p class="text-lg">21601</p>
			</li>


			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Tipo de unidad:</p>
				<p class="text-lg">Litro</p>
			</li>
			
			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Número de almacen:</p>
				<p class="text-lg">4</p>
			</li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Número de entradas:</p>
				<p class="text-lg">8</p>
			</li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Número de salidas:</p>
				<p class="text-lg">6</p>
			</li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Número de existencias:</p>
				<p class="text-lg">2</p>
			</li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Último costo unitario del artículo:</p>
				<p class="text-lg">$27.60</p>
			</li>

			<li class="flex items-center">
				<p class="uppercase font-extrabold pr-[7px] py-[13px] text-lg">Costo medio del artículo:</p>
				<p class="text-lg">$40</p>
			</li>
		</ul>

		<div class="flex items-center mt-[0.25rem] pb-5 mx-[2rem] justify-center md:justify-end">

			<div class="flex w-11/12 md:w-auto">
				<button type="submit" class="bg-[#55EFC4] w-11/12 md:w-[80px] h-[50px] flex items-center justify-center rounded-[3px] mr-[16px]">
                    <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29 15.3269V30.3077C29 31.287 28.5733 32.2261 27.8138 32.9185C27.0543 33.611 26.0241 34 24.95 34H6.05C4.97587 34 3.94574 33.611 3.18622 32.9185C2.4267 32.2261 2 31.287 2 30.3077V5.69231C2 4.71305 2.4267 3.77389 3.18622 3.08145C3.94574 2.38901 4.97587 2 6.05 2H14.382C15.0979 2.0001 15.7844 2.25935 16.2906 2.72077L28.2094 13.5869C28.7155 14.0484 28.9999 14.6743 29 15.3269Z" stroke="white" stroke-width="3" stroke-linejoin="round"/>
                        <path d="M8.75 26.6157H22.25M15.5 2.61572V11.8465C15.5 12.4993 15.7845 13.1254 16.2908 13.5871C16.7972 14.0487 17.4839 14.308 18.2 14.308H28.325L15.5 2.61572ZM8.75 20.4619H22.25H8.75Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
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