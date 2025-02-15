import { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <GlobalStateContext.Provider value={{ isHovered, setIsHovered }}>
            {children}
        </GlobalStateContext.Provider>
    )
}