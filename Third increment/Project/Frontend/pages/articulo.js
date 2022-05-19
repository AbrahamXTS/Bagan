import { useState, useEffect } from 'react'
import Buscador from '../components/Buscador';
import Header from "../components/Header";
import Navigation from '../components/Navigation';


export default function Articulo({articulos}) {

    const [articulosFiltrados, setArticulosFiltrados] = useState(articulos);
    const [busqueda, setBusqueda] = useState("");

    const filterResults = (busqueda, articulos) => {
        if (busqueda == "") {
            setArticulosFiltrados(articulos);
        } else {
            setArticulosFiltrados(articulos.filter((existencia) => existencia.nombre.toLowerCase().includes(busqueda)));
        }
    }
    
    useEffect(() => {
        filterResults(busqueda, articulos);
    }, [busqueda]);

    return (
        <>
            <Header title="Resumen general de articulo" />
    
            <Navigation />

            <h1 className="text-center uppercase text-[27px] font-bold py-8">Resumen general del artículo</h1>

            <Buscador setBusqueda={setBusqueda} />

	        {articulosFiltrados.map(({nombre, clave, partida, unidad, almacen, entradas, salidas, existencias, precioPromedio, ultimoPrecio}) => (
                    <div className="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700">
                        <ul className="pl-[30px] pt-[1rem]">
                            <li className="flex items-center">		
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Nombre del articulo:</p> 
                                <p className="text-lg">{nombre}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Clave del artículo:</p>
                                <p className="text-lg">{clave}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Número de partida:</p>
                                <p className="text-lg">{partida}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Tipo de unidad:</p>
                                <p className="text-lg">{unidad}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Número de almacen:</p>
                                <p className="text-lg">{almacen}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Existencias actuales:</p>
                                <p className="text-lg">{existencias}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Número de entradas:</p>
                                <p className="text-lg">{entradas}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Número de salidas:</p>
                                <p className="text-lg">{salidas}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Último costo unitario del artículo:</p>
                                <p className="text-lg">{`$${ultimoPrecio}`}</p>
                            </li>
                            <li className="flex items-center">
                                <p className="uppercase font-bold pr-[7px] py-[13px] text-lg">Costo medio del artículo:</p>
                                <p className="text-lg">{`$${precioPromedio}`}</p>
                            </li>
                        </ul>
                        <div className="flex items-center mt-[0.25rem] pb-5 mx-[2rem] justify-end">
                            <div className="flex">
                                <button type="button" className="bg-[#55EFC4] w-[80px] h-[50px] flex items-center justify-center rounded-[3px] mr-[16px]">
                                    <svg width="31" height="36" viewBox="0 0 31 36" fill="none"> <path d="M29 15.3269V30.3077C29 31.287 28.5733 32.2261 27.8138 32.9185C27.0543 33.611 26.0241 34 24.95 34H6.05C4.97587 34 3.94574 33.611 3.18622 32.9185C2.4267 32.2261 2 31.287 2 30.3077V5.69231C2 4.71305 2.4267 3.77389 3.18622 3.08145C3.94574 2.38901 4.97587 2 6.05 2H14.382C15.0979 2.0001 15.7844 2.25935 16.2906 2.72077L28.2094 13.5869C28.7155 14.0484 28.9999 14.6743 29 15.3269Z" stroke="white" strokeWidth="3" strokeLinejoin="round"/> <path d="M8.75 26.6157H22.25M15.5 2.61572V11.8465C15.5 12.4993 15.7845 13.1254 16.2908 13.5871C16.7972 14.0487 17.4839 14.308 18.2 14.308H28.325L15.5 2.61572ZM8.75 20.4619H22.25H8.75Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                                </button>
                                <button type="button" className="bg-azul w-[80px] h-[50px] flex items-center justify-center rounded-[3px]">
                                    <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /> <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /> <rect x="7" y="13" width="10" height="8" rx="2" /> </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    )
}

export async function getServerSideProps() {
    let res = await fetch("https://cecatirestapi-production.up.railway.app/articulo");
    const articulos = await res.json();
  
    return {
        props: {
          articulos,
        }
    }
}
