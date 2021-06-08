import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import './Splash.css'
import keyring from '../../images/keyring.svg'

const Splash = () => {
    const user = useSelector(state => state.session.user)



    return user ? <Redirect to='/' /> : (
        <div className='splash'>

            <h2 className='blurb'>
                Welcome to KwKr, the password generating app!
            </h2>
            <img className='kr-img' src={keyring} alt="keyring" />
        </div>
    )
}

export default Splash