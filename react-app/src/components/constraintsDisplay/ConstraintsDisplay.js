import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeConstriants } from '../../store/generators'


const ConstraintsDisplay = ({constraints}) => {
    const dispatch = useDispatch()
    const [duplicates, setDuplicates] = useState(constraints.allow_duplicates)
    
    return(
        <div className='constraints-display'>
            <div className='constraints simple'>
                <div className='allow-dups'>
                    allow duplicates
                    <input
                    type="checkbox"
                    checked={duplicates}
                    onChange={e => setDuplicates(e.target.checked)}
                    />
                    
                </div>
            </div>
            <div className='constraints req-char'>

            </div>
            <div className='constraints allowed-char'>

            </div>
        </div>
    )
}