import Link from "next/link";

export const Navbar = () =>{
    return(
        <div className="min-w-full h-10 p-2 mb-2 bg-yellow-400 shadow-md">
            <Link href="/">
                <button className="ml-3 font-mono text-xl text-white tracking-wider hover:text-yellow-600">Home</button>
            </Link>
        </div>
    )
}