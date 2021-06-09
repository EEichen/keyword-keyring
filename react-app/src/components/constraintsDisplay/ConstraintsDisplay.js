import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeConstriants } from '../../store/generators'
import AllowedCharacters from './AllowedCharacters'
import PasswordLength from './PWLength'
import RequiredCharacters from './RequiredCharacters'
import { useShowHints } from '../../context/showHintsContext'
import './ConstraintsDisplay.css'


const ConstraintsDisplay = ({constraints, setShowConstraints, title}) => {
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
    const [errors, setErrors] = useState([])
    const {showHints} = useShowHints()


    const handleSave = () => {
        let errs = []
        const totalRequired = (
            parseInt(reqNumbers) + 
            parseInt(reqSymbols) + 
            parseInt(reqUppercase))
        
        // console.log(totalRequired)
        // console.log(pwLength)

        const defaultLowercase = 'abcdefghijklmnopqrstuvwxyz'
        const defaultUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const defaultNumbers = '1234567890'
        const defaultSymbols = "!# \"$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

        const checkCharacters = (chars, accecpted, type) =>{
            for(let i = 0; i < chars.length; i++){
                if(!accecpted.includes(chars[i])){
                    errs.push(`Allowed ${type} only accepts ${type} characters`)
                    return
                }
            }
        }


        checkCharacters(lowercase, defaultLowercase, 'lowercase')
        checkCharacters(uppercase, defaultUppercase, 'uppercase')
        checkCharacters(numbers,defaultNumbers, 'number')
        checkCharacters(symbols, defaultSymbols, 'symbol')

        if(totalRequired > pwLength) {
            errs.push(`the total number of required characters cannot exceed the password length`)
        }

        if(errs.length > 0){
            setErrors(errs)
            // console.log(errs)
        }else{
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
            setShowConstraints(false)
        }
    }

    return(
        <div className='new-gen-form'>
            <div className='constraints-display'>
                <h4 className='constraints-title'>{title} Constraints</h4>
                {errors && <div className='errors'>
                    {errors.map(err => (
                        <div key={err}>{err}</div>
                    ))}
                    </div>}
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

                <div className='constraints simple'>
                    <div className='allow-dups'>
                        <div className='hover-hint'>
                            Allow Duplicate Characters
                            <input
                                type="checkbox"
                                checked={duplicates}
                                onChange={e => setDuplicates(e.target.checked)}
                                />
                            {showHints && <span id='dups-hint' className='hint dups-hint'>Allows or disallows duplicate characters in a password, note that having multiple of a character in the allowed characters will still allow duplicates of that character</span>}
                        </div>
                        <PasswordLength pwLength={pwLength} setPwLength={setPwLength} />
                    </div>
                </div>

                <div className='new-gen-buttons'>
                    <button onClick={handleSave}>Save!</button>
                    <button onClick={e => setShowConstraints(false)} >Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default ConstraintsDisplay