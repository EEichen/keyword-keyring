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
    const [allowLS, setAllowLS] = useState(localStorage.getItem('allow') === 'true' ? true : false)

    const generateAllPasswords = () => {
        dispatch(generatePasswords(keyword))
    }

    const handleAllowLS = (e) => {
        setAllowLS(e.target.checked)

        localStorage.setItem('allow', e.target.checked)
        // console.log(localStorage.getItem('allow') == "true")
        // if(e.target.value){
        // }
        // else localStorage.setItem('allow', false)
        
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
                        <span className='ls'>Allow Local Storage: 
                            <input 
                            type="checkbox" 
                            name="localStorage" 
                            id="local-storage" 
                            checked={allowLS}
                            onChange={e => handleAllowLS(e)}
                            />
                        </span>
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