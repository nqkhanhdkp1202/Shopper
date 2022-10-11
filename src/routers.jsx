import { lazy } from "react"
import { ABOUT_PATH, ACCOUNT_PATH, AUTH_PATH, BLOG_DETAIL_PATH, BLOG_PATH, PRODUCT_DETAIL_PATH, PRODUCT_PATH } from "./config/path"
import MainLayout from "./layouts/MainLayout"
import Page404 from "./pages/404"
import About from "./pages/about"
import BlogDetail from "./pages/blog-detail"
import ProductDetail from './pages/shop/[slug]'

const Home = lazy(() => import('./pages/index'))
const Authen = lazy(() => import('./pages/auth'))
const Account = lazy(() => import('./pages/account/index'))
const Blog = lazy(() => import('./pages/blog'))
const ProductList = lazy(() => import('./pages/shop'))
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
            },
            {
                path: ACCOUNT_PATH,
                element: <Account />
            },
            {
                path: ABOUT_PATH,
                element: <About />
            },
            {
                path: BLOG_PATH,
                element: <Blog />,
            },
            {
                path: BLOG_DETAIL_PATH,
                element: <BlogDetail />,
            },
            {
                path: "*",
                element: <Page404 />
            }
        ]
    }
]

export default routers