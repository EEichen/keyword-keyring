import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {getGenerators, searchGenerators} from '../../store/generators'


const Search = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

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
        <div>
            <input 
            type="text"
            value={input}
            onChange={handleSearch}
            />
            <button onClick={e => setInput('')}>Clear</button>
        </div>
    )
}

export default Search