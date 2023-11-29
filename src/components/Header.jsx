import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    let [headerColour, setHeaderColour] = useState("bg-papaya-whip-100");
    let [navbarTextColour, setNavbarTextColour] = useState(
        " text-scarlet-500 hover:text-smalt-700",
    );

    let colourMatch = {
        "bg-papaya-whip-100":
            " text-scarlet-500 hover:text-smalt-700",
        "bg-smalt-800": " text-orange-peel-400 hover:text-scarlet-500",
        "bg-orange-peel-500": " text-smalt-700 hover:text-papaya-whip-100",
    };

    // Change header colours to match current top section
    function changeColour() {
        // Targets 10 pixels below header
        let target = document.elementFromPoint(
            1,
            document.getElementById("header").getBoundingClientRect().bottom +
                10,
        );
        let bgRegex = /(bg-*).+/g
        setHeaderColour(bgRegex.exec(target.className)[0].split(" ")[0]);
        setNavbarTextColour(colourMatch[headerColour]);
    }

    useEffect(() => {
        const onScroll = () => changeColour();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line
    }, [headerColour]);

    let navbarStyle = "text-4xl font-Bebas-Neue " + navbarTextColour;
    return (
        <header
            id="header"
            className={
                "sticky left-0 right-0 top-0 z-10 grid h-12 w-full grid-cols-6 " +
                headerColour
            }
        >
            <nav
                id="logo"
                className={
                    "col-start-1 ml-3 mt-1 w-12  font-Rubik text-4xl  " +
                    navbarTextColour
                }
            >
                {" "}
                <NavLink to={"/"}>JD</NavLink>
            </nav>
            <nav className="col-span-4 col-start-3 mt-2 flex flex-row justify-evenly md:col-span-2 md:col-start-5">
                <NavLink to={"/"} className={navbarStyle}>
                    Home
                </NavLink>
                {/* TODO: make blog page */}
                {/* <NavLink to={"/blog"} className={navbarStyle}>Blog</NavLink> */}
                <NavLink to={"/contact"} className={navbarStyle}>
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}
