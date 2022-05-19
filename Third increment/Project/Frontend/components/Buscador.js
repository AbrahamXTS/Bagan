export default function Buscador({ setBusqueda }) {

	return (
		<form className="flex justify-center mx-3">
			<input
				type="search"
				placeholder="Escriba el nombre del artículo"
				onChange={(e) => setBusqueda(e.target.value.toLowerCase())}
				className="w-full sm:w-[675px] h-14 border-2 border-gris text-texto rounded-l-[10px] indent-5"
			/>
			<button type="button" className="flex justify-center items-center w-[85px] h-14 bg-rojo rounded-r-[10px]" >
				<svg width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="10" cy="10" r="7" /> <line x1="21" y1="21" x2="15" y2="15" /> </svg>
			</button>
		</form>
	);
}
