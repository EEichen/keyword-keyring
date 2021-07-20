import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const OptionsMenu = ({setOptMenu}) => {
    const userOptions = useSelector(state => state.session.user.options)
    const [showHints, setShowHints] = useState(userOptions.hints)
    const [allowLs, setAllowLs] = useState(userOptions.allow_ls)

    const handleSave = () =>{

    }

    return (
        <div className='new-gen-form'>
            <div className='constraints-display'>
                <div>
                    <button onClick={e=> setShowHints(prev => !prev)}>Show Hints: {showHints ? 'On' : 'Off'}</button>
                    <button onClick={e => setAllowLs(prev => !prev)}>Allow Local Storage: {allowLs ? 'Yes' : 'No'}</button>
                </div>
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={e => setOptMenu(false)}>Cancel</button>
                </div>
            </div>
        </div>

    )

}

export default OptionsMenu