import Link from 'next/link';
import { useState } from 'react'
import { useForm } from "react-hook-form";
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CallComponentButton from '../components/CallComponentButton';
import PreEntrada from '../components/entrada/PreEntrada';
import InsertarProducto from '../components/entrada/InsertarProducto';
import Resume from '../components/entrada/Resume';

export default function Entrada({partidas}) {

    const [procedencia, setProcedencia] = useState("");
    const [fecha, setFecha] = useState("");
    const [factura, setFactura] = useState(0);

    const [renderPre, setRenderPre] = useState(true);
    const [renderInsert, setRenderInsert] = useState(false);
    const [rendersCounter, setRendersCounter] = useState([1]);
    const [renderResume, setRenderResume] = useState(false);
    
    const [data, setData] = useState({});
    const {register, handleSubmit} = useForm();

    const handleFirstSubmit = (e) => {
        e.preventDefault();
        
        if ([procedencia, fecha, factura].includes("")) {
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

        let totalEntrada = 0;

        productos.forEach((producto) => {
            totalEntrada += producto.cantidad * producto.precio
        });

        const data = {procedencia, fecha, factura, productos, totalEntrada};

        const options = { method: "POST", body: JSON.stringify(data), headers: {'Content-Type':'application/json'}}
        fetch("https://cecatirestapi-production.up.railway.app/entrada", options)
        .then((res) => res.json())
        .then((message) => { 
            if (message == 204) {
                alert("Registro exitoso.");
                setData(data);
                setRenderInsert(false); // Ocultamos para mostrar el resumen.
                setRenderResume(true);
            } else {
                alert(message);
            }
        }).catch((error) => alert(error));
    }

    return (
        <>
            <Header title={"Entrada de articulos"}/>

            <Navigation>
                {renderInsert && (
                    <button type='submit' form='entrada' className="flex text-blanco font-bold md:text-lg items-center">
                        <p className="pr-4">GUARDAR</p>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"> <path d="M15 0C6.72909 0 0 6.72909 0 15C0 23.2709 6.72909 30 15 30C23.2709 30 30 23.2709 30 15C30 6.72909 23.2709 0 15 0ZM22.8065 9.97284L13.1142 21.5113C13.0079 21.6379 12.8756 21.7402 12.7263 21.8113C12.577 21.8823 12.4141 21.9205 12.2488 21.9231H12.2293C12.0676 21.923 11.9077 21.889 11.76 21.8231C11.6123 21.7573 11.48 21.6611 11.3719 21.5409L7.21803 16.9255C7.11254 16.8136 7.03047 16.6817 6.97666 16.5377C6.92285 16.3936 6.89838 16.2403 6.90469 16.0866C6.911 15.933 6.94795 15.7821 7.01339 15.643C7.07882 15.5038 7.17142 15.3791 7.28572 15.2763C7.40003 15.1734 7.53375 15.0944 7.67902 15.044C7.82429 14.9935 7.97817 14.9726 8.13163 14.9825C8.2851 14.9923 8.43504 15.0328 8.57264 15.1014C8.71025 15.1701 8.83275 15.2655 8.93293 15.3822L12.199 19.0111L21.0397 8.4887C21.238 8.25943 21.5185 8.11741 21.8207 8.09333C22.1229 8.06925 22.4224 8.16505 22.6545 8.36002C22.8866 8.555 23.0327 8.83348 23.0611 9.13527C23.0896 9.43707 22.9981 9.73793 22.8065 9.97284Z" fill="white"/> </svg>
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

            {renderPre && <PreEntrada handleFirstSubmit={handleFirstSubmit} setProcedencia={setProcedencia} setFecha={setFecha} setFactura={setFactura} />}
 
            {renderInsert && <form id="entrada" onSubmit={handleSubmit(handleProductsSubmit)}>{rendersCounter.map((_, index) => (<InsertarProducto key={index} index={index} register={register} partidas={partidas} />))}</form>}
            
            {renderInsert && <CallComponentButton setFunction={callComponent} />}

            {renderResume && <Resume datos={data} />}
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://cecatirestapi-production.up.railway.app/partidas");
    const partidas = await res.json();

    return {
        props: {
          partidas,
        }
    }
}