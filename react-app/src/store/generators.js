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
//reducer-----------------------------------------------------------------------