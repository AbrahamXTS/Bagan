export default function InsertarProducto({index, register, partidas}) {

    return (
        <article className='drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 px-4 md:px-8 py-8'>        
            <div className='md:grid md:grid-cols-2 items-center md:gap-x-6'>
                <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                    <label className="p-2 font-bold text-lg">PARTIDA</label>
                    <select title="partida" name={`producto[${index}]partida`} {...register(`productos.${index}.partida`)} className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
                        <option value="" hidden>Seleccione o digite la partida del artículo</option>
                        {partidas.map(({id, partidas}) => (<option key={id} value={id}>{partidas}</option>))}
                    </select>
                </div>
                <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                    <label className="p-2 font-bold text-lg">NOMBRE DEL ARTICULO</label>
                    <input required={true} name={`producto[${index}]nombre`} {...register(`productos.${index}.nombre`)}  type="text" placeholder="Describa el artículo al que dará entrada" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                </div>
                <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                    <label className="p-2 font-bold text-lg">CLAVE DEL ARTICULO</label>
                    <input required={true} name={`producto[${index}]clave`} {...register(`productos.${index}.clave`)} type="number" placeholder="Digite la clave del articulo" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                </div>
                <div className="flex flex-col my-[10px] md:mt-0">
                    <label className="p-2 font-bold text-lg">NÚMERO DE ALMACÉN</label>
                    <select name={`producto[${index}]almacen`} {...register(`productos.${index}.almacen`)} type="text" placeholder="Digite el número de almacén" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
                        <option value="" hidden>Seleccione el número de almacén</option>
                        <option value={1}>01 - Almacén General</option>
                    </select>
                </div>
                <div className="flex flex-col my-[10px] md:mt-0">
                    <label className="p-2 font-bold text-lg">TIPO DE UNIDAD</label>
                    <select title="unidad" name={`producto[${index}]unidad`} {...register(`productos.${index}.unidad`)} className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris">
                        <option hidden>Seleccione el tipo de unidad</option>
                        <option value={"Caja"}>Caja</option>
                        <option value={"Cubeta"}>Cubeta</option>
                        <option value={"Galon"}>Galon</option>
                        <option value={"Kilogramo"}>Kilogramo</option>
                        <option value={"Litro"}>Litro</option>
                        <option value={"Metro"}>Metro</option>
                        <option value={"Mililitro"}>Mililitro</option>
                        <option value={"Pieza"}>Pieza</option>
                    </select>
                </div>
                <div className="flex flex-col my-[10px] md:mt-0">
                    <label className="p-2 font-bold text-lg">CANTIDAD DE ARTICULOS</label>
                    <input required={true} name={`producto[${index}]cantidad`} {...register(`productos.${index}.cantidad`)} type="number" placeholder="Digite la cantidad de articulos" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                </div>
                <div className="flex flex-col my-[10px] md:mt-0">
                    <label className="p-2 font-bold text-lg">PRECIO UNITARIO</label>
                    <input required={true} name={`producto[${index}]precio`} {...register(`productos.${index}.precio`)} type="number" step="any" placeholder="Digite el precio del artículo" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                </div>
            </div>
        </article>
    )
}