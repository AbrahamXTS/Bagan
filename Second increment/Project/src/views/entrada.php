<?php require("../includes/cabecera.php"); ?>

<body class="bg-gris-claro">
	<nav class="px-10 bg-rojo w-full h-[72px] flex items-center sticky top-0 z-10">
		<a href="#" class="uppercase text-blanco font-bold text-lg">Cancelar</a>
	</nav>

	<main>
		<div class="drop-shadow-xl  mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 px-8 py-5">
			<form class="md:grid md:grid-cols-2 items-center md:gap-x-10" method="POST" action="../functions/handleFormEntrada.php">
				<div class="flex flex-col mb-[10px]">
					<label for="procedencia"class="p-2 uppercase font-bold text-lg">Procedencia</label>
					<input type="text" id="procedencia" name="procedencia" placeholder="Digite la tienda de procedencia" class="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
				</div>
		
				<div class="flex flex-col my-[10px] md:mt-0">
					<label for="fecha"class="p-2 uppercase font-bold text-lg">Fecha</label>
					<input type="date" id="fecha" name="fecha" class="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
				</div>
		
				<div class="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
					<label for="factura"class="p-2 uppercase font-bold text-lg">No. de factura</label>
					<input type="number" id="factura" name="factura" placeholder="Digite el numero de factura" class="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
				</div>
		
				<div class="flex flex-col md:col-start-1 md:col-end-3 mt-5 md:mt-[10px]">
					<button type="submit" class="uppercase font-bold bg-rojo text-lg text-blanco h-[70px] w-full">Continuar</button>
				</div>
			</form>		
		</div>
	</main>

</body>

</html>