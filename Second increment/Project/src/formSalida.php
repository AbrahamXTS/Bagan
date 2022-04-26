<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Formulario de Salida</title>
	<link href="../dist/output.css" rel="stylesheet" />
</head>

<body class="bg-gris-claro">
	<div class="px-10 bg-rojo w-full h-[72px] flex items-center sticky top-0 z-50 justify-between">
		<a href="#" class="uppercase text-blanco font-extrabold text-lg">Cancelar</a>
	</div>

    <form class="md:grid md:grid-cols-2 items-center drop-shadow-xl  mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700">
		<div class="flex flex-col pt-5 px-5 md:pl-10 md:pr-5">
			<label for="procedencia"class="p-2 uppercase font-extrabold text-lg">Área solicitante</label>
            <select name="procedencia" class=" text-texto outline-none text-lg pl-2 h-[58px] w-full rounded-[10px] bg-blanco border-2 border-gris" id="procedencia">
                <option disabled selected>Seleccione</option>
            </select>
		</div>

		<div class="flex flex-col pt-5 px-5 md:pl-5  md:pr-10 ">
			<label for="fecha"class="p-2 uppercase font-extrabold text-lg">Fecha</label>
			<input type="date" id="fecha" class=" text-texto outline-none text-lg px-3 h-[58px] w-full rounded-[10px] border-2 border-gris">

<!--
		<svg xmlns="http://www.w3.org/2000/svg" class=" absolute bottom-[145px] right-[33px] md:top-[80px] md:right-[55px] icon icon-tabler icon-tabler-calendar-event" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<rect x="4" y="5" width="16" height="16" rx="2" />
					<line x1="16" y1="3" x2="16" y2="7" />
						<line x1="8" y1="3" x2="8" y2="7" />
				<line x1="4" y1="11" x2="20" y2="11" />
			<rect x="8" y="15" width="2" height="2" />
		</svg>-->
		</div>

		<div class="pt-10 pb-5 px-5 md:px-10 col-start-1 col-end-3">
			<button class="bg-rojo uppercase w-full h-[70px] text-lg font-bold text-blanco">Continuar</button>
		</div>
    </form>

</body>

</html>