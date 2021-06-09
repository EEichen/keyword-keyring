import React from 'react'

const Iterator = ({iteration, increment, decrement}) => {
    return(
        <div className='hover-hint'>
            <div className='iteration'>
                <div className='iterator-label'>Iterator:</div>
                <button className='decrement' onClick={decrement}>-</button>
                <div className='iteration-display'>{iteration}</div>
                <button className='increment' onClick={increment}>+</button>
            </div>
           <span className={`hint itr-hint`}>the iterator changes the password generated without creating a new generator</span>
        </div>
    )
}

export default Iterator