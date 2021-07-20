import React, { useState } from "react"
import OptionsMenu from "./OptionsMenu"

const Options = () => {
    const [optMenu, setOptMenu] = useState(false)

    return (
        <div>
            <button onClick={e=> setOptMenu(prev => !prev)}>Options</button>
            {optMenu && <OptionsMenu setOptMenu={setOptMenu}/>}
        </div>
    )
}

export default Options