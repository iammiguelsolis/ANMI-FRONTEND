import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dietsData } from '../data/dietsData.ts';
import { ArrowLeft } from 'lucide-react';

export const DietDetailPage: React.FC = () => {
  const { dietId } = useParams<{ dietId: string }>();
  const navigate = useNavigate();
  const diet = dietsData.find(d => d.id === dietId);

  // Scroll al inicio de la página al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!diet) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-red-600">Dieta no encontrada</h1>
        <button 
          onClick={() => navigate('/app')} // Vuelve al dashboard
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  // Renderiza el contenido detallado
  const renderContent = () => {
    return diet.detailedContent.map((item, index) => {
      switch (item.type) {
        case 'h2':
          return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-6 mb-3">{item.text}</h2>;
        case 'p':
          return <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">{item.text}</p>;
        case 'list':
          return (
            <li key={index} className="text-gray-700 text-lg leading-relaxed ml-6 mb-2">
              {item.text}
            </li>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón de Volver */}
      <div className="p-4 bg-white shadow-sm sticky top-0 z-10">
        <button 
          onClick={() => navigate('/app')} // Vuelve al dashboard '/app'
          className="flex items-center text-red-600 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Inicio
        </button>
      </div>

      {/* Contenido de la Dieta */}
      <div className="max-w-3xl mx-auto p-4 md:p-8">
        <img 
          src={diet.imageUrl} 
          alt={diet.title} 
          className="w-full h-64 object-cover rounded-xl shadow-lg"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/cccccc/94a3b8?text=Imagen')}
        />
        <p className="text-lg font-semibold text-red-600 mt-8">{diet.subtitle.toUpperCase()}</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-6">{diet.title}</h1>
        
        <ul className="list-disc list-outside">
          {renderContent()}
        </ul>
      </div>
    </div>
  );
};