//actions-----------------------------------------------------------------------
const POPULATE_GENERATORS = 'generators/POPULATE_GENERATORS'
const ADD_GENERATOR = 'generators/ADD_GENERATOR'
const REMOVE_GENERATOR = 'generators/REMOVE_GENERATOR'
const EDIT_CONSTRAINTS = 'generators/EDIT_CONSTRAINTS'
const CLEAR_GENERATORS = 'generators/CLEAR_GENERATORS'

const populateGenerators = (generators) => ({
    type: POPULATE_GENERATORS,
    generators
}) 

const addGenerator = (generator) => ({
    type: ADD_GENERATOR,
    generator
})

const removeGenerator = (id) => ({
    type: REMOVE_GENERATOR,
    id
})

const editConstraints = (constraints, genId) => ({
    type: EDIT_CONSTRAINTS,
    constraints,
    genId
})

export const clearGenerators = () =>({
    type: CLEAR_GENERATORS
})


//thunks------------------------------------------------------------------------
export const getGenerators = () => async (dispatch) => {
    const res = await fetch('/api/generators/')

    if(res.ok){
        const generators = await res.json()
        // console.log(generators)
        dispatch(populateGenerators(generators))
        return {}
    }
}


export const createGenerator= (title) => async (dispatch) =>{
    const res = await fetch('/api/generators/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title})
    })

    const generator = await res.json()
    // console.log(generator)
    dispatch(addGenerator(generator))
    return {}
}


export const editGenerator = (generator) => async (dispatch) => {
    const res = await fetch(`/api/generators/${generator.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            iteration: generator.iteration,
            title: generator.title
        })
    })

    const newGenerator = await res.json()
    // console.log(newGenerator)
    dispatch(addGenerator(newGenerator))
    return {}
}


export const deleteGenerator = (id) => async (dispatch) => {
    const res = await fetch(`/api/generators/${id}`, {
        method: "DELETE"
    })

    dispatch(removeGenerator(id))
    return res
}


export const changeConstriants = (constraints) => async (dispatch) => {
    const res = await fetch(`/api/constraints/${constraints.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "uppercase_letters": constraints.uppercase_letters,
            "lowercase_letters": constraints.lowercase_letters,
            "numbers": constraints.numbers,
            "symbols": constraints.symbols,
            "pw_length": constraints.pw_length,
            "required_uppercase": constraints.required_uppercase,
            "required_numbers": constraints.required_numbers,
            "required_symbols": constraints.required_symbols,
            "allow_duplicates": constraints.allow_duplicates
        })
    })

    const newConstraints = await res.json()
    dispatch(editConstraints(newConstraints, newConstraints.generator_id))
}


export const searchGenerators = (input) => async (dispatch) => {
    const res = await fetch(`/api/search/${input}`)

    const generators = await res.json()
    // console.log(generators)
    dispatch(populateGenerators(generators))
    return {}

}


//reducer-----------------------------------------------------------------------
const initialState = {}

export default function generatorsReducer(state = initialState, action){
    let newState;
    switch(action.type){
        case POPULATE_GENERATORS:
            return action.generators
        case ADD_GENERATOR:
            newState = {...state, [action.generator.id]: action.generator}
            return newState
        case REMOVE_GENERATOR:
            newState = {...state}
            delete newState[action.id]
            return newState
        case EDIT_CONSTRAINTS:
            newState = {...state}
            newState[action.genId].constraints = action.constraints
            return newState
        case CLEAR_GENERATORS:
            return {}
        default:
            return state
    }
}