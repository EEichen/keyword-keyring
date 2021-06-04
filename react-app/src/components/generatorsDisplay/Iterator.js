import React from 'react'

const Iterator = ({iteration, increment, decrement}) => {
    return(
        <div className='iteration'>
            <div className='iterator-label'>Iterator:</div>
            <button className='decrement' onClick={decrement}>-</button>
            <div className='iteration-display'>{iteration}</div>
            <button className='increment' onClick={increment}>+</button>
        </div>
    )
}

export default Iterator