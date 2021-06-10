import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGenerator } from '../../store/generators'


const DeleteGenerator = ({ setOpen, generator }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteGenerator(generator.id))
        setOpen(false)
    }

    return (
        <div className='new-gen-form'>

        <div className='new-gen-input'>
            <div className='new-gen-title'>Delete Generator: {generator.title}?</div>
            <div className='new-gen-buttons'>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={e => setOpen(false)}>Cancel</button>
            </div>
        </div>
        </div>
    )
}

export default DeleteGenerator