import { Link } from "react-router-dom";

function Footer({ content, author }) {


    return (
        <div className="footer-container relative h-100 bg-gray-950 ">
            <div className="footer-main flex justify-between h-80 text-white/85 p-14 pb-44">
                <div className="flex-col w-[60%]">
                    <h2 className="footer-main-title relative font-semibold text-4xl text-left">{content}</h2>
                    <h4 className="footer-main-author ml-[50%] text-2xl">-{author}</h4>
                </div>
                <button className="footer-main-btn p-1.5 h-10 w-35 border-white/85 border-2 rounded-lg hover:bg-gray-500 active:top-1  hover:scale-102 ">Contacteaza-ne</button>
            </div>
            <div className="footer-bottom flex justify-between px-22">
                <div className="footer-bottom-left flex gap-1.5 text-gray-500">
                    <Link to="/" className="footer-nav-link hover:text-gray-400" >Politica site-ului</Link>·
                    <Link to="/" className="footer-nav-link hover:text-gray-400" >Structura</Link>·
                    <Link to="/" className="footer-nav-link hover:text-gray-400" >Bibliografie</Link>
                </div>
                <div className="footer-bottom-right flex gap-12 justify-between text-gray-500 h-4">
                    <div className="footer-bottom-right-email flex gap-2 items-center h-4">
                        <img className="h-4 w-4 p-0 m-0" src="src\media\pictures\icons\email-envelope-line-white-icon.png" />
                        <h5 className="footer-bottom-right-email-text hover:text-gray-400">mario_duma@gmail.com</h5>
                    </div>
                    <div className="footer-bottom-right-icons">
                        <Link to="/"><img className="w-4 h-4" src="src/media/pictures/icons/instagram-white-icon.png" /></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer