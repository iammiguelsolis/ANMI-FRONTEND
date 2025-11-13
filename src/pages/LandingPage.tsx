import React from 'react';
import { Link } from 'react-router-dom';
import { PublicHeader } from '../components/PublicHeader';
import { Footer } from '../components/Footer';
import Foto from '../assets/landing.jpg';

// Íconos SVG para las características
const IconShield = () => (
  <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.219a11.955 11.955 0 01-5.858 5.858A11.955 11.955 0 011 11.955a11.955 11.955 0 015.858-5.858A11.955 11.955 0 0111.955 1M4.867 19.133L19.133 4.867" /></svg>
);
const IconBook = () => (
  <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13.5M8.25 6.253v13.5M15.75 6.253v13.5M4.5 6.253h15M4.5 19.753h15" /></svg>
);
const IconAlert = () => (
  <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicHeader />

      {/* --- Sección Hero --- */}
      <main className="flex-grow pt-16"> {/* pt-16 para dejar espacio al header fijo */}
        <section className="bg-gray-50 py-20 sm:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Combate la <span className="text-red-600">Anemia Infantil</span>
              <br /> con Información Confiable
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              ANMI es tu asistente nutricional gratuito, diseñado para ayudarte a tomar las mejores decisiones para la salud de tu bebé.
            </p>
            <Link
              to="/register"
              className="mt-10 inline-block px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-colors"
            >
              Empezar Ahora (Es Gratis)
            </Link>
          </div>
        </section>

        {/* --- Sección "Qué es la Anemia" --- */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Puedes reemplazar esto con una imagen real */}
              <div className="w-full h-64 bg-red-100 rounded-lg flex items-center justify-center">
                <img src={Foto} alt="Imagen" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">El Problema: Anemia Infantil</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La anemia, causada principalmente por deficiencia de hierro, afecta a una gran parte de la población infantil.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La falta de acceso a información confiable sobre alimentos ricos en hierro y su correcta preparación es un factor clave en la persistencia de esta condición. Nuestro objetivo es cerrar esa brecha.
              </p>
            </div>
          </div>
        </section>

        {/* --- Sección de Características (Iconos) --- */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Construido sobre Principios Éticos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tarjeta 1 */}
              <div className="text-center p-6">
                <div className="flex justify-center mb-4"><IconBook /></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fuentes Verificadas</h3>
                <p className="text-gray-600">Toda nuestra información proviene de fuentes oficiales como la OMS y el MINSA.</p>
              </div>
              {/* Tarjeta 2 */}
              <div className="text-center p-6">
                <div className="flex justify-center mb-4"><IconShield /></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Privacidad Primero</h3>
                <p className="text-gray-600">No pedimos datos personales. Tu anonimato está garantizado.</p>
              </div>
              {/* Tarjeta 3 */}
              <div className="text-center p-6">
                <div className="flex justify-center mb-4"><IconAlert /></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No es un Doctor</h3>
                <p className="text-gray-600">Somos una guía educativa. La consulta con un pediatra es indispensable.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};