import { useState } from "react";

function HrefNav({ content }) {
    const [activePopup, setActivePopup] = useState(false);

    return (
        <div className="nav-popup fixed bottom-15 left-5 overflow-visible text-left z-11">
            <div className="relative ">
                {activePopup && (
                    <div className="absolute bottom-full mb-2 left-0 bg-gray-300 min-w-[300px] max-w-[400px]  max-h-[80vh] overflow-y-auto rounded-lg shadow-lg ">
                        <button
                            className="absolute top-2 right-2 py-0 text-xl ml-2 p-2 bg-black/50 rounded-full text-black hover:text-gray-700 hover:scale-105 "
                            onClick={() => setActivePopup(false)}
                        >
                            X
                        </button>
                        <div className="py-4 px-3">
                            {content.map((elem) => (
                                <div key={elem.id} className="mb-4">
                                    <a
                                        href={`#${elem.big_title}`}
                                        className="nav-big_title pl-2 text-xl font-semibold block hover:text-blue-600"
                                    >
                                        {elem.big_title}
                                    </a>
                                    <div className="flex flex-col space-y-2 mt-2">
                                        {elem.contents && elem.contents.map((item, index) => (
                                            <a
                                                href={`#${item.title}`}
                                                className="pl-6 font-medium block hover:text-blue-600"
                                                key={index}
                                            >
                                                •{item.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="bg-black/60 text-white w-10 h-10 text-center rounded-lg hover:bg-black/70">
                    <button
                        onClick={() => setActivePopup(prev => !prev)}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <img
                            className="object-center"
                            src="/images/icons/reshot-icon-arrow-chevron-right.svg"
                            alt="Toggle navigation"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HrefNav