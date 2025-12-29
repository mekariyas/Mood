import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <header className="w-full h-20 flex justify-between bg-white md:justify-around items-center drop-shadow-xl drop-shadow-slate-400 sticky top-0 z-[10]">
        <div>
          <NavLink to="/" className="font-bold text-lg md:text-3xl">Mood</NavLink>
        </div>
        <nav className={`${visible? "flex flex-col" : "hidden"} bg-white  items-center absolute z-[20] top-20 right-0 w-full h-[50vh] md:flex md:flex-row md:static justify-around md:w-[65%] text-base md:text-lg md:h-16`}>
            <NavLink to="/" className={({isActive})=>{ return isActive? `bg-blue-900 text-white font-bold w-full md:w-40  text-center md:text-start md:pl-14 p-4 md:rounded-md` : `w-full md:w-40 p-4 text-center transition delay-150 duration-300 ease-in-out hover:text-white hover:bg-blue-900 hover:md:rounded-md`}}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>{ return isActive? `bg-blue-900 text-white font-bold w-full md:w-40 text-center md:text-start md:pl-14 p-4 md:rounded-md` : `w-full md:w-40 p-4 text-center transition delay-150 duration-300 ease-in-out hover:text-white hover:bg-blue-900 hover:md:rounded-md`}}>About</NavLink>
            <NavLink to="/products" className={({isActive})=>{ return isActive? `bg-blue-900 text-white font-bold w-full md:w-40 text-center md:text-start md:pl-10 p-4 md:rounded-md` : `w-full md:w-40 p-4 text-center transition delay-150 duration-300 ease-in-out hover:text-white hover:bg-blue-900 hover:md:rounded-md`}}>Products</NavLink>
            <NavLink to="/Terms" className={({isActive})=>{ return isActive? `bg-blue-900 text-white font-bold w-full md:w-48 text-center md:text-start md:pl-3 pt-4 pb-4 md:rounded-md` : `w-full md:w-48 p-4 text-center transition delay-150 duration-300 ease-in-out hover:text-white hover:bg-blue-900 hover:md:rounded-md`}}>Terms & Conditions</NavLink>
        </nav>
        <button title='menu-button' className="flex w-12 h-10 flex-col items-center outline-none cursor-pointer justify-around  mr-3 rounded-sm md:hidden" onClick={()=>setVisible(!visible)}>
            <section className={`w-10 h-[1px] bg-black ${visible? "absolute z-2 rotate-45 transition-all delay-75 ease-in-out":""}`}></section>
            <section className={`w-10 h-[1px] bg-black ${visible? "hidden transition-all delay-75 ease-in-out":""}`}></section>
            <section className={`w-10 h-[1px] bg-black ${visible? "absolute -rotate-45 transition-all delay-75 ease-in-out":""}`}></section>
        </button>
    </header>
  )
}

export default Navbar