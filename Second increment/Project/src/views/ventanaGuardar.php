<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../dist/output.css" rel="stylesheet" />
    <title>Ventana Guardar</title>
</head>

<?php require("../includes/cabecera.php"); ?>

<body class="bg-blanco font-lato">
    <form class="md:grid md:grid-cols-2 items-center drop-shadow-xl  mx-auto my-8 rounded-md bg-blanco w-full md:w-[800px] h-auto ms:h-[841px] left-[37px] top-[107px] border-slate-700">

        <div class="col-start-1 col-end-3 flex flex-col px-5 md:px-10">
            <label for="folio" class="uppercase font-extrabold pr-[7px] py-[13px]"> Folio del almacen</label>
            <select name="folio" class="text-texto indent-5 outline-none text-lg h-[58px] w-full border-gris border-2 rounded-[10px] ">
                <option> Seleccione o digite un folio de almacen </option>
            </select>


        </div>

        <div class="col-start-1 col-end-3 flex flex-col px-5 md:px-10">
            <label for="clave" class="uppercase font-extrabold pr-[7px] py-[13px]"> Clave del articulo</label>
            <select name="clave" class="text-texto indent-5 outline-none text-lg h-[58px] w-full border-gris border-2 rounded-[10px] ">
                <option> Seleccione o digite la clave del articulo</option>
            </select>




        </div>

        <div class="flex flex-col px-5 md:pl-10 md:pr-5">

            <label class="uppercase font-extrabold pr-[7px] py-[13px]">Cantidad solicitada</label>
            <input type="number" id="cantidad" placeholder="Digite la cantidad solicitada" class="text-texto text-lg indent-5 h-[58px] w-full rounded-[10px] border-2 border-gris">

        </div>


        <div class="flex flex-col px-5 md:pl-5 md:pr-10">
            <label for="unidad" class="uppercase font-extrabold pr-[7px] py-[13px]">Tipo de unidad</label>
            <select name="unidad" class="text-texto indent-5 outline-none text-lg h-[58px] w-full border-gris border-2 rounded-[10px]">
                <option> Seleccione </option>
            </select>

        </div>

        <div class="col-start-1 col-end-3 flex flex-col px-5 md:px-10">
            <label class="uppercase font-extrabold pr-[7px] py-[13px]"> Descripción de articulo</label>
            <input type="text" id="descripcion" placeholder="Describa al articulo que le dara salida" class="text-texto text-lg indent-5 h-[82.5px] w-full rounded-[10px] border-2 border-gris">


        </div>

        <div class="flex flex-col px-5 md:pl-10 md:pr-5">
            <label class="uppercase font-extrabold pr-[7px] py-[13px]">Cantidad entregada</label>
            <input type="number" id="entrega" placeholder="Digite la cantidad entregada" class="text-texto text-lg indent-2 h-[58px] w-full rounded-[10px] border-2 border-gris">

        </div>

        <div class="flex flex-col px-5 md:pl-5 md:pr-10">
            <label class="uppercase font-extrabold pr-[7px] py-[13px]">Precio unitario</label>
            <input type="number" id="precio" placeholder="Digite el precio del articulo" class="text-texto text-lg indent-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
        </div>

        <div class="col-start-1 col-end-3 flex flex-col px-5  pb-[46px] md:px-10">
            <label for="total" class="uppercase font-extrabold pr-[7px] py-[13px]">Total de salida</label>
            <input type="number" id="total" placeholder="$1,000.00" class="text-texto text-lg indent-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
        </div>



    </form>





    <div class=" modal md:flex  fixed w-[100%] h-[100vh] top-0 left-0 bg-gris bg-opacity-70 flex justify-center items-center z-[100]">
        <div class="container-modal sm:w-[100%] mx-[22px] w-[90%] max-w-[760px] sm:max-w-[768] px-5 py-5 bg-blanco rounded items-center justify-center">

            <h2 class=" text-2xl font-extrabold h-[62.5px] sm:pr-[134px] sm:pt-[15px] sm:pb-[7.5px] sm:pl-[15px]">¿Desea guardar los cambios? </h2>
            <p class=" h-[123px] text-2xl font-normal border-t border-b border-y-gris pr-[21px] pt-[33.5px] pb-[33.5px] pl-[22px]">¿Deseas guardar los datos ingresados?</p>

            <div class="flex justify-center mt-4 sm:justify-end ">
                <button class=" w-40 h-16 box-border rounded border-gris-oscuro bg-blanco border-2 mr-7 ">
                    <p class=" font-extrabold text-gris-oscuro leading-6 text-xl tracking-widest">Cancelar</p>

                </button>

                <button class=" w-40 h-16 bg-rojo text-blanco rounded">
                    <P class="font-bold leading-6 tracking-widest text-xl">Sí, Guardar</p>


                </button>

            </div>

        </div>
    </div>



</body>

</html>