import React from 'react'
import { useDispatch } from 'react-redux'
import { editGenerator } from '../../store/generators'
import Iterator from './Iterator'


const GeneratorCard = ({generator}) => {
    const dispatch = useDispatch()


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

    return(
        <div className='gen-card' id={`generator-${generator.id}`}>
            <div className='card-leftside'>
                <div className='gen-title'>{generator.title}</div>
                <div className='pw-display'>ph pw display</div>
                <button>Generate</button>
                <button>copy</button>
                <Iterator 
                iteration={generator.iteration}
                increment={increment}
                decrement={decrement}
                />
            </div>

            <div className='card-rightside'>
                <button>edit constraints</button>
                <button>edit generator</button>
                <button>delete generator</button>
            </div>

        </div>
    )
}

export default GeneratorCard