
export default function Buscador({setBusqueda}) {
    return (
        <form className="flex justify-center">
            <input type="search" onChange={(e) => setBusqueda(e.target.value.toLowerCase())} placeholder="Escriba el nombre o la clave del artículo ..." className="border-2 border-gris h-[58px] w-9/12 md:w-[672px] text-texto rounded-l-[10px] indent-5" />
            <button type="submit "className="bg-rojo h-[58px] w-[87px] rounded-r-[10px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="10" cy="10" r="7" /> <line x1="21" y1="21" x2="15" y2="15" /> </svg>
            </button>
        </form>
    )
}
