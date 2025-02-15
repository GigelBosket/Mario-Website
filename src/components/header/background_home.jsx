import "../../style/home.css"

function BackgroundVideoHome() {


    return (
        <div className="video-background ">
            <video src="src\media\videos\video_backgorund.mp4" autoplay="{true}" loop muted
                className="  absolute -z-10  min-w-lvw   overflow-hidden inset-0  "></video>
        </div>
    )
}

export default BackgroundVideoHome