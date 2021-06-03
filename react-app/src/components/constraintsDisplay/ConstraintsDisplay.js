import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeConstriants } from '../../store/generators'
import AllowedCharacters from './AllowedCharacters'
import PasswordLength from './PWLength'
import RequiredCharacters from './RequiredCharacters'


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


    const handleSave = () => {
        dispatch(changeConstriants({
            id: constraints.id,
            uppercase_letters: uppercase,
            lowercase_letters: lowercase,
            numbers: numbers,
            symbols: symbols,
            required_uppercase: reqUppercase,
            required_numbers: reqNumbers,
            required_symbols: reqSymbols,
            allow_duplicates: duplicates,
            pw_length: pwLength,

        }))
    }

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
                <RequiredCharacters
                    reqUppercase={reqUppercase}
                    reqNumbers={reqNumbers}
                    reqSymbols={reqSymbols}
                    setReqUppercase={setReqUppercase}
                    setReqNumbers={setReqNumbers}
                    setReqSymbols={setReqSymbols}
                />
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

            <button onClick={handleSave}>Save!</button>
        </div>
    )
}
export default ConstraintsDisplay