import React from 'react'
import { Navigate } from 'react-router-dom'
import Docs from '../docs'

const PrivateRoutes = () => {
    const isAuth = localStorage.getItem('token')

    return (isAuth ? <Docs /> : <Navigate to="/" />)
}

export default PrivateRoutes
