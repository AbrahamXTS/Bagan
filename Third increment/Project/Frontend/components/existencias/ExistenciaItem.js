export default function ExistenciaItem({promedio, clave_articulo, nombre_articulo, tipo_unidad, cantidad, partidas}) {
    return (
        <div  className="h-auto mx-auto my-8 rounded-md bg-[white] drop-shadow-xl w-11/12 md:w-[760px]">
            <ul className="pl-[30px] pt-[1rem]">
                <li className="flex flex-wrap items-center">		
                    <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Nombre del articulo:</p> 
                    <p className="text-lg">{nombre_articulo}</p>
                </li>
                <li className="flex flex-wrap items-center">
                    <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Número de partida:</p>
                    <p className="text-lg">{partidas}</p>
                </li>
                <li className="flex flex-wrap items-center">
                    <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Clave del artículo:</p>
                    <p className="text-lg">{clave_articulo}</p>
                </li>
                <li className="flex flex-wrap items-center">
                    <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Tipo de unidad:</p>
                    <p className="text-lg">{tipo_unidad}</p>
                </li>
                <li className="flex flex-wrap items-center">
                    <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Precio promedio:</p>
                    <p className="text-lg">{`$${promedio}`}</p>
                </li>
                <li className="flex flex-wrap items-center">
                    <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Número de existencias:</p>
                    <p className="text-lg">{cantidad}</p>
                </li>
            </ul>
            <div className="flex items-center mt-3 pb-5 mx-[2rem] justify-center sm:justify-end">
                <div className="flex">
                    <button type="button" className="bg-gris-oscuro w-[80px] h-[50px] flex items-center justify-center rounded-[3px] mr-[16px]">
                        <svg width="43" height="30" viewBox="0 0 43 30" fill="none"> <path d="M21.4697 2C14.685 2 7.72535 6.07243 2.24643 14.2173C2.09005 14.4523 2.00434 14.7302 2.00016 15.0157C1.99598 15.3013 2.0735 15.5817 2.22293 15.8215C6.43266 22.6556 13.2992 28 21.4697 28C29.5514 28 36.5589 22.6393 40.7765 15.7899C40.9224 15.5548 41 15.281 41 15.0014C41 14.7217 40.9224 14.4479 40.7765 14.2128C36.5493 7.44194 29.4904 2 21.4697 2Z" stroke="#EEEEEE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M21.4991 22.2223C25.3453 22.2223 28.4631 18.9888 28.4631 15.0001C28.4631 11.0113 25.3453 7.77783 21.4991 7.77783C17.653 7.77783 14.5352 11.0113 14.5352 15.0001C14.5352 18.9888 17.653 22.2223 21.4991 22.2223Z" stroke="#EEEEEE" strokeWidth="3" strokeMiterlimit="10"/> </svg>
                    </button>
                    <button type="button" className="bg-azul w-[80px] h-[50px] flex items-center justify-center rounded-[3px]">
                        <svg className="icon icon-tabler icon-tabler-printer" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /> <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /> <rect x="7" y="13" width="10" height="8" rx="2" /> </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
