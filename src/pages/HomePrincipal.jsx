import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useMobile } from '../hooks/useMobile';

export default function HomePrincipal() {
    const isMobile = useMobile();
    const [showAlert, setShowAlert] = useState(false);
    const [pulse, setPulse] = useState(false);

    const handleButtonClick = () => {
        setPulse(true);
        setShowAlert(true);
        
        setTimeout(() => setPulse(false), 1000);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <div className='relative flex min-h-screen bg-[#CA4353]'>
            <Sidebar/>
            
            {/* Alerta overlay */}
            {showAlert && (
                <div className="fixed top-4 left-0 right-0 flex justify-center z-50 animate-fade-in px-4">
                    <div className={`bg-white border-2 border-[#CA4353] text-[#CA4353] px-4 py-3 rounded-lg shadow-xl flex items-center ${isMobile ? 'w-full max-w-xs' : 'max-w-md'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="font-semibold text-sm sm:text-base break-words">
                            ¡Se ha enviado la alerta a tus contactos de emergencia!
                        </span>
                    </div>
                </div>
            )}

            {/* Contenido principal */}
            <div className={`flex flex-col items-center w-full ${isMobile ? 'ml-0' : 'ml-64'} min-h-screen`}>
                {/* Header con título y campana */}
                <div className="w-full flex justify-between items-center p-6">
                    <div className="w-full text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">EMERGENCIA</h1>
                    </div>
                    <button className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                </div>

                {/* Contenido centrado */}
                <div className="flex flex-col items-center justify-center flex-grow px-4 w-full max-w-md">
                    {/* Botón SOS con animación de pulso */}
                    <button 
                        className={`relative bg-white text-[#CA4353] font-bold rounded-full w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center shadow-lg mb-8 transition-all duration-300
                            hover:scale-105 hover:shadow-xl`}
                        onClick={handleButtonClick}
                    >
                        <span className="text-4xl sm:text-5xl tracking-wide z-10">SOS</span>
                        {pulse && (
                            <>
                                <div className="absolute inset-0 rounded-full border-4 border-white opacity-70 animate-ping-once"></div>
                                <div className="absolute inset-0 rounded-full border-4 border-white opacity-40 animate-ping-once-delayed"></div>
                            </>
                        )}
                    </button>

                    {/* Texto descriptivo */}
                    <p className="text-white text-center text-lg sm:text-xl leading-relaxed mb-8 px-4">
                        Si estás en peligro o ves una situación de riesgo, presiona el botón. Una vez que oprimas el botón, se le notificará a tus contactos de emergencia.
                    </p>
                </div>
            </div>

            {/* Estilos para la animación personalizada */}
            <style jsx>{`
                @keyframes ping-once {
                    0% {
                        transform: scale(0.8);
                        opacity: 0.7;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
                @keyframes ping-once-delayed {
                    0% {
                        transform: scale(0.8);
                        opacity: 0.4;
                    }
                    100% {
                        transform: scale(1.8);
                        opacity: 0;
                    }
                }
                .animate-ping-once {
                    animation: ping-once 0.8s ease-out forwards;
                }
                .animate-ping-once-delayed {
                    animation: ping-once-delayed 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
}