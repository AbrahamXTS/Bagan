import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Navigation from "../components/Navigation";
import CallComponentButton from '../components/CallComponentButton';
import Resume from '../components/salida/Resume';
import PreSalida from '../components/salida/PreSalida';
import Header from '../components/Header';

export default function Salida({areas, productosBD}) {
  
  const [fecha, setFecha] = useState("");
  const [solicitante, setSolicitante] = useState("");

  const [renderPre, setRenderPre] = useState(true);
	const [renderInsert, setRenderInsert] = useState(false);
  const [rendersCounter, setRendersCounter] = useState([1]);
  const [renderResume, setRenderResume] = useState(false);

  const [data, setData] = useState({});
  const {register, setValue, handleSubmit} = useForm();

  const handleFirstSubmit = (e) => {
    e.preventDefault();
    
    if ([solicitante, fecha].includes("")) {
        alert("Todos los campos son obligatorios");
    } else {
        setRenderPre(false);
        setRenderInsert(true);
    }
  }

  const callComponent = () => {
    setRendersCounter([...rendersCounter, 1]);
  }

  const handleProductsSubmit = ({productos}) => {

    let error = false;
    let totalSalida = 0;

    productos.forEach((producto) => {
        const { nombre_articulo, cantidad } = productosBD.find((productoBD) => productoBD.clave_articulo === producto.clave);
        if (producto.cantidad > cantidad ) {
          alert(`La cantidad solicitada es mayor a la disponible en el producto: ${nombre_articulo}`);
          error = true;
        } else {
          totalSalida += producto.cantidad * producto.precio;
        }
    });

    if (error) {
      alert("Por favor, verifique las cantidades entregadas.");
    } else {
      const data = {fecha, solicitante, productos, totalSalida};
      const options = { method: "POST", body: JSON.stringify(data), headers: {'Content-Type':'application/json'}}
      fetch("https://cecatirestapi-production.up.railway.app/salida", options)
      .then((res) => res.json())
      .then((message) => { 
          if (message == 204) {
              alert("Salida de articulos exitosa.");
              setData(data);
              setRenderInsert(false);
              setRenderResume(true);
          } else {
              alert(message);
          }
      }).catch((error) => alert(error));
    }
  }

	return (
		<>
      <Header title={"Salida de articulos"} />

			<Navigation>
				{renderInsert && (
					<button type="submit" form="salida" className="flex text-blanco font-bold md:text-lg items-center" >
						<p className="pr-4">GUARDAR</p>
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none"> <path d="M15 0C6.72909 0 0 6.72909 0 15C0 23.2709 6.72909 30 15 30C23.2709 30 30 23.2709 30 15C30 6.72909 23.2709 0 15 0ZM22.8065 9.97284L13.1142 21.5113C13.0079 21.6379 12.8756 21.7402 12.7263 21.8113C12.577 21.8823 12.4141 21.9205 12.2488 21.9231H12.2293C12.0676 21.923 11.9077 21.889 11.76 21.8231C11.6123 21.7573 11.48 21.6611 11.3719 21.5409L7.21803 16.9255C7.11254 16.8136 7.03047 16.6817 6.97666 16.5377C6.92285 16.3936 6.89838 16.2403 6.90469 16.0866C6.911 15.933 6.94795 15.7821 7.01339 15.643C7.07882 15.5038 7.17142 15.3791 7.28572 15.2763C7.40003 15.1734 7.53375 15.0944 7.67902 15.044C7.82429 14.9935 7.97817 14.9726 8.13163 14.9825C8.2851 14.9923 8.43504 15.0328 8.57264 15.1014C8.71025 15.1701 8.83275 15.2655 8.93293 15.3822L12.199 19.0111L21.0397 8.4887C21.238 8.25943 21.5185 8.11741 21.8207 8.09333C22.1229 8.06925 22.4224 8.16505 22.6545 8.36002C22.8866 8.555 23.0327 8.83348 23.0611 9.13527C23.0896 9.43707 22.9981 9.73793 22.8065 9.97284Z" fill="white" /> </svg>
					</button>
				)}
        {renderResume && (
          <Link href="/menu">
            <a className="flex text-blanco font-bold md:text-lg items-center">
            <p className="pr-4">LISTO</p>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"> <path d="M15 0C6.72909 0 0 6.72909 0 15C0 23.2709 6.72909 30 15 30C23.2709 30 30 23.2709 30 15C30 6.72909 23.2709 0 15 0ZM22.8065 9.97284L13.1142 21.5113C13.0079 21.6379 12.8756 21.7402 12.7263 21.8113C12.577 21.8823 12.4141 21.9205 12.2488 21.9231H12.2293C12.0676 21.923 11.9077 21.889 11.76 21.8231C11.6123 21.7573 11.48 21.6611 11.3719 21.5409L7.21803 16.9255C7.11254 16.8136 7.03047 16.6817 6.97666 16.5377C6.92285 16.3936 6.89838 16.2403 6.90469 16.0866C6.911 15.933 6.94795 15.7821 7.01339 15.643C7.07882 15.5038 7.17142 15.3791 7.28572 15.2763C7.40003 15.1734 7.53375 15.0944 7.67902 15.044C7.82429 14.9935 7.97817 14.9726 8.13163 14.9825C8.2851 14.9923 8.43504 15.0328 8.57264 15.1014C8.71025 15.1701 8.83275 15.2655 8.93293 15.3822L12.199 19.0111L21.0397 8.4887C21.238 8.25943 21.5185 8.11741 21.8207 8.09333C22.1229 8.06925 22.4224 8.16505 22.6545 8.36002C22.8866 8.555 23.0327 8.83348 23.0611 9.13527C23.0896 9.43707 22.9981 9.73793 22.8065 9.97284Z" fill="white"/> </svg>
            </a>
          </Link>
        )}
			</Navigation>
      
      {renderPre && <PreSalida areas={areas} handleFirstSubmit={handleFirstSubmit} setSolicitante={setSolicitante} setFecha={setFecha} />}

      {/* El rendersCounter debería retornar el componente: <EliminarProducto key={index} index={index} productos={productosBD} /> Por temas de contexto de React-hook-forms, retornamos el JSX de forma "Harcodeada" */}
      {renderInsert && (
          <form id="salida" onSubmit={handleSubmit(handleProductsSubmit)}>
              {rendersCounter.map((_, index) => (
                    <article key={index} className="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 px-4 md:px-8 py-8">
                      <div className="md:grid md:grid-cols-2 items-center md:gap-x-6">
                        <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                            <label className="p-2 font-bold text-lg uppercase">Clave del articulo</label>
                            <select name={`producto[${index}]clave`} {...register(`productos.${index}.clave`, {valueAsNumber: true,})} className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris "
                                onChange={(e) => {
                                    const { promedio } = productosBD.find((producto) => producto.clave_articulo === Number(e.target.value))
                                    setValue(`productos.${index}.precio`, promedio)
                                }}    
                            >
                                <option value="" hidden>Seleccione la clave del articulo</option>
                                {productosBD.map(({nombre_articulo, clave_articulo}, index) => <option key={index} value={clave_articulo}>{nombre_articulo}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col my-[10px] md:mt-0">
                            <label className="p-2 font-bold text-lg uppercase">Cantidad entregada</label>
                            <input name={`producto[${index}]cantidad`} {...register(`productos.${index}.cantidad`, {valueAsNumber: true})} type="number" placeholder="Digite la cantidad entregada" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                        </div>
                        <div className="flex flex-col my-[10px] md:mt-0">
                            <label className="p-2 font-bold text-lg uppercase">Precio promedio</label>
                            <input name={`producto[${index}]precio`} {...register(`productos.${index}.precio`, {valueAsNumber: true})} readOnly type="number" placeholder="Seleccione un articulo para ver su precio promedio" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                        </div>
                      </div>
                    </article>
                  )
                )
              }
          </form>
        )
      }

      {renderInsert && 
        (<CallComponentButton setFunction={callComponent}>
            <svg width="60" height="60" viewBox="0 0 85 85" fill="none"> <circle cx="42.5" cy="42.5" r="42.5" fill="#D43031" /> <path d="M57.8002 42.925H27.2002M42.5002 27.2V58.65V27.2Z" stroke="#EEEEEE" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /> </svg>
          </CallComponentButton>)}

      {renderResume && <Resume datos={data} productosBD={productosBD} areas={areas} />}
		</>
	);
}

export async function getServerSideProps() {
  let res = await fetch("https://cecatirestapi-production.up.railway.app/solicitantes");
  const areas = await res.json();

  res = await fetch("https://cecatirestapi-production.up.railway.app/productos");
  const productosBD = await res.json();

  return {
      props: {
        areas,
        productosBD
      }
  }
}