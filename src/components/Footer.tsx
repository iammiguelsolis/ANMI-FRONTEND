import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} ANMI. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          Este sitio es una herramienta educativa y no reemplaza la consulta médica profesional.
        </p>
      </div>
    </footer>
  );
};