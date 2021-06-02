//actions-----------------------------------------------------------------------
const POPULATE_GENERATORS = 'generators/POPULATE_GENERATORS'
const ADD_GENERATOR = 'generators/ADD_GENERATOR'
const REMOVE_GENERATOR = 'generators/REMOVE_GENERATOR'
const EDIT_CONSTRAINTS = 'generators/EDIT_CONSTRAINTS'

const populateGenerators = (generators) => ({
    action: POPULATE_GENERATORS,
    generators
}) 

const addGenerator = (generator) => ({
    action: ADD_GENERATOR,
    generator
})

const removeGenerator = (id) => ({
    action: REMOVE_GENERATOR,
    id
})

const editConstraints = (constraints) => ({
    action: EDIT_CONSTRAINTS,
    constraints
})
//thunks------------------------------------------------------------------------
export const getGenerators = () => async (dispatch) => {
    const res = await fetch('/api/generators/')

    if(res.ok){
        const generators = await res.json()
        console.log(generators)
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
    console.log(generator)
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
    console.log(newGenerator)
    dispatch(addGenerator(newGenerator))
    return {}
}


export const deleteGenerator = (id) => async (dispatch) => {
    const res = await fetch(`/api/generators/${id}`, {
        method: "DELETE"
    })

    dispatch(removeGenerator(id))
}


//reducer-----------------------------------------------------------------------