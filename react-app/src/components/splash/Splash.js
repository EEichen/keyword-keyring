import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

const Splash = () => {
    const user = useSelector(state => state.session.user)



    return user ? <Redirect to='/' /> : (
        <h2>
            Welcome to kwkr, the password generating app!
        </h2>
    )
}

export default Splash