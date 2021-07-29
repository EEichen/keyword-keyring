import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getGenerators } from '../../store/generators'
import GeneratorsDisplay from '../generatorsDisplay/GeneratorsDisplay'
// import ShowHintsProvider from '../../context/showHintsContext'
import ShowPasswordsProvider from '../../context/showPasswordsContext'

const Homepage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenerators())
    }, [dispatch])

    return (
        <ShowPasswordsProvider>
            <GeneratorsDisplay />
        </ShowPasswordsProvider>
    )
}

export default Homepage