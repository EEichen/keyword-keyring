import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePasswords } from '../../store/passwords';
import GeneratorCard from './GeneratorCard';
import './GeneratorDisplay.css'
import Search from './Search';


const GeneratorsDisplay = () => {
    const generators = useSelector(state => state.generators)
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()

    const generateAllPasswords = () => {
        dispatch(generatePasswords(keyword))
    }


    if(generators){
        return (
            <div className='display-area'>
                <div className='input-display'>
                    <div className='kw-with-gen'>
                        <div>
                        <input 
                        type="text" 
                        placeholder='keyword'
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                        />
                        <button disabled={!keyword} onClick={generateAllPasswords}>Generate All</button>
                        </div>
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>

                {generators.message ? <div className='found-none'>
                    {generators.message}
                </div> : <div className='display-gens'>
                    {Object.values(generators).map(generator => (
                        <GeneratorCard 
                        key={generator.id}
                        generator={generator} 
                        keyword={keyword}/>
                    ))}
                </div>}

            </div>
        )
    }
    else return <div>To create a new generator, press the button above!</div>
}

export default GeneratorsDisplay