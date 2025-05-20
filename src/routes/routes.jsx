import { createBrowserRouter } from 'react-router-dom'
import  {MainLayout}  from '../layout/MainLayout'
import HomePrincipal from '../pages/HomePrincipal'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MapPage from '../pages/MapPage'

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePrincipal />
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/mapa',
                element: <MapPage/>
            }
        ]
    }
])