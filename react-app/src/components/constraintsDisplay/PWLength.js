import React from 'react'
import { useShowHints } from '../../context/showHintsContext'


const PasswordLength = ({pwLength, setPwLength}) =>{
    const { showHints } = useShowHints()

    return (
        <div className='pw-len'>
            <div>Password Length</div>
            <div className='hover-hint'>
                <input
                className='pw-len-input' 
                type="number"
                value={pwLength}
                onChange={e => setPwLength(e.target.value)}
                />
                {showHints && <span id='pw-hint' className='hint pw-hint'>sets the length of the password, note that the total required characters cannot exceed the password length</span>}
            </div>
        </div>
    )
}

export default PasswordLength