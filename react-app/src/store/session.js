import { clearGenerators } from "./generators";
import { clearPasswords } from "./passwords";

// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const UPDATE_OPTIONS = "session/UPDATE_OPTIONS";

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
})

const updateOptions = (options) =>({
  type: UPDATE_OPTIONS,
  options
})

const initialState = { user: null };

export const saveOptions = (options) => async (dispatch) => {
  const response = await fetch('/api/options/', {
    method: 'PUT',
    headers: {
      'ContentType': 'application/json'
    },
    body: JSON.stringify(options)
  })

  const data = await response.json()
  if(data.errors){
    return data;
  }

  dispatch(updateOptions(data))
  return {}
}

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        localStorage.removeItem('keyword')
        return;
    }
    dispatch(setUser(data))
  }
  
  export const login = (email, password) => async (dispatch)  => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    
    dispatch(setUser(data))
    return {};
  }
  
  export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    const data = await response.json();
    dispatch(removeUser());
    dispatch(clearGenerators())
    dispatch(clearPasswords())
    localStorage.removeItem('keyword')

    return data
  };
  
  
  export const signUp = (username, email, password) => async (dispatch)  => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    
    dispatch(setUser(data))
    return {};
  }

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {user: action.payload}
        case REMOVE_USER:
            return {user: null}
        case UPDATE_OPTIONS:
            let newState = {...state}
            newState.user.options.allow_ls = action.options.allow_ls
            newState.user.options.hints = action.options.hints
            return  newState
        default:
            return state;
    }
}
