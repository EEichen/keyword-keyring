import React from 'react'


const RequiredCharacters = ({
    reqUppercase,
    reqNumbers,
    reqSymbols,
    setReqUppercase,
    setReqNumbers,
    setReqSymbols
}) => {

    return (
        <div className='required-characters'>
            <h4>Number of Required Characters</h4>
            <div>
                <label htmlFor="req-uppercase">Required uppercase</label>
                <input
                    id='req-uppercase'
                    type="number"
                    value={reqUppercase}
                    onChange={e => setReqUppercase(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="req-numbers">Required numbers</label>
                <input
                    id='req-numbers'
                    type="number"
                    value={reqNumbers}
                    onChange={e => setReqNumbers(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="req-symbols">Required symbols</label>
                <input
                    id='req-symbols'
                    type="number"
                    value={reqSymbols}
                    onChange={e => setReqSymbols(e.target.value)}
                />
            </div>
        </div>
    )
}

export default RequiredCharacters