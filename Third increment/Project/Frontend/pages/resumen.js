import Header from "../components/Header";
import { useState, useEffect } from "react";
import Buscador from "../components/Buscador";
import Navigation from "../components/Navigation";
import { filterResults } from "../utils/filterResults";
import ArticuloItem from "../components/resumen/ArticuloItem";

export default function Resumen({ articulos }) {
	const [busqueda, setBusqueda] = useState("");
	const [articulosFiltrados, setArticulosFiltrados] = useState(articulos);

	useEffect(() => {
		filterResults(busqueda, articulos, "nombre", setArticulosFiltrados);
	}, [busqueda]);

	return (
		<>
			<Header title="Resumen de movimientos" />

			<Navigation />

			<h1 className="text-center uppercase text-[27px] font-bold py-8">
				Resumen de movimientos
			</h1>

			<Buscador setBusqueda={setBusqueda} />

			{articulosFiltrados.map(
				(
					{
						tipo,
						fecha,
						clave,
						nombre,
						unidad,
						partida,
						cantidadEntrada,
						cantidadSalida,
					},
					index
				) => {
					return (
						<ArticuloItem
							key={index}
							tipo={tipo}
							fecha={fecha}
							clave={clave}
							nombre={nombre}
							unidad={unidad}
							partida={partida}
							cantidadEntrada={cantidadEntrada}
							cantidadSalida={cantidadSalida}
						/>
					);
				}
			)}
		</>
	);
}

export async function getServerSideProps() {
	let res = await fetch(
		"https://cecatirestapi-production.up.railway.app/resumen"
	);
	const articulos = await res.json();

	return {
		props: {
			articulos,
		},
	};
}
