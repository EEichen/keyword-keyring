import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePasswords } from '../../store/passwords';
import GeneratorCard from './GeneratorCard';
import './GeneratorDisplay.css'
import Search from './Search';


const GeneratorsDisplay = () => {
    const generators = useSelector(state => state.generators)
    const username = useSelector(state => state.session.user.username)
    const [keyword, setKeyword] = useState(
        localStorage.getItem('keyword') ? localStorage.getItem('keyword') : ''
        )
    const dispatch = useDispatch()
    const [allowLS, setAllowLS] = useState(localStorage.getItem('allow') === 'true' ? true : false)

    const generateAllPasswords = () => {
        dispatch(generatePasswords(keyword))
    }

    const handleSetKeyword = (e) => {
        setKeyword(e.target.value)
        if(allowLS){
            localStorage.setItem('keyword', e.target.value)
        }
    }

    const handleAllowLS = (e) => {
        setAllowLS(e.target.checked)

        localStorage.setItem('allow', e.target.checked)
        if(!e.target.checked){
            localStorage.removeItem('keyword')
        }
    }

    useEffect(() => {
        if(localStorage.getItem('username') != username){
            localStorage.removeItem('keyword')
        }

        localStorage.setItem('username', username)
    }, [])


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
                        onChange={e => handleSetKeyword(e)}
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