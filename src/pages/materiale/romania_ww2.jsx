import NavBar from "../../components/header/navbar"
import "../../style/materiale/romania_ww2.css"
import romania_ww2_array from "../../content_text/arrays/romania_ww2_all_array"

import DisplayContentFirst from "../../components/body/componente_pagina_razboi/display/display_s_content"
import Footer from "../../components/footer/footer"
import MidDisplay from "../../components/body/componente_pagina_razboi/mid_component"
import HrefNav from "../../components/body/componente_pagina_razboi/href_nav"


function RomaniaWW2() {
    const footerMessage = "Cea mai mare victimă a celui de-Al Doilea Război Mondial este ADEVĂRUL."
    const footerAuthor = "Oleg Serebrian"



    return (
        <div>
            <div className="header4">
                <NavBar />

                <MidDisplay content="Romania in cel de al doilea razboi mondial" />
            </div>
            <div className="body max-w-[80%] mx-auto relative ">

                <HrefNav content={romania_ww2_array} />

                {romania_ww2_array.map((section) => (
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

export default RomaniaWW2