import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveOptions } from '../../store/session'

const OptionsMenu = ({setOptMenu}) => {
    const dispatch = useDispatch()
    const userOptions = useSelector(state => state.session.user.options)
    const [showHints, setShowHints] = useState(userOptions.hints)
    const [allowLs, setAllowLs] = useState(userOptions.allow_ls)

    const handleSave = () =>{
        dispatch(saveOptions({id: userOptions.id, allow_ls: allowLs, hints: showHints}))
        setOptMenu(false)
    }

    return (
        <div className='new-gen-form'>
            <div className='options-display'>
                <div className='options'>
                    <h4>Options</h4>
                    <button onClick={e=> setShowHints(prev => !prev)}>Show Hints: {showHints ? 'On' : 'Off'}</button>
                    <button onClick={e => setAllowLs(prev => !prev)}>Allow Local Storage: {allowLs ? 'Yes' : 'No'}</button>
                </div>
                <div className='new-gen-buttons'>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={e => setOptMenu(false)}>Cancel</button>
                </div>
            </div>
        </div>

    )

}

export default OptionsMenu