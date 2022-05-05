<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../dist/output.css" rel="stylesheet" />
    <title>Ventana Borrar</title>
</head>

<body class="bg-blanco font-lato">
        
    <div class=" modal md:flex  fixed w-[100%] h-[100vh] top-0 left-0 bg-gris bg-opacity-70 flex justify-center items-center z-[100]">
        <div class="container-modal sm:w-[100%] mx-[22px] w-[90%] max-w-[760px] sm:max-w-[768] pt-5 px-5 py-5 bg-blanco rounded items-center justify-center">

            <h2 class=" text-2xl font-extrabold h-[62.5px] sm:pr-[134px] sm:pt-[15px] sm:pb-[7.5px] sm:pl-[15px]">¿Desea deshacer los cambios? </h2>
            <p class=" h-[150px] text-2xl font-normal border-t border-b border-y-gris pr-[21px] pt-[33.5px] pb-[33.5px] pl-[22px]">Sí borra los cambios, todos los datos ingresados se perderán. Ésta acción no se puede deshacer.</p>

            <div class="flex justify-center mt-4 sm:justify-end ">
                <button class=" w-40 h-16 box-border rounded border-gris-oscuro bg-blanco border-2 mr-7 ">
                    <p class=" font-extrabold text-gris-oscuro leading-6 text-xl tracking-widest">Cancelar</p>

                </button>

                <button class=" w-40 h-16 bg-rojo text-blanco rounded">
                    <P class="font-bold leading-6 tracking-widest text-xl">Sí, Borrar</p>


                </button>

            </div>

        </div>
    </div>
</body>
</html>