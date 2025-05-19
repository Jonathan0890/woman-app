import { useState, useCallback } from 'react';
import { FiHome, FiMap, FiHeart, FiUser, FiMenu, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';

const menuItems = [
    { to: "/", icon: FiHome, label: "Inicio" },
    { to: "/mapa", icon: FiMap, label: "Mapa" },
    { to: "/gula", icon: FiHeart, label: "Gula" },
    { to: "/ny-atti", icon: FiUser, label: "Ny atti" },
];

const Sidebar = () => {
    const isMobile = useMobile();
    const [isExpanded, setIsExpanded] = useState(!isMobile);
    const [isOpen, setIsOpen] = useState(false);

    const closeMobileMenu = useCallback(() => setIsOpen(false), []);
    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
    const toggleExpansion = useCallback(() => setIsExpanded(prev => !prev), []);

    return (
        <>
            {isMobile && (
                <button
                    onClick={toggleMenu}
                    className="fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-lg"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    <FiMenu size={24} />
                </button>
            )}

            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={closeMobileMenu}
                    role="presentation"
                />
            )}

            <div className={`
            bg-slate-800 text-white min-h-screen fixed top-0 left-0 z-40
                transition-all duration-300
                    ${isMobile ?
                    `w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full'}` :
                    `${isExpanded ? 'w-64' : 'w-20'} translate-x-0`
                }`}>
                {!isMobile && (
                    <button
                        onClick={toggleExpansion}
                        className="absolute -right-4 top-4 bg-slate-700 text-white p-2 rounded-full
                        hover:bg-slate-600 transition-colors shadow-lg border-2 border-slate-800"
                        aria-label={isExpanded ? "Contraer menú" : "Expandir menú"}
                    >
                        {isExpanded ? <FiChevronLeft /> : <FiMenu />}
                    </button>
                )}

                <nav className="flex flex-col gap-2 p-4 mt-8">
                    {menuItems.map(({ to, icon: Icon, label }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700"
                        >
                            <Icon className="text-xl min-w-[24px]" />
                            <span className={`${!isMobile && !isExpanded ? 'hidden' : 'block'}`}>
                                {label}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;