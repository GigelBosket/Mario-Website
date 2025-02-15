import NavBar from "../components/header/navbar"
import "../style/home.css"
import BackgroundVideoHome from "../components/header/background_home"
import TextMidHeader from "../components/header/mid_component"
import "../style/home.css"
/* import { GlobalStateContext } from "./isHovered_global_useState"; */
import TimelineArray from "../components/body/timeline_array"
import Timeline from "../components/body/timeline"
import PresContainer from "../components/body/site_presentation/presentation_container"
import EventsArray from "../components/body/event_pres/events_array"
import EventsDisplay from "../components/body/event_pres/event_pres"
import Footer from "../components/footer/footer"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"
import { useRef } from "react"


gsap.registerPlugin(ScrollTrigger);

function Home() {
    /*const { isHovered, setIsHovered } = useContext(GlobalStateContext) */
    {/*  */ }
    const footerMessage = "Contiuna sa citesti pentru a acumula informatii! "



    const timelineRef = useRef(null);
    /*
        useGSAP(() => {
            gsap.fromTo(".timelin-line",
                {
                    scaleY: 0,
                    transformOrigin: "top center"
                },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: "true",
                        markers: true
    
                    }
    
                }
            )
    
            gsap.from(".timeline-item", {
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top center"
                }
            })
        }, { scope: timelineRef })
    */
    return (
        <>
            <div className="all overflow-x-hidden ">
                <div className="header  relative h-screen " id="header">
                    <BackgroundVideoHome className="" />
                    <NavBar />
                    <TextMidHeader />
                </div>
                <div className="body max-w-[80%] mx-auto relative  " >
                    <div className="timeline-all relative bg-gradient-to-br from-blue-400 via-yellow-300 to-orange-500 ">
                        <div ref={timelineRef} className="timeline ">
                            <div className="timeline-line absolute w-1 bg-blue-500 top-0 bottom-0 left-1/2 transform -translate-x-1/2 " ></div>
                            {TimelineArray.map((items) => (
                                <Timeline key={items.id} box={items} />
                            )

                            )}
                        </div>
                    </div>
                    <div>
                        <PresContainer />
                    </div>


                    <div className=" relative h-8 bg-black w-screen -mx-[10vw]" />



                    <div className="events-container  flex p-5 gap-5 ">
                        {EventsArray.map((event) => (
                            <EventsDisplay event={event} key={event.id} />
                        )
                        )}

                    </div>

                </div >



                <div className="footer-all" >
                    <Footer content={footerMessage} />
                </div>
            </div>
        </>
    )
}

export default Home