import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const OptionsMenu = () => {
    userOptions = useSelector(state => state.session.user.options)
    const [showHints, setShowHints] = useState(userOptions.hints)
    const [allowLs, setAllowLs] = useState(userOptions.allow_ls)

    const handleSave = () =>{

    }

    return (
        <div>
            <div>
                <button>Show Hints: {showHints ? 'On' : 'Off'}</button>
                <button>Allow Local Storage: {allowLs ? 'Yes' : 'No'}</button>
            </div>
            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>

    )

}