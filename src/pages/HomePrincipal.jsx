import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useMobile } from '../hooks/useMobile';

export default function HomePrincipal() {
    const isMobile = useMobile();
    const [showAlert, setShowAlert] = useState(false);
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const handleButtonClick = () => {
        setIsButtonPressed(true);
        setShowAlert(true);
        
        setTimeout(() => setIsButtonPressed(false), 300);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <div className='relative flex min-h-screen'>
            <Sidebar/>
            
            {/* Alerta overlay - Versión responsive */}
            {showAlert && (
                <div className="fixed top-4 left-0 right-0 flex justify-center z-50 animate-fade-in px-4">
                    <div className={`bg-white border-2 border-red-500 text-red-600 px-4 py-3 rounded-lg shadow-xl flex items-center ${isMobile ? 'w-full max-w-xs' : 'max-w-md'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="font-semibold text-sm sm:text-base break-words">
                            ¡Has presionado el botón de emergencia!
                        </span>
                    </div>
                </div>
            )}

            <div className={`flex flex-col items-center w-full ${isMobile ? 'ml-0' : 'ml-64'} p-4 sm:p-8`}>
                {/* Cuadro de texto con estilo mejorado */}
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-2xl mb-8 sm:mb-10 border-t-4 border-blue-500 transform hover:-translate-y-1 transition-all duration-300">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 text-gray-800">Welcome</h1>
                    <p className="text-gray-600 text-center text-base sm:text-lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                
                {/* Botón SOS */}
                <button 
                    className={`bg-red-600 text-white font-bold rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center shadow-xl hover:bg-red-700 mb-8 sm:mb-10 transition-all duration-300 ${isButtonPressed ? 'scale-95 ring-4 ring-red-300' : 'scale-100'}`}
                    onClick={handleButtonClick}
                >
                    <span className="text-xl sm:text-2xl tracking-wide">S.O.S</span>
                </button>
                
                {/* Slider placeholder */}
                <div className="w-full max-w-4xl bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl h-56 sm:h-72 flex items-center justify-center shadow-inner border border-gray-300">
                    <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 font-medium text-sm sm:text-base">Slider de imágenes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}