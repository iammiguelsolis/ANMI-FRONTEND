import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';
import { DietCarousel } from '../components/DietCarousel';

// Íconos simples (puedes reemplazarlos con react-icons)
const ShieldIcon = () => <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.219a11.955 11.955 0 01-5.858 5.858A11.955 11.955 0 011 11.955a11.955 11.955 0 015.858-5.858A11.955 11.955 0 0111.955 1M4.867 19.133L19.133 4.867" /></svg>;
const BookIcon = () => <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13.5M8.25 6.253v13.5M15.75 6.253v13.5M4.5 6.253h15M4.5 19.753h15" /></svg>;
const AlertIcon = () => <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('anmi_token');
    navigate('/login');
  };

  return (
    // CAMBIO: Quitado p-4 y p-8 para que el contenido ocupe todo
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Header con Logout (ahora con padding) */}
        <header className="flex justify-between items-center p-4 md:p-8">
          <h1 className="text-2xl font-bold text-red-600">ANMI</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-red-600 border border-red-500 rounded-lg hover:bg-red-50"
          >
            Cerrar Sesión
          </button>
        </header>

        {/* Sección del Logo y Bienvenida (ahora con padding) */}
        <section className="text-center p-8 bg-white rounded-xl shadow-lg m-4 md:m-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido a tu Asistente Nutricional</h2>
          <p className="text-lg text-gray-600 mb-6">Información confiable para combatir la anemia infantil, basada en fuentes oficiales.</p>
          
          <div className="flex justify-center my-8">
            <div className="w-40 h-40 rounded-full flex items-center justify-center text-red-500 text-sm font-bold">
              {/* CAMBIO: Cargamos el logo desde la carpeta /public
                Asegúrate de que tu 'logo.jpeg' esté en la carpeta 'frontend/public/logo.jpeg'
              */}
              <img 
                src={Logo}
                alt="Logo ANMI" 
                className="w-60"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/160/ffebee/ef4444?text=ANMI+Logo')}
              />
            </div>
          </div>
          
          <Link
            to="/chat"
            className="w-full md:w-auto inline-block px-12 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-colors"
          >
            Comenzar Chat
          </Link>
        </section>

        {/* --- 2. AÑADIR EL CARRUSEL AQUÍ --- */}
        <div className="px-4 md:px-8">
          <DietCarousel />
        </div>

        {/* Tarjetas de Información (ahora con padding) */}
        <section className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <BookIcon />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Fuentes Verificadas</h3>
              <p className="text-gray-600">Nuestras respuestas se basan en información de la OMS y el MINSA.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <ShieldIcon />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Tu Privacidad es Clave</h3>
              <p className="text-gray-600">No pedimos datos personales y puedes borrar tu historial cuando quieras.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <AlertIcon />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">No es un Doctor</h3>
              <p className="text-gray-600">Somos una guía educativa. La consulta con un pediatra es indispensable.</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};