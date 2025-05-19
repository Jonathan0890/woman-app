import { createBrowserRouter } from 'react-router-dom'
import  {MainLayout}  from '../layout/MainLayout'
import HomePrincipal from '../pages/HomePrincipal'
import About from '../pages/About'
import Contact from '../pages/Contact'

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
            }
        ]
    }
])