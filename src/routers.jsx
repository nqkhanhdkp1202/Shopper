import { lazy } from "react"
import { AUTH_PATH, PRODUCT_DETAIL_PATH, PRODUCT_PATH } from "./config/path"
import MainLayout from "./layouts/MainLayout"
import Page404 from "./pages/404"
import ProductList from "./pages/product"
import Shop from "./pages/product"
import ProductDetail from "./pages/product/[slug]"

const Home = lazy(() => import('./pages/index'))
const Authen = lazy(() => import('./pages/Authen'))
const routers = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: PRODUCT_PATH,
                element: <ProductList />
            },
            {
                path: PRODUCT_DETAIL_PATH,
                element: <ProductDetail />
            },
            {
                path: AUTH_PATH,
                element: <Authen />
            }
        ]
    }
]

export default routers