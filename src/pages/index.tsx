import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Docs = lazy(() => import("./docs"))
const Login = lazy(() => import("./login"))

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/docs' element={<Docs />} />
        </Routes>
    )
}

