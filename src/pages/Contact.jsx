import React from 'react'
import Sidebar from '../components/Sidebar';
import { useMobile } from '../hooks/useMobile'

export default function Contact() {
    const isMobile = useMobile()

    return (
        <div className={`relative flex min-h-screen ${isMobile ? 'ml-0' : 'ml-64'}`}>
            <Sidebar/>
            <div className="w-full p-6 sm:p-8 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Contáctanos</h1>
                
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-blue-500">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Ingresa tu nombre"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Apellido(s)</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Ingresa tus apellidos"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Ingresa tu email"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                            <textarea 
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Escribe tu mensaje aquí"
                            ></textarea>
                        </div>
                        
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
