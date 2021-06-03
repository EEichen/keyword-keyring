import React, { useState } from 'react'


const PasswordLength = ({pwLength, setPwLength}) =>{
    return (
        <div>
            <div>pw length</div>
            <input 
            type="number"
            value={pwLength}
            onChange={e => setPwLength(e.target.value)}
            />
        </div>
    )
}

export default PasswordLength