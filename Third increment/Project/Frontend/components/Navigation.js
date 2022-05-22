import Link from "next/link";

export default function Navigation ({children}) {
    return (
        <>
            <nav className="flex justify-between items-center sticky bg-rojo w-full px-4 h-[72px] top-0 z-10">
                <Link href="/menu"><a className="text-blanco font-bold md:text-lg">CANCELAR</a></Link>
                {children}
            </nav>
        </>
    )
}