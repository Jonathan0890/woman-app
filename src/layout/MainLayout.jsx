import {useMobile} from "../hooks/useMobile";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    const isMobile = useMobile();

    return (
        <div className="app">
            <header>
                <h1>{isMobile ? 'Versión Móvil' : 'Versión Escritorio'}</h1>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                {isMobile ? 'Mobile Footer' : 'Desktop Footer'}
            </footer>
        </div>
    );
};