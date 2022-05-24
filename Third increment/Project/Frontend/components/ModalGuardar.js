export function ModalGuardar() {
    return (
        <>
            <div className="flex fixed w-[100%] h-[100vh] top-0 bg-gris bg-opacity-70 justify-center items-center z-10">
                <div className="w-[90%] sm:w-[100%] max-w-[760px] mx-[22px] px-5 py-5 bg-blanco rounded">
                    <h2 className="text-center sm:text-left text-xl sm:text-2xl font-bold h-[62.5px] sm:py-[15px] sm:px-[21px]">¿Desea guardar los cambios?</h2>
                    <p className="text-center sm:text-left text-xl sm:text-2xl border-y border-y-gris px-[21px] py-[33.5px]">¿Deseas guardar los datos ingresados?</p>
                    <div className="flex mt-4 justify-center sm:justify-end gap-4 sm:gap-7">
                        <button type='button' className="w-40 h-16 bg-blanco rounded border-2 border-gris-oscuro">
                            <p className="font-bold sm:text-2xl text-gris-oscuro">Cancelar</p>
                        </button>
                        <button type='button' className="w-40 h-16 bg-rojo rounded">
                            <p className="font-bold sm:text-2xl text-blanco">Guardar</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}