import React from 'react';
import { Link } from 'react-router-dom';

const BloodDropLogo = () => (
  <svg 
    className="w-8 h-8 text-red-600 animate-pulse" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 2.022C12 2.022 5 8.125 5 13.625C5 18.022 8.134 21.978 12 21.978C15.866 21.978 19 18.022 19 13.625C19 8.125 12 2.022 12 2.022Z" 
    />
  </svg>
);

export const PublicHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BloodDropLogo />
            <span className="text-xl font-bold text-gray-800">ANMI</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Link 
              to="/login" 
              className="px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 transition-colors duration-200"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};