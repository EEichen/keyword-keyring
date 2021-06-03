import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeConstriants } from '../../store/generators'
import PasswordLength from './PWLength'


const ConstraintsDisplay = ({constraints}) => {
    const dispatch = useDispatch()
    const [duplicates, setDuplicates] = useState(constraints.allow_duplicates)
    const [pwLength, setPwLength] = useState(constraints.pw_length)

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
                    <PasswordLength pwLength={pwLength} setPwLength={setPwLength} />
                </div>
            </div>
            <div className='constraints req-char'>

            </div>
            <div className='constraints allowed-char'>

            </div>
        </div>
    )
}
export default ConstraintsDisplay