import Header from "../components/Header";
import { useState, useEffect } from "react";
import Buscador from '../components/Buscador';
import Navigation from "../components/Navigation";
import { filterResults } from "../utils/filterResults";
import ArticuloItem from "../components/articulo/ArticuloItem";

export default function Articulo({ articulos }) {

    const [busqueda, setBusqueda] = useState("");
	const [articulosFiltrados, setArticulosFiltrados] = useState(articulos);

	useEffect(() => {
		filterResults(busqueda, articulos, "nombre", setArticulosFiltrados);
	}, [busqueda]);

	return (
		<>
			<Header title="Resumen general de articulo" />

			<Navigation />

			<h1 className="font-bold text-center mx-3 py-8 text-2xl md:text-[27px]">
				RESUMEN GENERAL DEL ARTÍCULO
			</h1>

            <Buscador setBusqueda={setBusqueda} />

			{articulosFiltrados.map(
				(
					{
						nombre,
						clave,
						partida,
						unidad,
						almacen,
						entradas,
						salidas,
						existencias,
						precioPromedio,
						ultimoPrecio,
					},
					index
				) => (
					<ArticuloItem
						key={index}
						nombre={nombre}
						clave={clave}
						partida={partida}
						unidad={unidad}
						almacen={almacen}
						entradas={entradas}
						salidas={salidas}
						existencias={existencias}
						precioPromedio={precioPromedio}
						ultimoPrecio={ultimoPrecio}
					/>
				)
			)}
		</>
	);
}

export async function getServerSideProps() {
	let res = await fetch("https://cecatirestapi-production.up.railway.app/articulo");
	const articulos = await res.json();

	return {
		props: {
			articulos,
		},
	};
}
