import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Draggable from "gsap/Draggable";



function EventsDisplay({ event }) {


    return (

        <div className="random_events flex-col bg-cyan-600 rounded-2xl">
            <img src={event.image} alt="ww2_image" className="h-50"></img>
            <h5 className="event-year text-gray-600 p-2">{event.date}</h5>
            <h2 className="event-text text-2xl text-orange-600 p-2 pt-0">{event.text}</h2>

        </div>
    )

}

export default EventsDisplay