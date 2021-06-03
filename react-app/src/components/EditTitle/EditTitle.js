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
            <button onClick={openEditTitle}>Edit generator</button>
            {open && <div className='edit-title-form'>
                <input
                    type="text"
                    placeholder='Generator Title'
                    className='title-input'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button onClick={handleEdit}>Save!</button>
            </div>}
        </div>
    )
}

export default EditTitle