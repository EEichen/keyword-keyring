import React from 'react'


const AllowedCharacters = ({ 
    lowercase, 
    uppercase, 
    numbers, 
    symbols, 
    setLowercase,
    setUppercase,
    setNumbers,
    setSymbols,
    }) => {
    return (
        <div className='allowed-characters'>
            <h4>Allowed characters</h4>
            <div>
                <label htmlFor="lowercase">Lowercase</label>
                <div className='hover-hint'>
                    <input  
                    id='lowercase'
                    type="text" 
                    value={lowercase}
                    onChange={e => setLowercase(e.target.value)}
                    />
   
                    <span className='hint allow-hint'>sets the lowercase letters allowed in the password</span>
                </div>
         </div>

            <div>
                <label htmlFor="uppercase">Uppercase</label>
                <div className='hover-hint'>
                    <input
                        id='uppercase'
                        type="text"
                        value={uppercase}
                        onChange={e => setUppercase(e.target.value)}
                        />
                    <span className='hint allow-hint'>sets the uppercase letters allowed in the password</span>
                </div>
            </div>

            <div>
                <label htmlFor="numbers">Numbers</label>
                <div className='hover-hint'>
                    <input
                        id='numbers'
                        type="text"
                        value={numbers}
                        onChange={e => setNumbers(e.target.value)}
                        />
                    <span className='hint allow-hint'>sets the numbers allowed in the password</span>
                </div>
            </div>

            <div>
                <label htmlFor="symbols">Symbols</label>
                <div className='hover-hint'>
                    <input
                        id='symbols'
                        type="text"
                        value={symbols}
                        onChange={e => setSymbols(e.target.value)}
                        />
                    <span className='hint allow-hint'>sets the symbols allowed in the password</span>
                </div>
            </div>
        </div>
    )
}

export default AllowedCharacters