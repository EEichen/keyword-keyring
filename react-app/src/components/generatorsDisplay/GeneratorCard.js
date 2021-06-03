import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGenerator, editGenerator } from '../../store/generators'
import EditTitle from '../EditTitle/EditTitle'
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

    const handleDeleteGen = () => {
        dispatch(deleteGenerator(generator.id))
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
                <EditTitle generator={generator} />
                <button onClick={handleDeleteGen}>delete generator</button>
            </div>

        </div>
    )
}

export default GeneratorCard