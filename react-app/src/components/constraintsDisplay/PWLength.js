import React from 'react'


const PasswordLength = ({pwLength, setPwLength}) =>{
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
                <span className='hint pw-hint'>sets the length of the password, note that the total required characters cannot exceed the password length</span>
            </div>
        </div>
    )
}

export default PasswordLength