import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editGenerator } from '../../store/generators'
import EditTitle from '../EditTitle/EditTitle'
import Iterator from './Iterator'
import './GeneratorCard.css'
import ConstraintsDisplay from '../constraintsDisplay/ConstraintsDisplay'
import { generateOnePassword } from '../../store/passwords'
import DeleteGenerator from '../DeleteGenerator/DeleteGenerator'
import { useShowPasswords } from '../../context/showPasswordsContext'


const GeneratorCard = ({generator, keyword}) => {
    const dispatch = useDispatch()
    const [showConstraints, setShowConstraints] = useState(false)
    const [open, setOpen] = useState(false)
    const password = useSelector(state => state.passwords[generator.id])
    const {showPasswords} = useShowPasswords()
    const [showPw, setShowPw] = useState(showPasswords)

    useEffect(() =>{
        setShowPw(showPasswords)
    }, [showPasswords])


    const increment = () => {
        dispatch(editGenerator({
            id: generator.id,
            title: generator.title,
            iteration: generator.iteration + 1
        }))
    }

    const decrement = () => {
        dispatch(editGenerator({
            id: generator.id,
            title: generator.title,
            iteration: generator.iteration - 1
        }))
    }


    const showDelete = () => {
        setOpen(prev => !prev)
    }

    const generatePw = () =>{
        dispatch(generateOnePassword(keyword, generator.id))

    }

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(password)
    }

    return(
        <div className='gen-card' id={`generator-${generator.id}`}>
            <div className='card-leftside'>
                <p className='gen-title'>{generator.title}</p>
                <div className='pw'>
                <label  htmlFor={`pwdisplay-${generator.id}`} className='gen-label'>Password:</label>
                <input 
                type={showPw ? 'text' : 'password'} 
                id={`pwdisplay-${generator.id}`}
                className='pw-display' 
                disabled 
                value={password ? password: ''}
                ></input>
                </div>
                <div className='leftside-gen-buttons'>
                    <button disabled={!keyword} onClick={generatePw} >Generate</button>
                    <Iterator 
                    iteration={generator.iteration}
                    increment={increment}
                    decrement={decrement}
                    />
                    <button onClick={copyToClipboard}>copy</button>
                </div>
            </div>

            <div className='card-rightside'>
                <button onClick={e => setShowConstraints(prev => !prev)}>Edit Constraints</button>
                {showConstraints && <ConstraintsDisplay
                    constraints={generator.constraints} 
                    setShowConstraints={setShowConstraints}
                    title={generator.title}
                    />}
                <EditTitle generator={generator} />
                <button onClick={showDelete}>Delete Generator</button>
                {open && <DeleteGenerator setOpen={setOpen} generator={generator} />}
            </div>

        </div>
    )
}

export default GeneratorCard