import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

const Splash = () => {
    const user = useSelector(state => state.session.user)



    return user ? <Redirect to='/' /> : (
        <div>
            Welcome to kwkr, the password generating app!
        </div>
    )
}

export default Splash