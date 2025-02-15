import NavBar from "../components/header/navbar"
import Footer from "../components/footer/footer"
import "../style/introducere.css"
import DisplayImportant from "../components/body/display/display_important"
import TopIntroducereArray from "../content_text/arrays/top_introducere_array"
import InceputulRazboiului from "../content_text/arrays/introducere_content_array"
import DisplayContent from "../components/body/display/display_content"


function Introducere() {
    const footerMessage = "Nu stiu cu ce arme va fi luptat cel de-al treilea razboi mondial, dar cu siguranta cel de-al patrulea va fi luptat cu bețe si pietre."
    const footerAuthor = " Albert Einstein"
    const temporarItem = InceputulRazboiului[0]

    return (
        <div className="Introducere">
            <div className="header-intro top-0 h-100">
                <NavBar />
                <div className="middle-content text-6xl font-semibold mt-[5%]">
                    <h2>Introducere</h2>
                </div>
            </div>

            <div className="body body max-w-[80%] mx-auto relative">
                <div className="display-introductie relative bg-gray-500 flex-col text-left ">
                    <DisplayImportant arrays={TopIntroducereArray}></DisplayImportant>
                </div>

                <div className="content-all">
                    <div><h5 className="new-line font-medium text-lg pl-8 text-left p-4">{temporarItem.content}</h5></div>

                    {InceputulRazboiului.map((section) => {
                        return (
                            <DisplayContent key={section.id} content={section} />
                        )
                    })}

                </div>


            </div>


            <div className="footer">
                <Footer content={footerMessage} author={footerAuthor} />
            </div>
        </div>
    )
}

export default Introducere