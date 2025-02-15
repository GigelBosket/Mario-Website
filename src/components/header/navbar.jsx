import logo_hitler from "../../media/pictures/logo_hitler.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="navbar fixed w-full flex items-center justify-between h-15 bg-black/75 px-4 z-100" >
            <div className="logo p-2" id="logo">
                <Link to="/">
                    <a href="" className=" flex items-center  gap-1">
                        <img src={logo_hitler} className="h-9 rounded-full" alt="logo"></img>
                        <span className="self-center text-3xl font-semibold  text-yellow-400 whitespace-nowrap">Mario</span>
                    </a>
                </Link>
            </div>
            <div className="elements-container pr-8 " id="navbar-post-container">
                <ul className="font-semibold text-2xl flex  gap-4 text-yellow-400 ">
                    <li>
                        <Link to="/Introducere" ><a className="px-4  py-1.5 hover:text-yellow-300 hover:bg-gray-500 rounded-xl-1/2" >Introducere</a></Link>
                    </li>
                    <li>
                        <Link to="/Razboi" ><a className="px-4  py-1.5 hover:text-yellow-300 hover:bg-gray-500" >Razboi</a></Link>
                    </li>
                    <li>
                        <Link>
                            <a className="px-4  py-1.5 hover:text-yellow-300 hover:bg-gray-500" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>Materiale</a>
                            {isVisible && (<div className="absolute -bottom-32 flex flex-col bg-black/75 px-3" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                                <Link to="/Consecinte" className="p-2">Consecinte</Link>
                                <Link to="/Romania_in_razboi" className="p-2">Romania in razboi</Link>
                                <Link to="/Holocaust" className="p-2">Holocaust</Link>
                            </div>)}
                        </Link>
                    </li>
                    <li>
                        <Link><a className="px-4  py-1.5 hover:text-yellow-300 hover:bg-gray-500">Altele</a></Link>
                    </li>
                    <li>
                        <Link><a className="px-4  py-1.5 hover:text-yellow-300 hover:bg-gray-500">Page5</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar