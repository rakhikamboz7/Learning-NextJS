import Link from "next/link"

export default function Navbar(){
    return (
        <div className="">
            <Link href="/">
            Home          
            </Link>
            <Link href="/about">
            About        
            </Link>
            <Link href="/projects">
            Projects          
            </Link>
            <Link href="/contacts">
            Contacts        
            </Link>
        </div>
    )
}