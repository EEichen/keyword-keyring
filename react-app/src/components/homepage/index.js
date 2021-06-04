import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getGenerators } from '../../store/generators'
import GeneratorsDisplay from '../generatorsDisplay/GeneratorsDisplay'

const Homepage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('is this running')
        dispatch(getGenerators())
    }, [dispatch])

    return (
        <GeneratorsDisplay />
    )
}

export default Homepage