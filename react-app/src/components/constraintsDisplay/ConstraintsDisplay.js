import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeConstriants } from '../../store/generators'
import AllowedCharacters from './AllowedCharacters'
import PasswordLength from './PWLength'


const ConstraintsDisplay = ({constraints}) => {
    const dispatch = useDispatch()
    const [duplicates, setDuplicates] = useState(constraints.allow_duplicates)
    const [pwLength, setPwLength] = useState(constraints.pw_length)
    const [lowercase, setLowercase] = useState(constraints.lowercase_letters)
    const [uppercase, setUppercase] = useState(constraints.uppercase_letters)
    const [numbers, setNumbers] = useState(constraints.numbers)
    const [symbols, setSymbols] = useState(constraints.symbols)
    const [reqUppercase, setReqUppercase] = useState(constraints.required_uppercase)
    const [reqNumbers, setReqNumbers] = useState(constraints.required_numbers)
    const [reqSymbols, setReqSymbols] = useState(constraints.required_symbols)


    return(
        <div className='constraints-display'>
            <div className='constraints simple'>
                <div className='allow-dups'>
                    allow duplicates
                    <input
                    type="checkbox"
                    checked={duplicates}
                    onChange={e => setDuplicates(e.target.checked)}
                    />
                    <PasswordLength pwLength={pwLength} setPwLength={setPwLength} />
                </div>
            </div>
            <div className='constraints req-char'>

            </div>
            <div className='constraints allowed-char'>
                <AllowedCharacters
                    lowercase={lowercase}
                    uppercase={uppercase}
                    numbers={numbers}
                    symbols={symbols}
                    setLowercase={setLowercase}
                    setUppercase={setUppercase}
                    setNumbers={setNumbers}
                    setSymbols={setSymbols}
                />
            </div>
        </div>
    )
}
export default ConstraintsDisplay