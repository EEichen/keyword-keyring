import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useShowHints } from '../../context/showHintsContext'
import {getGenerators, searchGenerators} from '../../store/generators'


const Search = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const {showHints, setShowHints} = useShowHints()

    const handleSearch = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        if (input){
            dispatch(searchGenerators(input))
        }
        else dispatch(getGenerators())

    }, [input, dispatch])

    return(
        <div className='search'>
            <input 
            type="text"
            value={input}
            placeholder='🔎 Search'
            onChange={handleSearch}
            />
            <div className='search-area-buttons'>
            <button onClick={e => setShowHints(prev => !prev)}>show hints: {showHints ? 'on' : 'off'}</button>
            <button onClick={e => setInput('')}>Clear</button>
            </div>
        </div>
    )
}

export default Search