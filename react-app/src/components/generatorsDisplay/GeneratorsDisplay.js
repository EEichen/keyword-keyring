import React from 'react';
import { useSelector } from 'react-redux';


const GeneratorsDisplay = () => {
    const generators = useSelector(state => state.generators)


    if(generators){
        return (
            <div>
                <div>
                kw input placeholder
                </div>
                <div>
                    search input placeholder
                </div>

                <div className='display-gens'>
                    {Object.values(generators).map(generator => (
                        <div key={generator.id}>{generator.title}</div>
                    ))}
                </div>

            </div>
        )
    }
    else return <div>To create a new generator, press the button above!</div>
}

export default GeneratorsDisplay