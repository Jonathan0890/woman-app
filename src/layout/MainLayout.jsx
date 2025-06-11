import {useMobile} from "../hooks/useMobile";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    const isMobile = useMobile();

    return (
        <div className="app">
            <header>
                 <h1>{isMobile ? '' : ''}</h1>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                {isMobile ? '' : ''}
            </footer>
        </div>
    );
};