import { Routing } from '@/pages'
import React from 'react'
import { Link } from 'react-router-dom'
import { withProviders } from './providers'

const App = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Routing />
        </div>

    )
}

export default withProviders(App)
