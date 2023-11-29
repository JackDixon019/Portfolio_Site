import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header(){

    let [headerColour, setHeaderColour] = useState("bg-papaya-whip-100")

    function changeColour(){
        let element = document.elementFromPoint(1,49)
        let regex = /(bg-*).+/g
        setHeaderColour(regex.exec(element.className)[0])
        console.log(headerColour)
    }

    useEffect(() => {
        const onScroll = () => changeColour()
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll)
    }, [headerColour])

    let navbarStyle = "text-4xl font-Bebas-Neue "
    return(
        <header id="header" className={"w-full grid grid-cols-6 z-10 sticky top-0 left-0 right-0 h-12 " + "text-scarlet-500 hover:text-smalt-700 " + headerColour}>
            <logo id="logo" className="text-4xl w-12 mt-1 col-start-1  ml-3 font-Rubik "> <NavLink to={"/"}>JD</NavLink></logo>
            <nav className="col-start-3 mt-2 flex-row flex justify-evenly col-span-4 md:col-start-5 md:col-span-2">
                <NavLink to={"/"} className={navbarStyle}>Home</NavLink>
                {/* TODO: make blog page */}
                {/* <NavLink to={"/blog"} className={navbarStyle}>Blog</NavLink> */}
                <NavLink to={"/contact"} className={navbarStyle}>Contact</NavLink>
            </nav>
        </header>
    )
}