import axios from "axios"
import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
const Home = lazy(() => import("./home"))
const About = lazy(() => import("./about"))

export const Routing = () => {




    return (
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/home' element={<Home />} />

        </Routes>
    )
}

