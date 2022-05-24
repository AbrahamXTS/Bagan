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

</body>

</html>