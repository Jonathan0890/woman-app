import { useMobile } from '../hooks/useMobile'

export default function HomePrincipal() {
    const isMobile = useMobile()

    return (
        <div>
            <h2>Home Page</h2>
            <p>Dispositivo actual: {isMobile ? 'Móvil 📱' : 'Escritorio 🖥️'}</p>
        </div>
    )
}