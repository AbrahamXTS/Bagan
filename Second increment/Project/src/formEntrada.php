<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link href="../dist/output.css" rel="stylesheet" />
</head>

<body class="bg-gris-claro">
	<div class="px-10 bg-rojo w-full h-[72px] flex items-center sticky top-0 z-50 justify-between">
		<button class="uppercase text-blanco font-bold text-lg">Cancelar</button>
		<button class="flex uppercase text-blanco font-bold text-lg">
			<p class="pr-4">Guardar</p>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15 0C6.72909 0 0 6.72909 0 15C0 23.2709 6.72909 30 15 30C23.2709 30 30 23.2709 30 15C30 6.72909 23.2709 0 15 0ZM22.8065 9.97284L13.1142 21.5113C13.0079 21.6379 12.8756 21.7402 12.7263 21.8113C12.577 21.8823 12.4141 21.9205 12.2488 21.9231H12.2293C12.0676 21.923 11.9077 21.889 11.76 21.8231C11.6123 21.7573 11.48 21.6611 11.3719 21.5409L7.21803 16.9255C7.11254 16.8136 7.03047 16.6817 6.97666 16.5377C6.92285 16.3936 6.89838 16.2403 6.90469 16.0866C6.911 15.933 6.94795 15.7821 7.01339 15.643C7.07882 15.5038 7.17142 15.3791 7.28572 15.2763C7.40003 15.1734 7.53375 15.0944 7.67902 15.044C7.82429 14.9935 7.97817 14.9726 8.13163 14.9825C8.2851 14.9923 8.43504 15.0328 8.57264 15.1014C8.71025 15.1701 8.83275 15.2655 8.93293 15.3822L12.199 19.0111L21.0397 8.4887C21.238 8.25943 21.5185 8.11741 21.8207 8.09333C22.1229 8.06925 22.4224 8.16505 22.6545 8.36002C22.8866 8.555 23.0327 8.83348 23.0611 9.13527C23.0896 9.43707 22.9981 9.73793 22.8065 9.97284Z" fill="white"/>
			</svg>
		</button>
	</div>

    <form class="md:grid md:grid-cols-2 items-center drop-shadow-xl  mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-[385px] border-slate-700">
		<div class="flex flex-col px-5 md:pl-10 md:pr-5">
			<label for="procedencia"class="p-2 uppercase font-bold text-lg">Procedencia</label>
			<input type="text" id="procedencia"placeholder="Digite la procedencia" class="text-texto text-lg indent-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
		</div>

		<div class="flex flex-col px-5 md:pl-5  md:pr-10 ">
			<label for="fecha"class="p-2 uppercase font-bold text-lg">Fecha</label>
			<input type="date" id="fecha" class="text-texto text-lg indent-2 h-[58px] w-full rounded-[10px] border-2 border-gris">
		</div>

		<div class="col-start-1 col-end-3 flex flex-col px-5 md:px-10">
			<label for="factura"class="pb-2 uppercase font-bold text-lg">No. de factura</label>
			<input type="number" id="factura"placeholder="Digite la factura" class="text-texto text-lg indent-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
		</div>

		<div class="cursor-pointer px-5 md:px-10 pt-5 md:pt-0 col-start-1 col-end-3">
			<button class="uppercase font-bold bg-rojo text-lg text-blanco h-[50px] md:h-[70px] w-full">Continuar</button>
		</div>
    </form>

</body>

</html>