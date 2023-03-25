import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './private'

const Docs = lazy(() => import("./docs"))
const Login = lazy(() => import("./login"))

export const Routing = () => {

    return (
        <>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route element {...<Docs />} path='/docs' />
                </Route>
                <Route path='/' element={<Login />} />
            </Routes>
            <ToastContainer />
        </>
    )
}

