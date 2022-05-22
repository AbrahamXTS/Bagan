import { useForm } from "react-hook-form";

export default function EliminarProducto({index, productos}) {

    const {register, setValue} = useForm();

    return (
        <article className="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 px-4 md:px-8 py-8">
            <div className="md:grid md:grid-cols-2 items-center md:gap-x-6">
                {/* <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                    <label className="p-2 font-bold text-lg uppercase">Número del almacen</label>
                    <input id="almacen" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" placeholder="Digite un folio de almacen" type="text" />
                </div> */}
                <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                    <label className="p-2 font-bold text-lg uppercase">Clave del articulo</label>
                    <select name={`producto[${index}]clave`} {...register(`productos.${index}.clave`, {valueAsNumber: true,})} className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris "
                        onChange={(e) => {
                            const { promedio } = productos.find((producto) => producto.clave_articulo === Number(e.target.value))
                            setValue(`productos.${index}.precio`, promedio)
                        }}    
                    >
                        <option value="" hidden>Seleccione la clave del articulo</option>
                        {productos.map(({nombre_articulo, clave_articulo}, index) => <option key={index} value={clave_articulo}>{nombre_articulo}</option>)}
                    </select>
                </div>
                {/* <div className="flex flex-col my-[10px] md:mt-0">
                    <label className="p-2 font-bold text-lg uppercase">Cantidad solicitada</label>
                    <input type="number" id="cantidad" placeholder="Digite la cantidad solicitada" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                </div> */}
                {/* <div className="flex flex-col my-[10px] md:mt-0">
                    <label className="p-2 font-bold text-lg uppercase">Tipo de unidad</label>
                    <select name="unidad" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
                        <option> Seleccione </option>
                    </select>
                </div> */}
                {/* <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                    <label className="p-2 font-bold text-lg uppercase"> Descripción de articulo</label>
                    <input type="text" id="descripcion" placeholder="Describa al articulo que le dara salida" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                </div> */}
                <div className="flex flex-col my-[10px] md:mt-0">
                    <label className="p-2 font-bold text-lg uppercase">Cantidad entregada</label>
                    <input name={`producto[${index}]cantidad`} {...register(`productos.${index}.cantidad`, {valueAsNumber: true,})} type="number" placeholder="Digite la cantidad entregada" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                </div>
                <div className="flex flex-col my-[10px] md:mt-0">
                    <label className="p-2 font-bold text-lg uppercase">Precio promedio</label>
                    <input name={`producto[${index}]precio`} {...register(`productos.${index}.precio`, {disabled: true, valueAsNumber: true,})} type="number" placeholder="Seleccione un articulo para ver su precio promedio" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                </div>
            </div>
        </article>
    )
}