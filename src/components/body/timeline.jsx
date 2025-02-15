/*import React, { useContext } from "react";
import { GlobalStateContext } from "./isHovered_global_useState";*/
import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"


import TimelineArray from "./timeline_array";
import "../../style/home.css"

gsap.registerPlugin(ScrollTrigger);

function Timeline({ box }) {
    /*const { isHovered, setIsHovered } = useContext(GlobalStateContext)*/
    const [isHovered, setIsHovered] = useState(false)
    const timelineItemRef = useRef(null)
    const hoverContentRef = useRef(null)


    useGSAP(() => {
        gsap.fromTo(timelineItemRef.current,
            {
                opacity: 0,
                x: isEven(box.id) ? 1000 : -1000,
            },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: timelineItemRef.current,
                    start: "top 95%",
                    end: "bottom 88%",
                    toggleActions: "play none play reverse",
                    markers: true,
                    scrub: false

                }
            }
        )
    }, { scope: timelineItemRef });

    useGSAP(() => {
        if (isHovered && hoverContentRef.current) {
            gsap.fromTo(hoverContentRef.current,
                { y: 200, opacity: 0 },
                { y: 0, opacity: 1, duration: 2 }

            )
        }


    }, { dependencies: [isHovered], scope: hoverContentRef });




    function isEven(num) {
        if (num % 2 === 0) {
            return true
        }

    }


    return (


        <div ref={timelineItemRef} className={`timeline-item ${isEven(box.id) ? "ml-auto" : "mr-auto"} flex  justify-between relative  px-4 p-2  overflow-hidden`} >
            {isEven(box.id) ? (
                <img className="w-[45%] order-1" src={box.image} alt={box.year}></img>
            ) : (null)}
            {!isEven(box.id) ? (
                <img className="w-[45%] order-2" src={box.image} alt={box.year}></img>
            ) : (null)}
            <div className={`timeline-content relative font-semibold text-xl w-[45%] bg-gray-600 gap-3 p-0  border-3 ${isEven(box.id) ? "order-2" : "order-1"}`} onMouseEnter={() => (setIsHovered(true), console.log("Hovered"))} onMouseLeave={() => setIsHovered(false)}>
                <h1 className="text-2xl text-yellow-300">{box.year}</h1>
                <h3>{box.text}</h3>
                {isHovered && (
                    <div ref={hoverContentRef} className="fantoma absolute z-10 bg-yellow-600 top-[50%] border-4 ">
                        <h3>{box.description}</h3>
                    </div>
                )}
            </div>

        </div>
    )
}

/*const Timeline1 = [({ box }) => {

}]*/
export default Timeline