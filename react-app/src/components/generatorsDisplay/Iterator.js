import React from 'react'
import { useShowHints } from '../../context/showHintsContext'

const Iterator = ({iteration, increment, decrement}) => {
    const {showHints} = useShowHints()

    return(
        <div className='hover-hint'>
            <div className='iteration'>
                <div className='iterator-label'>Iterator:</div>
                <button className='decrement' onClick={decrement}>-</button>
                <div className='iteration-display'>{iteration}</div>
                <button className='increment' onClick={increment}>+</button>
            </div>
           {showHints && <span className={`hint itr-hint`}>the iterator changes the password generated without creating a new generator</span>}
        </div>
    )
}

export default Iterator