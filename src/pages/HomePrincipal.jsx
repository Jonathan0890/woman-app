import Sidebar from '../components/Sidebar'
import { useMobile } from '../hooks/useMobile'

export default function HomePrincipal() {
    const isMobile = useMobile()

    return (
        <div className='relative'>
            <Sidebar/>
            <h2 className='text-2xl font-bold'>Home Page</h2>

            <p>Dispositivo actual: {isMobile ? 'Móvil 📱' : 'Escritorio 🖥️'}</p>
        </div>
    )
}