import { lazy } from "react"
import { paths } from "./config/path"
import Page404 from "./pages/404"

const Home = lazy(() => import('./pages/index'))
const routers = [
    {
        path: paths.Home, element: <Home />
    },
    {
        path: '*', element: <Page404 />
    }
]

export default routers