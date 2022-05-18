import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import Header from '../components/Header'

export default function Menu() {
  return (
    <>
      <Header title="Menu" />

		  <header className="container text-center mx-auto md:mt-10">
			  <Image src="/img/logo.png" width={125} height={125} alt="Logo" className="mx-auto mt-5" />
			  <h1 className="text-rojo font-bold text-4xl my-7">Menú de inicio</h1>				
        <h2 className="font-bold text-xl">¡Bienvenido de vuelta!</h2>
		  </header>

      <div className='flex flex-col text-center mt-10 gap-5 text-lg'>
        <Link href="/entrada">Entrada de articulos</Link>
        <Link href="/salida">Salida de articulos</Link>
        <Link href="/existencias">Consultar existencias</Link>
        <Link href="/articulo">Resumen general de un articulo</Link>
        <Link href="/resumen">Resumen mensual</Link>
      </div>
    </>
  )
}
