import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header';

export default function Home() {

	const [mail, setMail] = useState("");
	const [error, setError] = useState(false);

	const handleBlur = () => {
		if (mail.toLowerCase().includes("@dgcft.sems.gob.mx") || mail == "") {
			setError(false);
		} else {
			setError(true);
		}
	}

	const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        if (Object.values(data).includes("")) {
            alert("Todos los campos son obligatorios.");
        } else {
			const options = { method: "POST", body: JSON.stringify(data), headers: {'Content-Type':'application/json'}, }
            fetch("https://cecatirestapi-production.up.railway.app/login", options)
			.then((res) => res.json())
			.then((message) => {
				if (message == 204) {
					window.location = "/menu";
				} else {
					alert(message);
				}
			}).catch((e) => alert(e));
        }
    }
 
	return (
		<>
			<Header title="Login" />

			<header className="container text-center mx-auto md:mt-10">
				<Image src="/img/logo.png" width={125} height={125} alt="Logo" className="mx-auto mt-5" />
				<h1 className="text-rojo font-bold text-4xl my-7">Inicio de sesión</h1>
				<h2 className="font-bold text-xl">¡Bienvenido de vuelta!</h2>
			</header>

			<main className="container mt-16 mx-auto xl:w-1/2">
				<form className="flex flex-col mx-5" onSubmit={handleSubmit}>
					<div className="w-full relative">
						<input
							type="email" 
							name="email"
							onBlur={handleBlur}
							onChange={(e) => setMail(e.target.value)}
							placeholder="Ejemplo@dgcft.sems.gob.mx" 
							className={`w-full rounded-xl border-2 border-gris py-3 pl-12 my-3 placeholder-texto ${error ? "border-rojo" : ""}`} 
						/>
						<svg className="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D43031" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <rect x="3" y="5" width="18" height="14" rx="2" /> <polyline points="3 7 12 13 21 7" /> </svg>
					</div>
					{error && <p className='text-rojo'>El dominio ingresado no es valido.</p>}
					<div className="w-full relative">
						<input type="password" name="contrasena" placeholder="Contraseña" className="w-full rounded-xl border-2 border-gris py-3 pl-12 pr-4 my-3 placeholder-texto" />
						<svg className="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D43031" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="8" cy="15" r="4" /> <line x1="10.85" y1="12.15" x2="19" y2="4" /> <line x1="18" y1="5" x2="20" y2="7" /> <line x1="15" y1="8" x2="17" y2="10" /> </svg>
					</div>
					<button type="button" disabled={true} className="text-rojo text-center mt-3 md:text-right">¿Olvidaste tu contraseña?</button>
					<input type="submit" className="rounded-lg p-3 bg-rojo cursor-pointer mt-16 mb-6 text-[white]" value="INICIAR SESIÓN" />
					<Link href="/registro"><a className="text-center text-rojo mb-9">Registrar nueva cuenta</a></Link>
				</form>
			</main>
		</>
	)
}