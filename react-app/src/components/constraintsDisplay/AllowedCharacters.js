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
        <div>
            <label htmlFor="lowercase">Lowercase</label>
            <input 
            id='lowercase'
            type="text" 
            value={lowercase}
            onChange={e => setLowercase(e.target.value)}
            />

            <label htmlFor="uppercase">Uppercase</label>
            <input
                id='uppercase'
                type="text"
                value={uppercase}
                onChange={e => setUppercase(e.target.value)}
            />

            <label htmlFor="numbers">Numbers</label>
            <input
                id='numbers'
                type="text"
                value={numbers}
                onChange={e => setNumbers(e.target.value)}
            />

            <label htmlFor="symbols">Symbols</label>
            <input
                id='symbols'
                type="text"
                value={symbols}
                onChange={e => setSymbols(e.target.value)}
            />
        </div>
    )
}

export default AllowedCharacters