import React from 'react'

const Iterator = ({iteration, increment, decrement}) => {
    return(
        <div className='iteration'>
            <div>Iterator</div>
            <button onClick={increment}>+</button>
            <div className='iteration-display'>{iteration}</div>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Iterator