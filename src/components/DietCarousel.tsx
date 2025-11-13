import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { dietsData } from '../data/dietsData';
import { ChevronRight, ChevronLeft as ChevronLeftIcon } from 'lucide-react';

export const DietCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === 'left' ? -clientWidth / 1.2 : clientWidth / 1.2;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="relative py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Guías de Nutrición Anti-Anemia
      </h2>

      {/* Contenedor del carrusel con posición relativa */}
      <div className="relative">
        {/* Botón Izquierdo */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 z-20
                     bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-all duration-200"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
        </button>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth touch-pan-x no-scrollbar"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>
            {`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {dietsData.map((diet) => (
            <Link
              to={`/diet/${diet.id}`}
              key={diet.id}
              className="flex-shrink-0 w-64 md:w-72 bg-white rounded-xl shadow-lg overflow-hidden
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={diet.imageUrl}
                alt={diet.title}
                className="w-full h-32 object-cover"
                onError={(e) =>
                  (e.currentTarget.src =
                    'https://placehold.co/600x400/cccccc/94a3b8?text=Imagen')
                }
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-red-600">
                  {diet.subtitle.toUpperCase()}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  {diet.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {diet.description}
                </p>
                <div className="flex items-center justify-end text-red-600 mt-4">
                  <span className="text-sm font-medium">Ver más</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Botón Derecho */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-20
                     bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};
