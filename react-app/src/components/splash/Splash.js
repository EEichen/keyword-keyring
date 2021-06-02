import React from 'react'
import { Redirect } from "react-router-dom";

const Splash = ({user}) => {

    if (user) {
        return <Redirect to="/" />;
    }

    return(
        <div>
            Welcome to kwkr, the password generating app!
        </div>
    )
}

export default Splash