import React, { useState } from "react"

const Options = () => {
    const [optMenu, setOptMenu] = useState(false)

    return (
        <>
            <button onClick={e=> setOptMenu(prev => !prev)}>Options</button>
            {/* {optMenu && } */}
        </>
    )
}

export default Options