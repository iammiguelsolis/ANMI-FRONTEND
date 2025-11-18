import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';
import { dietsData, categoryConfig } from '../data/dietsData';

// Iconos
const HomeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const DietIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
  </svg>
);

const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'home' | 'diets'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleLogout = () => {
    localStorage.removeItem('anmi_token');
    navigate('/login');
  };

  // Filtrar dietas por categoría
  const filteredDiets = selectedCategory === 'all' 
    ? dietsData 
    : dietsData.filter(diet => diet.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src={Logo}
                alt="ANMI" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-red-100"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/40/ef4444/ffffff?text=A')}
              />
              <span className="text-xl font-bold bg-red-500 bg-clip-text text-transparent hidden sm:block">ANMI</span>
            </div>

            {/* Tabs */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === 'home' 
                    ? 'bg-red-500 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <HomeIcon />
                <span className="hidden sm:inline">Inicio</span>
              </button>
              <button
                onClick={() => setActiveTab('diets')}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === 'diets' 
                    ? 'bg-red-500 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <DietIcon />
                <span className="hidden sm:inline">Dietas</span>
              </button>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            >
              <LogoutIcon />
              <span className="hidden sm:inline text-sm font-medium">Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* TAB: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-6">
            
            {/* Hero Card */}
            <div className="bg-red-600 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 text-white">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-1">¡Bienvenido! 👋</h1>
                      <p className="text-white/90 text-lg">Tu asistente nutricional contra la anemia</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/95 mb-6 leading-relaxed text-lg">
                  Información verificada sobre nutrición para bebés de 6 a 12 meses. 
                  Combatamos juntos la anemia infantil con alimentación adecuada.
                </p>

                <Link
                  to="/chat"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white text-red-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <ChatIcon />
                  <span>Iniciar Conversación</span>
                  <ChevronRightIcon />
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Información Verificada</div>
                <div className="text-sm text-gray-500 mt-1">Por profesionales de salud</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Siempre Disponible</div>
                <div className="text-sm text-gray-500 mt-1">Consulta cuando necesites</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="text-4xl font-bold text-green-600 mb-2">{dietsData.length}</div>
                <div className="text-gray-600 font-medium">Planes Nutricionales</div>
                <div className="text-sm text-gray-500 mt-1">Verificados y seguros</div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ℹ️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Dato Importante</h3>
                    <p className="text-xs text-gray-500">Información de salud pública</p>
                  </div>
                </div>
                
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-bold text-red-600">El 40% de niños menores de 3 años en Perú sufre de anemia.</span>
                  <br/><br/>
                  La buena noticia es que puede prevenirse con una alimentación adecuada rica en hierro. 
                  Conoce qué alimentos incluir en la dieta de tu bebé. 💪🍎
                </p>

                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">💡 Consejo:</span> Combina alimentos ricos en hierro con frutas cítricas para mejorar su absorción.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">⚠️</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Aviso Importante</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ANMI proporciona información educativa general. Esta información 
                    <span className="font-bold"> no sustituye la consulta con un pediatra o nutricionista</span>. 
                    Siempre consulta con un profesional de la salud para un plan personalizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: DIETAS */}
        {activeTab === 'diets' && (
          <div className="space-y-6">
            
            {/* Header con filtros */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    📚 Planes Nutricionales
                  </h2>
                  <p className="text-gray-600">
                    Dietas verificadas para la prevención de anemia infantil
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600">{filteredDiets.length}</div>
                  <div className="text-sm text-gray-500">planes disponibles</div>
                </div>
              </div>

              {/* Filtros por categoría */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r bg-red-500   text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Todas
                </button>
                {Object.entries(categoryConfig).map(([key, config]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                      selectedCategory === key
                        ? `bg-gradient-to-r ${config.color} text-white shadow-md`
                        : `${config.bgColor} ${config.textColor} hover:shadow-sm`
                    }`}
                  >
                    <span>{config.icon}</span>
                    <span className="hidden sm:inline">{config.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Dietas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDiets.map((diet) => {
                const config = categoryConfig[diet.category];
                return (
                  <div 
                    key={diet.id} 
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate(`/diet/${diet.id}`)}
                  >
                    {/* Badge de categoría */}
                    <div className="relative">
                      <img 
                        src={diet.imageUrl} 
                        alt={diet.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/ef4444/ffffff?text=Dieta')}
                      />
                      <div className={`absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r ${config.color} text-white rounded-lg text-sm font-semibold shadow-lg flex items-center space-x-1`}>
                        <span>{config.icon}</span>
                        <span>{diet.ageRange}</span>
                      </div>
                      <div className={`absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium ${config.textColor}`}>
                        {diet.difficulty}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {diet.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {diet.description}
                      </p>

                      {/* Info chips */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-700">
                          <ClockIcon />
                          <span>{diet.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-700">
                          <CalendarIcon />
                          <span>{diet.dailyMeals.length} comidas/día</span>
                        </div>
                      </div>

                      {/* Nutrientes destacados */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Hierro:</span>
                          <span className="font-semibold text-red-600">{diet.nutritionalInfo.hierro}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Proteínas:</span>
                          <span className="font-semibold text-orange-600">{diet.nutritionalInfo.proteinas}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all group-hover:scale-105">
                        <span>Ver Plan Completo</span>
                        <ChevronRightIcon />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mensaje si no hay resultados */}
            {filteredDiets.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-md">
                <div className="text-gray-400 mb-4 text-6xl">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron dietas</h3>
                <p className="text-gray-600">Intenta con otra categoría</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};