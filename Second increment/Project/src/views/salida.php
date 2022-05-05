<?php 

    require("../includes/cabecera.php"); 
    require("../includes/database.php");

    $resultados = mysqli_query($db, "SELECT * FROM producto WHERE ");
    $fila = mysqli_fetch_all($resultados);
    var_dump($fila);
?>

<body class="bg-gris-claro">
    <div class="px-10 bg-rojo h-[72px] flex items-center sticky top-0 z-50 justify-between w-full">
        <button class="uppercase text-blanco text-lg font-extrabold">Cancelar</button>
        <button class="flex uppercase text-blanco font-extrabold text-lg">
            <p class="pr-4">Guardar</p>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0C6.72909 0 0 6.72909 0 15C0 23.2709 6.72909 30 15 30C23.2709 30 30 23.2709 30 15C30 6.72909 23.2709 0 15 0ZM22.8065 9.97284L13.1142 21.5113C13.0079 21.6379 12.8756 21.7402 12.7263 21.8113C12.577 21.8823 12.4141 21.9205 12.2488 21.9231H12.2293C12.0676 21.923 11.9077 21.889 11.76 21.8231C11.6123 21.7573 11.48 21.6611 11.3719 21.5409L7.21803 16.9255C7.11254 16.8136 7.03047 16.6817 6.97666 16.5377C6.92285 16.3936 6.89838 16.2403 6.90469 16.0866C6.911 15.933 6.94795 15.7821 7.01339 15.643C7.07882 15.5038 7.17142 15.3791 7.28572 15.2763C7.40003 15.1734 7.53375 15.0944 7.67902 15.044C7.82429 14.9935 7.97817 14.9726 8.13163 14.9825C8.2851 14.9923 8.43504 15.0328 8.57264 15.1014C8.71025 15.1701 8.83275 15.2655 8.93293 15.3822L12.199 19.0111L21.0397 8.4887C21.238 8.25943 21.5185 8.11741 21.8207 8.09333C22.1229 8.06925 22.4224 8.16505 22.6545 8.36002C22.8866 8.555 23.0327 8.83348 23.0611 9.13527C23.0896 9.43707 22.9981 9.73793 22.8065 9.97284Z" fill="white" />
            </svg>
        </button>
    </div>

    <form class="md:grid md:grid-cols-2 items-center drop-shadow-xl  mx-auto my-8 rounded-md bg-blanco w-full md:w-[800px] h-auto ms:h-[841px] left-[37px] top-[107px] border-slate-700">
        <div class="pt-5 col-start-1 col-end-3 flex flex-col px-5 md:px-10">
            <label for="folio" class="uppercase font-extrabold pr-[7px] py-[13px]"> Número del almacen</label>
            <input id="almacen" class="text-texto indent-5 outline-none text-lg h-[58px] w-full border-gris border-2 rounded-[10px]" placeholder="Digite un folio de almacen" type="text" />
        </div>

        <div class="pt-5 col-start-1 col-end-3 flex flex-col px-5 md:px-10">
            <label for="clave" class="uppercase font-extrabold pr-[7px] py-[13px]"> Clave del articulo</label>
            <select name="clave" class="text-texto indent-5 outline-none text-lg h-[58px] w-full border-gris border-2 rounded-[10px] ">
                <option> Seleccione o digite la clave del articulo</option>
            </select>
        </div>

        <div class="pt-5 flex flex-col px-5 md:pl-10 md:pr-5">
            <label class="uppercase font-extrabold pr-[7px] py-[13px]">Cantidad solicitada</label>
            <input type="number" id="cantidad" placeholder="Digite la cantidad solicitada" class="text-texto text-lg indent-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
        </div>

        <div class="pt-5 flex flex-col px-5 md:pl-5 md:pr-10">
            <label for="unidad" class="uppercase font-extrabold pr-[7px] py-[13px]">Tipo de unidad</label>
            <select name="unidad" class="text-texto indent-5 outline-none text-lg h-[58px] w-full border-gris border-2 rounded-[10px]">
                <option> Seleccione </option>
            </select>
        </div>

        <div class="pt-5 col-start-1 col-end-3 flex flex-col px-5 md:px-10">
            <label class="uppercase font-extrabold pr-[7px] py-[13px]"> Descripción de articulo</label>
            <input type="text" id="descripcion" placeholder="Describa al articulo que le dara salida" class="text-texto text-lg indent-5 h-[82.5px] w-full rounded-[10px] border-2 border-gris">
        </div>

        <div class="pt-5 flex flex-col px-5 md:pl-10 md:pr-5">
            <label class="uppercase font-extrabold pr-[7px] py-[13px]">Cantidad entregada</label>
            <input type="number" id="entrega" placeholder="Digite la cantidad entregada" class="text-texto text-lg indent-2 h-[58px] w-full rounded-[10px] border-2 border-gris">
        </div>

        <div class="pt-5 flex flex-col px-5 md:pl-5 md:pr-10">
            <label class="uppercase font-extrabold pr-[7px] py-[13px]">Precio unitario</label>
            <input type="number" id="precio" placeholder="Digite el precio del articulo" class="text-texto text-lg indent-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
        </div>

        <div class="pt-5 col-start-1 col-end-3 flex flex-col px-5  pb-[46px] md:px-10">
            <label for="total" class="uppercase font-extrabold pr-[7px] py-[13px]">Total de salida</label>
            <input type="number" id="total" placeholder="$1,000.00" class="text-texto text-lg indent-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
        </div>
    </form>

    <div class="fixed right-8 bottom-8">
        <button class="fixed right-8 bottom-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 85 85" fill="none">
                <circle cx="42.5" cy="42.5" r="42.5" fill="#D43031" />
                <path d="M57.8002 42.925H27.2002M42.5002 27.2V58.65V27.2Z" stroke="#EEEEEE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>        
    </div>    
</body>

</html>