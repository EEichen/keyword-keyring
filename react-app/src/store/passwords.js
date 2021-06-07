//actions-----------------------------------------------------------------------
const GENERATE_ALL = 'passwords/GENERATE_ALL'
const GENERATE_ONE = 'passwords/GENERATE_ONE'
const CLEAR_PASSWORDS = 'passwords/CLEAR_PASSWORDS'

const generateAll = (passwords) => ({
    type: GENERATE_ALL,
    passwords
})

const generateOne = (password) => ({
    type: GENERATE_ONE,
    password
})

export const clearPasswords = () => ({
    type: CLEAR_PASSWORDS
})

//thunks------------------------------------------------------------------------

export const generatePasswords = (keyword) => async (dispatch) => {
    const res = await fetch('/api/passwords/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({keyword})
    })

    const passwords = await res.json()
    console.log(passwords)
    dispatch(generateAll(passwords))
}


export const generateOnePassword = (keyword, id) => async (dispatch) => {
    const res = await fetch(`/api/passwords/${id}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ keyword })
    })

    const password = await res.json()
    console.log(password)
    dispatch(generateOne(password))
}

//reducer-----------------------------------------------------------------------
const initialState = {}

export default function passwordsReducer(state = initialState, action){
    switch(action.type){
        case GENERATE_ALL:
            return action.passwords
        case GENERATE_ONE:
            let newState = {...state, [action.password.id]: action.password.password}
            return newState
        case CLEAR_PASSWORDS:
            return {}
        default:
            return state
    }
}