import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Docs = lazy(() => import("./docs"))
const Login = lazy(() => import("./login"))

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/docs' element={<Docs />} />
            </Routes>
            <ToastContainer />
        </>
    )
}

