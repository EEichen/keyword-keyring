import React from 'react'
import { useShowHints } from '../../context/showHintsContext'


const RequiredCharacters = ({
    reqUppercase,
    reqNumbers,
    reqSymbols,
    setReqUppercase,
    setReqNumbers,
    setReqSymbols
}) => {
    const { showHints } = useShowHints()

    return (
        <div className='required-characters'>
            <h4 className='cons-label'>Number of Required Characters</h4>
            <div>
                <label htmlFor="req-uppercase">Required uppercase</label>
                <div className='hover-hint'>

                    <input
                        id='req-uppercase'
                        type="number"
                        value={reqUppercase}
                        onChange={e => setReqUppercase(e.target.value)}
                        />
                    {showHints && <span className='hint req-hint'>sets the minimum uppercase letters in the password</span>}
                </div>
            </div>
            <div>
                <label htmlFor="req-numbers">Required numbers</label>
                <div className='hover-hint'>
                    <input
                        id='req-numbers'
                        type="number"
                        value={reqNumbers}
                        onChange={e => setReqNumbers(e.target.value)}
                        />
                    {showHints && <span className='hint req-hint'>sets the minimum numbers in the password</span>}
                </div>
            </div>
            <div>
                <label htmlFor="req-symbols">Required symbols</label>
                <div className='hover-hint'>
                    <input
                        id='req-symbols'
                        type="number"
                        value={reqSymbols}
                        onChange={e => setReqSymbols(e.target.value)}
                        />
                    {showHints && <span className='hint req-hint'>sets the minimum symbols in the password</span>}
                </div>
            </div>
        </div>
    )
}

export default RequiredCharacters