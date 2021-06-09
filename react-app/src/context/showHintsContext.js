import React, { createContext, useContext, useState } from "react";

export const ShowHintsContext = createContext();
export const useShowHints = () => useContext(ShowHintsContext);

export default function HintsProvider(props) {
    const [showHints, setShowHints] = useState(false)

    return (
        <ShowHintsContext.Provider
            value={{
                showHints,
                setShowHints
            }}
        >
            {props.children}
        </ShowHintsContext.Provider>
    )
}