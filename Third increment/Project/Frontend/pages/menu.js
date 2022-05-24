import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Header from '../components/Header'
import CallComponentButton from '../components/CallComponentButton'

export default function Menu() {
  return (
    <>
      <Header title="Menu" />

		  <header className="container text-center mx-auto md:mt-10">
			  <Image src="/img/logo.png" width={125} height={125} alt="Logo" className="mx-auto mt-5" />
			  <h1 className="text-rojo font-bold text-4xl my-7">Menú de inicio</h1>				
        <h2 className="font-bold text-xl">¡Bienvenido de vuelta!</h2>
		  </header>

      <div className='flex flex-col text-center mt-10 gap-7 text-lg'>
        <Link href="/entrada">Entrada de articulos</Link>
        <Link href="/salida">Salida de articulos</Link>
        <Link href="/existencias">Consultar existencias</Link>
        <Link href="/articulo">Resumen general de un articulo</Link>
        <Link href="/resumen">Resumen mensual</Link>
      </div>

      <CallComponentButton setFunction={() => window.location = "/"}>
        <div className='flex justify-end rounded-full bg-rojo p-2.5'>
          <svg width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /> <path d="M7 12h14l-3 -3m0 6l3 -3" /> </svg>
        </div>
      </CallComponentButton>
    </>
  )
}
