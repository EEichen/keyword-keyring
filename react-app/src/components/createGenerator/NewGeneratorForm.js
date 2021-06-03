import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGenerator } from '../../store/generators'


const NewGeneratorForm = ({setOpen}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    const handleCreate = () => {
        dispatch(createGenerator(title))
        setOpen(false)
    }

    return (
        <div>
            <input 
            type="text" 
            placeholder='Generator Title'
            className='title-input'
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <button onClick={handleCreate}>Create!</button>
        </div>
    )
}

export default NewGeneratorForm