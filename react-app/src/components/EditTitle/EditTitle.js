import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editGenerator } from '../../store/generators'


const EditTitle = ({generator}) => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState(generator.title)
    const dispatch = useDispatch()


    const openEditTitle = () => {
        setOpen(prevState => !prevState)
    }

    const handleEdit = () => {
        dispatch(editGenerator({
            id: generator.id,
            title: title,
            iteration: generator.iteration
        }))
        setOpen(false)
    }

    return (
        <div>
            <button onClick={openEditTitle}>Edit Generator</button>
            {open && <div className='new-gen-form'>
                <div className='new-gen-input'>
                    <input
                        type="text"
                        placeholder='Generator Title'
                        className='title-input'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <div className='new-gen-buttons'>
                        <button onClick={handleEdit}>Save!</button>
                        <button onClick={e => setOpen(false)}>Cancel</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default EditTitle