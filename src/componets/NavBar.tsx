import Link from "next/link"


const NavBar = () => {
  return (
   <nav className="bg-slate-900" >
    <div className="container mx-auto flex justify-between items-center">
      <h3 className="font-bold text-3xl">TAREAS</h3>
    <ul className=" flex gap-x-2 text-lg ">
        <li>
            <Link href="/" className="text-slate-500 mx-5">Home-</Link>
        </li>
        <li>
            <Link href="/new" className="text-slate-500 mx-5">new-</Link>
        </li>
        <li>
            <Link href="/about" className="text-slate-500 mx-5">About</Link>
        </li>
    </ul>  
    </div>
    
   </nav>
  )
}

export default NavBar