import React, { useState } from 'react'
import NewGeneratorForm from './NewGeneratorForm'
import './CreateGenerator.css'

const CreateGenerator = () => {
    const [open, setOpen] = useState(false)

    const openNewGenerator = () => {
        setOpen(prevState => !prevState)
    }

    return(
        <div>
            <button onClick={openNewGenerator}>+ New Generator</button>
            {open && <div className='new-gen-form'>
                <NewGeneratorForm setOpen={setOpen}/>
            </div>}
        </div>
    )
}

export default CreateGenerator