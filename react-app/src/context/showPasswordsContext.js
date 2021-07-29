import React, { createContext, useContext, useState } from "react";

export const ShowPasswordsContext = createContext();
export const useShowPasswords = () => useContext(ShowPasswordsContext);

export default function PasswordsProvider(props) {
    const [showPasswords, setShowPasswords] = useState(false)

    return (
        <ShowPasswordsContext.Provider
            value={{
                showPasswords,
                setShowPasswords
            }}
        >
            {props.children}
        </ShowPasswordsContext.Provider>
    )
}