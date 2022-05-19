import { useState, useEffect } from 'react';
import Buscador from '../components/Buscador';
import Header from "../components/Header";
import Navigation from '../components/Navigation';

export default function Resumen({articulos}) {

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
          <Header title="Resumen de movimientos" />
    
          <Navigation />

          <h1 className="text-center uppercase text-[27px] font-bold py-8">Resumen de movimientos</h1>

          <Buscador setBusqueda={setBusqueda} />

          {articulosFiltrados.map(((articulo, index) => {

          const {tipo, fecha, clave, nombre, unidad, partida, cantidadEntrada, cantidadSalida} = articulo

          return (
              <div key={index} className="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700">
                <ul className='pl-[30px] pt-[1rem]'>
                  <li className="flex items-center ">
                    <p className="uppercase font-bold my-[13px] mr-2 text-lg">Nombre del articulo:</p> 
                    <p className="text-lg">{nombre}</p>
                  </li>
                  <li className="flex items-center">
                    <p className="uppercase font-bold my-[13px] mr-2 text-lg">Número de partida:</p>
                    <p className="text-lg">{partida}</p>
                  </li>
                  <li className="flex items-center">
                    <p className="uppercase font-bold my-[13px] mr-2 text-lg">Clave del artículo:</p>
                    <p className="text-lg">{clave}</p>
                  </li>
                  <li className="flex items-center">
                    <p className="uppercase font-bold my-[13px] mr-2 text-lg">Tipo de unidad:</p>
                    <p className="text-lg">{unidad}</p>
                  </li>
                  <li className="flex items-center">
                    <p className="uppercase font-bold my-[13px] mr-2 text-lg">Fecha del movimiento:</p>
                    <p className="text-lg">{new Intl.DateTimeFormat("en-GB").format(new Date(fecha))}</p>
                  </li>
                  <li className="flex items-center">
                    <p className="uppercase font-bold my-[13px] mr-2 text-lg">{tipo == "Entrada" ? "Cantidad de entrada: " : "Cantidad de salida: "}</p>
                    <p className="text-lg">{tipo == "Entrada" ? cantidadEntrada : cantidadSalida}</p>
                  </li>	
                </ul>
                <div className="flex flex-wrap mt-[0.25rem] pb-5 mx-[2rem] justify-between items-center">
                  <p className="text-rojo font-bold uppercase text-lg">{tipo}</p>
                  <div className="flex">
                    <button href="#" className="bg-gris-oscuro w-[80px] h-[50px] flex items-center justify-center rounded-[3px] mr-[16px]">
                      <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.4697 2C14.685 2 7.72535 6.07243 2.24643 14.2173C2.09005 14.4523 2.00434 14.7302 2.00016 15.0157C1.99598 15.3013 2.0735 15.5817 2.22293 15.8215C6.43266 22.6556 13.2992 28 21.4697 28C29.5514 28 36.5589 22.6393 40.7765 15.7899C40.9224 15.5548 41 15.281 41 15.0014C41 14.7217 40.9224 14.4479 40.7765 14.2128C36.5493 7.44194 29.4904 2 21.4697 2Z" stroke="#EEEEEE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> <path d="M21.4991 22.2223C25.3453 22.2223 28.4631 18.9888 28.4631 15.0001C28.4631 11.0113 25.3453 7.77783 21.4991 7.77783C17.653 7.77783 14.5352 11.0113 14.5352 15.0001C14.5352 18.9888 17.653 22.2223 21.4991 22.2223Z" stroke="#EEEEEE" strokeWidth="3" strokeMiterlimit="10"/> </svg>
                    </button>
                    <button type="submit" className="bg-azul w-[80px] h-[50px] flex items-center justify-center rounded-[3px]">
                      <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /> <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /> <rect x="7" y="13" width="10" height="8" rx="2" /> </svg>
                    </button>
                  </div>
                </div>	
            </div>
            )
          }))}
        </>
    )
}

export async function getServerSideProps() {
  let res = await fetch("https://cecatirestapi-production.up.railway.app/resumen");
  const articulos = await res.json();

  return {
      props: {
        articulos,
      }
  }
}

