import { useState, useEffect } from "react";
import Header from "../components/Header";
import Buscador from "../components/Buscador";
import Navigation from "../components/Navigation";
import { filterResults } from "../utils/filterResults";
import ExistenciaItem from "../components/existencias/ExistenciaItem";

export default function Existencias({ existencias }) {
	const [busqueda, setBusqueda] = useState("");
	const [existenciasFiltradas, setExistenciasFiltradas] = useState(existencias);

	useEffect(() => {
		filterResults(
			busqueda,
			existencias,
			"nombre_articulo",
			setExistenciasFiltradas
		);
	}, [busqueda]);

	return (
		<>
			<Header title="Existencias" />

			<Navigation />

			<h1 className="text-center uppercase text-[27px] font-bold py-8">
				Tabla de existencias
			</h1>

			<Buscador setBusqueda={setBusqueda} />

			{existenciasFiltradas.map(
				(
					{
						promedio,
						clave_articulo,
						nombre_articulo,
						tipo_unidad,
						cantidad,
						partidas,
					},
					index
				) => (
					<ExistenciaItem
                        key={index}
						promedio={promedio}
						clave_articulo={clave_articulo}
						nombre_articulo={nombre_articulo}
						tipo_unidad={tipo_unidad}
						cantidad={cantidad}
						partidas={partidas}
					/>
				)
			)}
		</>
	);
}

export async function getServerSideProps() {
	let res = await fetch(
		"https://cecatirestapi-production.up.railway.app/existencias"
	);
	const existencias = await res.json();

	return {
		props: {
			existencias,
		},
	};
}
