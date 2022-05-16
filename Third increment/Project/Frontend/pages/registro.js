import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from '../components/Header';

export default function Registro() {

    const [mail, setMail] = useState("");
    const [errorMail, setErrorMail] = useState(false);
    const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState(false);

	const handleBlurMail = () => {
		if (mail.toLowerCase().includes("@dgcft.sems.gob.mx") || mail == "") {
			setErrorMail(false);
		} else {
			setErrorMail(true);
		}
	}

    const handleBlurPasswordConfirm = () => {
        if (password !== passwordConfirm) {
            setErrorPasswordConfirm(true);
        } else {
            setErrorPasswordConfirm(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        delete data.confirmacion;

        if (Object.values(data).includes("")) {
            alert("Todos los campos son obligatorios.");
        } else {
            const options = { method: "POST", body: JSON.stringify(data), headers: {'Content-Type':'application/json'}, }
            fetch("https://cecatirestapi-production.up.railway.app/register", options)
            .then((res) => res.json())
            .then((message) => { 
                if (message == 204) {
                    alert("Registro exitoso.");
                    window.location.href = "/";
                } else {
                    alert(message);
                }
            }).catch((error) => alert(error));
        }        
    }

    return (
        <>
            <Header title="Registro" />

            <header className="container text-center mx-auto md:mt-8">
		        <Image src="/img/logo.png" width={125} height={125} alt="Logo" className="mx-auto mt-5 w-24 md:w-36 md:h-36" />
		        <h1 className="text-rojo font-bold text-4xl my-7">Crear cuenta</h1>
	        </header>

            <main className="container mt-10 mx-auto xl:w-1/2">
                <form className="flex flex-col mx-5" onSubmit={handleSubmit}>
                    <div className="w-full relative">
                        <input className="w-full rounded-xl border-2 border-gris py-3 pl-12 my-3 placeholder-texto" type="text" name="nombre" placeholder="Nombre" />
                        <svg className="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D43031" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="7" r="4" /> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /> </svg>
                    </div>
                    <div className="w-full relative">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Correo electrónico"
                            onBlur={handleBlurMail}
                            onChange={(e) => setMail(e.target.value)} 
                            className={`w-full rounded-xl border-2 border-gris py-3 pl-12 my-3 placeholder-texto ${errorMail ? "border-rojo" : ""}`}
                        />
                        <svg className="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D43031" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <rect x="3" y="5" width="18" height="14" rx="2" /> <polyline points="3 7 12 13 21 7" /> </svg>
                    </div>
					{errorMail && <p className='text-rojo'>El dominio ingresado no es valido.</p>}
                    <div className="w-full relative">
                        <input type="password" name="contrasena" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border-2 border-gris py-3 pl-12 pr-4 my-3 placeholder-texto" />
                        <svg className="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D43031" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="8" cy="15" r="4" /> <line x1="10.85" y1="12.15" x2="19" y2="4" /> <line x1="18" y1="5" x2="20" y2="7" /> <line x1="15" y1="8" x2="17" y2="10" /> </svg>
                    </div>
                    <div className="w-full relative">
                        <input
                            type="password" 
                            name="confirmacion"
                            placeholder="Confirmar contraseña"
                            onBlur={handleBlurPasswordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            className={`w-full rounded-xl border-2 border-gris py-3 pl-12 pr-4 my-3 placeholder-texto ${errorPasswordConfirm ? "border-rojo" : ""}`}
                        />
                        <svg className="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D43031" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="8" cy="15" r="4" /> <line x1="10.85" y1="12.15" x2="19" y2="4" /> <line x1="18" y1="5" x2="20" y2="7" /> <line x1="15" y1="8" x2="17" y2="10" /> </svg>
                    </div>
					{errorPasswordConfirm && <p className='text-rojo'>Las contraseñas no coinciden.</p>}
                    <input type="submit" className="rounded-lg p-3 bg-rojo cursor-pointer mt-16 mb-6 text-[white]" value="CREAR CUENTA" />
                    <Link href="/"><a className="text-center mb-9">¿Ya tienes una cuenta? <span className="text-rojo">Inicia sesión</span></a></Link>
                </form>
            </main>
        </>
    )
}