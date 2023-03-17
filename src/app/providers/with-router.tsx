import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => ReactNode) => () => {

    return <BrowserRouter ><Suspense fallback='Загрузка...'>{component()}</Suspense></BrowserRouter>
}
