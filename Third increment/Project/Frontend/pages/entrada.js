import Head from 'next/head'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import Navigation from '../components/Navigation';
import InsertarProducto from '../components/InsertarProducto';
import CallComponentButton from '../components/CallComponentButton';

export default function entrada() {

    const [procedencia, setProcedencia] = useState("");
    const [fecha, setFecha] = useState("");
    const [factura, setFactura] = useState(0);
    const [renderInsert, setRenderInsert] = useState(false);
    const [rendersCounter, setRendersCounter] = useState([1]);

    const {register, handleSubmit} = useForm();

    const handleFirstSubmit = (e) => {
        e.preventDefault();
        
        if ([procedencia, fecha, factura].includes("")) {
            alert("Todos los campos son obligatorios");
        } else {
            setRenderInsert(true);
        }
    }

    const callComponent = () => {
        setRendersCounter([...rendersCounter, 1]);
    }

    const handleProductsSubmit = ({productos}) => {

        let totalEntrada = 0;

        productos.forEach((producto) => {
            producto.clave = Number(producto.clave);
            producto.precio = Number(producto.precio);
            producto.cantidad = Number(producto.cantidad);
            totalEntrada += producto.cantidad * producto.precio
        });

        const data = {
            procedencia,
            fecha, 
            factura,
            productos,
            totalEntrada
        };
    }

    return (
        <>
            <Head>
				<title>Entrada de articulos</title>
                <link rel="shortcut icon" href="/img/logo.png" />
				<meta name="description" content="Gestión de almacén | CECATI" />
			</Head>

            <Navigation>
                {renderInsert && (
                    <button type='submit' form='entrada' className="flex text-blanco font-bold md:text-lg items-center">
                        <p className="pr-4">LISTO</p>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"> <path d="M15 0C6.72909 0 0 6.72909 0 15C0 23.2709 6.72909 30 15 30C23.2709 30 30 23.2709 30 15C30 6.72909 23.2709 0 15 0ZM22.8065 9.97284L13.1142 21.5113C13.0079 21.6379 12.8756 21.7402 12.7263 21.8113C12.577 21.8823 12.4141 21.9205 12.2488 21.9231H12.2293C12.0676 21.923 11.9077 21.889 11.76 21.8231C11.6123 21.7573 11.48 21.6611 11.3719 21.5409L7.21803 16.9255C7.11254 16.8136 7.03047 16.6817 6.97666 16.5377C6.92285 16.3936 6.89838 16.2403 6.90469 16.0866C6.911 15.933 6.94795 15.7821 7.01339 15.643C7.07882 15.5038 7.17142 15.3791 7.28572 15.2763C7.40003 15.1734 7.53375 15.0944 7.67902 15.044C7.82429 14.9935 7.97817 14.9726 8.13163 14.9825C8.2851 14.9923 8.43504 15.0328 8.57264 15.1014C8.71025 15.1701 8.83275 15.2655 8.93293 15.3822L12.199 19.0111L21.0397 8.4887C21.238 8.25943 21.5185 8.11741 21.8207 8.09333C22.1229 8.06925 22.4224 8.16505 22.6545 8.36002C22.8866 8.555 23.0327 8.83348 23.0611 9.13527C23.0896 9.43707 22.9981 9.73793 22.8065 9.97284Z" fill="white"/> </svg>
                    </button>
                )}
            </Navigation>

            {!renderInsert && (
                    <main className="drop-shadow-xl mx-auto my-8 rounded-md bg-blanco w-11/12 md:w-[760px] h-auto border-slate-700 px-4 md:px-8 py-5">
                        <form className="md:grid md:grid-cols-2 items-center md:gap-x-6" onSubmit={handleFirstSubmit}>
                            <div className="flex flex-col mb-[10px]">
                                <label htmlFor="procedencia"className="p-2 font-bold text-lg">PROCEDENCIA</label>
                                <input onChange={(e) => setProcedencia(e.target.value)} type="text" id="procedencia" name="procedencia" placeholder="Digite la tienda de procedencia" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                            </div>
                            <div className="flex flex-col my-[10px] md:mt-0">
                                <label htmlFor="fecha"className="p-2 font-bold text-lg">FECHA</label>
                                <input onChange={(e) => setFecha(e.target.value)} type="date" id="fecha" name="fecha" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                            </div>
                            <div className="flex flex-col md:col-start-1 md:col-end-3 my-[10px]">
                                <label htmlFor="factura"className="p-2 font-bold text-lg">NO. DE FACTURA</label>
                                <input onChange={(e) => setFactura(e.target.value)} type="number" id="factura" name="factura" placeholder="Digite el numero de factura" className="text-texto text-lg px-5 h-[58px] w-full rounded-[10px] border-2 border-gris" />
                            </div>
                            <div className="flex flex-col md:col-start-1 md:col-end-3 mt-5">
                                <button type="submit" className="font-bold bg-rojo text-lg text-blanco h-[60px] md:h-[70px] w-full">CONTINUAR</button>
                            </div>
                        </form>		
                    </main>
                )
            }

            {renderInsert && (
                    <form id="entrada" onSubmit={handleSubmit(handleProductsSubmit)}>
                        {rendersCounter.map((_, index) => (<InsertarProducto key={index} index={index} register={register} />))}
                    </form>
                )
            }
            
            {renderInsert && <CallComponentButton setFunction={callComponent} />}
        </>
    )
}