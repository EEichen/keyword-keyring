import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGenerator, editGenerator } from '../../store/generators'
import EditTitle from '../EditTitle/EditTitle'
import Iterator from './Iterator'
import './GeneratorCard.css'
import ConstraintsDisplay from '../constraintsDisplay/ConstraintsDisplay'
import { generateOnePassword } from '../../store/passwords'


const GeneratorCard = ({generator, keyword}) => {
    const dispatch = useDispatch()
    const [showConstraints, setShowConstraints] = useState(false)
    const password = useSelector(state => state.passwords[generator.id])


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

    const handleDeleteGen = () => {
        dispatch(deleteGenerator(generator.id))
    }

    const generatePw = () =>{
        dispatch(generateOnePassword(keyword, generator.id))

    }

    return(
        <div className='gen-card' id={`generator-${generator.id}`}>
            <div className='card-leftside'>
                <p className='gen-title'>{generator.title}</p>
                <div className='pw'>
                <label  htmlFor='pwdisplay' className='gen-label'>Password:</label>
                <input 
                type='text' 
                id='pwdisplay'
                className='pw-display' 
                disabled 
                value={password}></input>
                </div>
                <div className='leftside-gen-buttons'>
                    <button onClick={generatePw} >Generate</button>
                    <Iterator 
                    iteration={generator.iteration}
                    increment={increment}
                    decrement={decrement}
                    />
                    <button>copy</button>
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
                <button onClick={handleDeleteGen}>Delete Generator</button>
            </div>

        </div>
    )
}

export default GeneratorCard