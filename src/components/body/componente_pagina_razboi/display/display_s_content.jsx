import { useState } from "react";



function DisplayContentFirst({ content }) {
    const [activePopup, setActivePopup] = useState(null);

    const colors = ["bg-yellow-500", "bg-blue-400 text-white", "bg-gray-400"];
    if (!content) return null;


    return (
        <div className="content-big text-start py-4 bg-yellow-500 ">
            {content.big_title && <h2 id={content.big_title} className="text-5xl font-bold pb-4 ">{content.big_title}</h2>}
            <div>
                {content.contents && content.contents.map((item, index) => {

                    return (

                        <div key={item.id} className={`pl-5 py-2 ${colors[index % colors.length]}`}>
                            {item.title &&
                                (<div className={`text-4xl font-semibold pb-4 `}><h3 id={item.title} className="">{item.title}</h3></div>

                                )}
                            <div>
                                <h5 className="new-line font-medium text-2xl pl-2 text-black/75" >{item.content}</h5>


                                <div className="popup-render">
                                    {item.popup && (
                                        <>
                                            <button onClick={() => setActivePopup(activePopup === item.id ? null : item.id)} className="mt-4 px-4 py-2 text-white rounded-md bg-black hover:bg-blue-700 hover:scale-105">
                                                {activePopup === item.id ? "Inchide" : "Vezi mai multe detalii"}
                                            </button>


                                            {activePopup === item.id && (
                                                <div tabIndex={0} className="absolute top-[10vh] left-0 right-0 max-w-[98%] mx-auto  bg-white shadow-lg rounded-lg p-6 z-10 border-gray-200 transition-all duration-300 ">
                                                    <div className="max-h-200 overflow-y-auto ">
                                                        {item.popup.map((elem, index) => (
                                                            <div key={index} className="popup-content mb-6">
                                                                {elem.pop_title && (
                                                                    <h3 className="text-xl font-semibold mb-2">{elem.pop_title}</h3>
                                                                )}
                                                                {elem.pop_text && (
                                                                    <p className="text-gray-700 mb-4">{elem.pop_text}</p>
                                                                )}
                                                                {elem.pop_image && (elem.pop_image.includes("/") || elem.pop_image.includes("\\")) && (
                                                                    <img src={elem.pop_image} className="rounded-lg w-[50%] "></img>
                                                                )}
                                                            </div>
                                                        )
                                                        )}
                                                    </div>
                                                    <button
                                                        onClick={() => setActivePopup(null)}
                                                        className="absolute top-2 right-2 p-2 text-white bg-black rounded-full hover:scale-110 py-1">
                                                        ✕
                                                    </button>
                                                </div>
                                            )}
                                        </>


                                    )

                                    }
                                </div>
                            </div>
                            {item.image1 && (item.image1.includes("/") || item.image1.includes("\\")) &&
                                <img src={`${item.image1}`} className="w-[50%] rounded-lg" />
                            }
                            {item.image2 && (item.image1.includes("/") || item.image1.includes("\\")) &&
                                <img src={`${item.image1}`} className="w-[50%] rounded-lg" />
                            }
                            {item.image3 && (item.image1.includes("/") || item.image1.includes("\\")) &&
                                <img src={`${item.image1}`} className="w-[50%] rounded-lg" />
                            }
                        </div>
                    )

                })}
            </div>
            {content.image_colaj && content.image_colaj.some(img => img.includes("/") || img.includes("\\")) && (
                <div className="colaj relative flex flex-row flex-wrap gap-6 justify-center items-center  py-10 mt-4 bg-gray-600">
                    {content.image_colaj && content.image_colaj.map((image, index) => (
                        <div key={index} className="image-colaj ">
                            <img className="w-110 " src={image}></img>
                        </div>
                    ))}
                </div>)}
        </div>
    )
}
//implementez in 14 februarie button pt popup
export default DisplayContentFirst