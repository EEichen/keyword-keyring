import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import CreateGenerator from './createGenerator/CreateGenerator';

const NavBar = ({user}) => {
  return (
    <nav>
        {!user && <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>

          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>

          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </div>}
        {user && <div>
          <CreateGenerator />
          <LogoutButton />
        </div>}

    </nav>
  );
}

export default NavBar;
