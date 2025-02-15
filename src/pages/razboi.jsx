import NavBar from "../components/header/navbar"
import "../style/razboi.css"
import InceputRazboiAllArray from "../content_text/arrays/razboi1_inceputul_all_content_array"
import DisplayContentFirst from "../components/body/componente_pagina_razboi/display/display_s_content"
import Footer from "../components/footer/footer"
import MidDisplay from "../components/body/componente_pagina_razboi/mid_component"
import { Link } from "react-router-dom"
import HrefNav from "../components/body/componente_pagina_razboi/href_nav"


function Razboi() {
    const footerMessage = "Nu contează cine votează, contează cine numără voturile"
    const footerAuthor = "Iosif Stalin"



    return (
        <div>
            <div className="header1">
                <NavBar />
                <div className=" absolute text-yellow-400 text-3xl right-10 top-20 p-2 font-semibold hover:scale-105 hover:bg-black/50">
                    <Link to="/Razboi2" >Razboi II</Link>
                </div>
                <MidDisplay content="inceputul razboiului" />
            </div>
            <div className="body max-w-[80%] mx-auto relative ">

                <HrefNav content={InceputRazboiAllArray} />

                {InceputRazboiAllArray.map((section) => (
                    <DisplayContentFirst id={section.id} content={section} />
                )

                )}
            </div>
            <div className="footer">
                <Footer author={footerAuthor} content={footerMessage} />
            </div>
        </div>
    )
}

export default Razboi