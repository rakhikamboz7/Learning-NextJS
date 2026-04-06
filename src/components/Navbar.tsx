import Link from "next/link"

export default function Navbar(){
    return (
        <div className="">
            <Link href="/">
            Dashboard         
            </Link>
            <Link href="/projects">
            Projects          
            </Link>
            <Link href="/add-projects">
           Add Projects   
            </Link>
        </div>
    )
}