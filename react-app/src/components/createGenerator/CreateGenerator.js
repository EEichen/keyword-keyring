import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGenerator } from '../../store/generators'

const CreateGenerator = () => {
    const [open, setOpen] = useState(false)

    const openNewGenerator = () => {
        setOpen(prevState => !prevState)
    }

    return(
        <div>
            <button onClick={openNewGenerator}>➕ New Generator</button>
        </div>
    )
}