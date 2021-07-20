import React, { useState } from "react"
import OptionsMenu from "./OptionsMenu"
import './Options.css'

const Options = () => {
    const [optMenu, setOptMenu] = useState(false)

    return (
        <div className='options-button'>
            <button onClick={e=> setOptMenu(prev => !prev)}>Options</button>
            {optMenu && <OptionsMenu setOptMenu={setOptMenu}/>}
        </div>
    )
}

export default Options