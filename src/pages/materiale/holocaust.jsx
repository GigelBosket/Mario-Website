import NavBar from "../../components/header/navbar"
import "../../style/materiale/holocaust.css"
import holocaust_array from "../../content_text/arrays/holocaust_all_array"

import DisplayContentFirst from "../../components/body/componente_pagina_razboi/display/display_s_content"
import Footer from "../../components/footer/footer"
import MidDisplay from "../../components/body/componente_pagina_razboi/mid_component"
import HrefNav from "../../components/body/componente_pagina_razboi/href_nav"


function Holocaust() {
    const footerMessage = "Cea mai mare victimă a celui de-Al Doilea Război Mondial este ADEVĂRUL."
    const footerAuthor = "Oleg Serebrian"



    return (
        <div>
            <div className="header5">
                <NavBar />

                <MidDisplay content="Holocaust-ul. Decesul sufletelor nevinovate" />
            </div>
            <div className="body max-w-[80%] mx-auto relative ">

                <HrefNav content={holocaust_array} />

                {holocaust_array.map((section) => (
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

export default Holocaust