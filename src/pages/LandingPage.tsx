import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHorizontal from '../assets/logohorizontal.png';

export const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const videos = [
    {
      id: 1,
      title: "¿Qué es la anemia infantil?",
      description: "Conoce las causas y cómo prevenirla con una alimentación adecuada",
      thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
      duration: "4:30"
    },
    {
      id: 2,
      title: "Alimentos ricos en hierro",
      description: "Descubre qué alimentos locales pueden prevenir la anemia en bebés",
      thumbnail: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",
      duration: "5:45"
    },
    {
      id: 3,
      title: "Cómo usar ANMI",
      description: "Tutorial paso a paso para consultar información nutricional",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      duration: "3:20"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src={LogoHorizontal}
                alt="ANMI"
                className="h-14 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-red-600 transition-colors">Inicio</a>
              <a href="#caracteristicas" className="text-gray-700 hover:text-red-600 transition-colors">Características</a>
              <a href="#videos" className="text-gray-700 hover:text-red-600 transition-colors">Videos</a>
              <a href="#proyecto" className="text-gray-700 hover:text-red-600 transition-colors">Proyecto</a>
              <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md">
                Registrarse
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-3">
              <a href="#inicio" className="block text-gray-700 hover:text-red-600 py-2">Inicio</a>
              <a href="#caracteristicas" className="block text-gray-700 hover:text-red-600 py-2">Características</a>
              <a href="#videos" className="block text-gray-700 hover:text-red-600 py-2">Videos</a>
              <a href="#proyecto" className="block text-gray-700 hover:text-red-600 py-2">Proyecto</a>
              <Link to="/login" className="block text-gray-700 hover:text-red-600 py-2">Iniciar Sesión</Link>
              <Link to="/register" className="block w-full text-center px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg mt-2">
                Registrarse
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                🎓 Iniciativa Estudiantil UNMSM
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Combatiendo la anemia infantil con
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"> información</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                ANMI es un Asistente Nutricional Materno Infantil desarrollado por estudiantes de la UNMSM. Brindamos información verificada sobre nutrición y prevención de anemia en bebés de 6 a 12 meses.
              </p>
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Importante:</strong> ANMI proporciona información educativa, no sustituye la consulta con un pediatra o nutricionista.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg text-center font-semibold">
                  Comenzar Ahora
                </Link>
                <a href="#videos" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-500 hover:text-red-600 transition-all text-center font-semibold">
                  Ver Videos Informativos
                </a>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">40%</p>
                  <p className="text-sm text-gray-600">Anemia en niños menores de 3 años en Perú</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-600">Información disponible</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">ANMI Asistente</p>
                    <p className="text-xs text-green-500 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      Listo para ayudarte
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 text-sm">
                    ¡Hola! Soy ANMI. ¿Quieres saber qué alimentos previenen la anemia en bebés?
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-3 text-sm ml-12">
                    ¿Qué alimentos ricos en hierro puedo darle a mi bebé de 8 meses?
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm">
                    Para tu bebé de 8 meses, te recomiendo incluir sangrecita, hígado, lentejas y quinua...
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué confiar en ANMI?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Información verificada basada en fuentes oficiales del MINSA, OMS y OPS
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Información Verificada</h3>
              <p className="text-gray-600">
                Contenido curado por estudiantes y basado en guías oficiales de salud del MINSA, OMS y OPS.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Privacidad Garantizada</h3>
              <p className="text-gray-600">
                Tus datos están protegidos. Cumplimos con la Ley N° 29733 de Protección de Datos Personales del Perú.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Información Educativa</h3>
              <p className="text-gray-600">
                Aprende sobre alimentos locales ricos en hierro y pautas de alimentación para bebés de 6 a 12 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Recursos Educativos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aprende más sobre la prevención de anemia infantil con nuestros videos informativos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyecto UNMSM Section */}
      <section id="proyecto" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                🎓 Proyecto de Responsabilidad Social Universitaria
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Desarrollado por estudiantes de la UNMSM
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ANMI: Asistente Nutricional Materno Infantil es un proyecto desarrollado en el marco del curso de <strong>Ética y Derecho Informático</strong> de la Universidad Nacional Mayor de San Marcos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro objetivo es utilizar la tecnología de manera responsable para combatir la anemia infantil en el Perú, aplicando principios de ética en IA, protección de datos y desarrollo responsable de software.
              </p>
              
              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                  Principios del Proyecto
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Cumplimiento de la Ley N° 29733 de Protección de Datos Personales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Minimización y anonimización de datos personales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Información basada en fuentes oficiales (MINSA, OMS, OPS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Transparencia y control de datos por parte del usuario</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg flex-1">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900">UNMSM</p>
                    <p className="text-sm text-gray-600">Universidad Decana de América</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg flex-1">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900">Equipo</p>
                    <p className="text-sm text-gray-600">Estudiantes de Ingeniería</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                  alt="Estudiantes UNMSM"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Proyecto RSU</p>
                    <p className="text-sm text-gray-600">Responsabilidad Social Universitaria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 px-4 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Aviso Importante</h3>
          <p className="text-gray-700 leading-relaxed">
            ANMI proporciona <strong>información educativa general</strong> sobre nutrición y prevención de anemia infantil. 
            Esta información <strong>NO sustituye la consulta con un pediatra o nutricionista</strong>. 
            Para un plan de alimentación personalizado y proporciones específicas para tu bebé, 
            es fundamental que consultes con un profesional de la salud.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para prevenir la anemia infantil?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Accede a información verificada sobre nutrición y alimentación para bebés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-center font-bold text-lg">
              Crear Cuenta Gratis
            </Link>
            <Link to="/login" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all text-center font-bold text-lg">
              Ya tengo cuenta
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={LogoHorizontal}
                alt="ANMI"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Tu asistente de salud inteligente desarrollado por estudiantes de la UNMSM
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#caracteristicas" className="hover:text-white">Características</a></li>
              <li><a href="#videos" className="hover:text-white">Videos</a></li>
              <li><Link to="/login" className="hover:text-white">Iniciar Sesión</Link></li>
              <li><Link to="/register" className="hover:text-white">Registrarse</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Documentación</a></li>
              <li><a href="#" className="hover:text-white">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white">Soporte</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Universidad</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#acerca" className="hover:text-white">Acerca del Proyecto</a></li>
              <li><a href="#" className="hover:text-white">Equipo</a></li>
              <li><a href="#" className="hover:text-white">UNMSM</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 ANMI - Iniciativa Estudiantil UNMSM. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};