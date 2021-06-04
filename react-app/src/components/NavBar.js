import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import CreateGenerator from './createGenerator/CreateGenerator';
import { useDispatch } from "react-redux";
import { login } from "../store/session";
import './NavBar.css'


const NavBar = ({user}) => {
  const dispatch = useDispatch()

  const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
  }

  return (
    <nav className='nav-bar'>
        {!user && <div className='links'>
          <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>

          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>

          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
          </div>

          <h2 className='welcome'>Keyword Keyring</h2>
          <button className='demo' onClick={demoLogin}>Demo</button>
        </div>}
        {user && <div className='user-bar'>
          <CreateGenerator />
          <h2 className='welcome'>Welcome to KwKr {user.username}</h2>
          <LogoutButton />
        </div>}

    </nav>
  );
}

export default NavBar;
