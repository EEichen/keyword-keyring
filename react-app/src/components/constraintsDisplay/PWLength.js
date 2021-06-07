import React, { useState } from 'react'


const PasswordLength = ({pwLength, setPwLength}) =>{
    return (
        <div className='pw-len'>
            <div>Password Length</div>
            <input
            className='pw-len-input' 
            type="number"
            value={pwLength}
            onChange={e => setPwLength(e.target.value)}
            />
        </div>
    )
}

export default PasswordLength