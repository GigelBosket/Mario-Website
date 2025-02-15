import NavBar from "../components/header/navbar"
import "../style/razboi2.css"
import FinalRazboiAllArray from "../content_text/arrays/razboi2_finalul_all_content_array"
import DisplayContentFirst from "../components/body/componente_pagina_razboi/display/display_s_content"
import Footer from "../components/footer/footer"
import MidDisplay from "../components/body/componente_pagina_razboi/mid_component"
import { Link } from "react-router-dom"
import HrefNav from "../components/body/componente_pagina_razboi/href_nav"


function Razboi2() {
    const footerMessage = "Cea mai mare victimă a celui de-Al Doilea Război Mondial este ADEVĂRUL."
    const footerAuthor = "Oleg Serebrian"



    return (
        <div>
            <div className="header2">
                <NavBar />
                <div className=" absolute text-yellow-400 text-3xl right-10 top-20 p-2 font-semibold hover:scale-105 hover:bg-black/50">
                    <Link to="/Razboi" >Razboi I</Link>
                </div>
                <MidDisplay content="Razboiul continua" />
            </div>
            <div className="body max-w-[80%] mx-auto relative ">

                <HrefNav content={FinalRazboiAllArray} />

                {FinalRazboiAllArray.map((section) => (
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

export default Razboi2