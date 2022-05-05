<?php 

	require("../includes/cabecera.php"); 
	require("../includes/database.php");

	$resultado = mysqli_query($db, "SELECT area FROM areas");
	$fila = mysqli_fetch_all($resultado);
?>

<body class="bg-gris-claro">
	<div class="px-10 bg-rojo w-full h-[72px] flex items-center sticky top-0 z-50 justify-between">
		<a href="#" class="uppercase text-blanco font-extrabold text-lg">Cancelar</a>
	</div>

    <form class="md:grid md:grid-cols-2 items-center drop-shadow-xl  mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700">
		<div class="flex flex-col pt-5 px-5 md:pl-10 md:pr-5">
			<label for="procedencia"class="p-2 uppercase font-extrabold text-lg">Área solicitante</label>
            <select name="procedencia" class=" text-texto outline-none text-lg pl-2 h-[58px] w-full rounded-[10px] bg-blanco border-2 border-gris" id="procedencia">
                <option disabled selected>Seleccione</option>
				<?php 
					foreach($fila as $area) {
						echo '
							<option value="'.$area[0].'">'.$area[0].'</option>
						';
					}
				?>
            </select>
		</div>

		<div class="flex flex-col pt-5 px-5 md:pl-5  md:pr-10 ">
			<label for="fecha"class="p-2 uppercase font-extrabold text-lg">Fecha</label>
			<input type="date" id="fecha" class=" text-texto outline-none text-lg px-3 h-[58px] w-full rounded-[10px] border-2 border-gris">
		</div>

		<div class="pt-10 pb-5 px-5 md:px-10 col-start-1 col-end-3">
			<button class="bg-rojo uppercase w-full h-[70px] text-lg font-bold text-blanco">Continuar</button>
		</div>
    </form>

</body>
</html>