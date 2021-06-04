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
        <div className='new-gen-input'>
            <div className='new-gen-title'>New Generator</div>
            <input 
            type="text" 
            placeholder='Generator Title'
            className='title-input'
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <div className='new-gen-buttons'>
            <button onClick={handleCreate}>Create!</button>
            <button onClick={e => setOpen(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default NewGeneratorForm