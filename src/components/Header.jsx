import { NavLink } from "react-router-dom";


export default function Header(){
    let navbarStyle = "text-4xl text-scarlet-500 font-Bebas-Neue hover:text-smalt-700"
    return(
        <header id="header" className="w-full grid grid-cols-6 z-10 sticky top-0 left-0 right-0 h-12 bg-papaya-whip-100 jagged">
            <logo id="logo" className="text-4xl w-12 mt-1 col-start-1 text-scarlet-500 ml-3 font-Rubik hover:text-smalt-700"> <NavLink to={"/"}>JD</NavLink></logo>
            <nav className="col-start-3 mt-2 flex-row flex justify-evenly col-span-4 md:col-start-5 md:col-span-2">
                <NavLink to={"/"} className={navbarStyle}>Home</NavLink>
                <NavLink to={"/blog"} className={navbarStyle}>Blog</NavLink>
                <NavLink to={"/contact"} className={navbarStyle}>Contact</NavLink>
            </nav>
        </header>
    )
}