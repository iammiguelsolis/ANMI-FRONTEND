import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, AlertCircle, ChefHat, Apple, Droplet, ShieldCheck, BookOpen, CheckCircle } from 'lucide-react';
import { dietsData, categoryConfig } from '../data/dietsData';

// ============== COMPONENTE PRINCIPAL ==============
export const DietDetailPage = () => {
  const [selectedDietId] = useState<string>('inicio-6-meses');
  const [activeTab, setActiveTab] = useState<'info' | 'meals' | 'variations'>('info');
  
  const diet = dietsData.find(d => d.id === selectedDietId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedDietId]);

  if (!diet) return null;

  const categoryInfo = categoryConfig[diet.category];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Header con navegación */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Dashboard
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={diet.imageUrl} 
          alt={diet.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/1200x400/f9fafb/ef4444?text=ANMI+Nutrición';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${categoryInfo.color} text-white font-semibold mb-3`}>
            {categoryInfo.icon} {categoryInfo.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{diet.title}</h1>
          <p className="text-xl text-white/90">{diet.subtitle}</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-4 mt-8 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-4 border-t-4 border-red-500">
            <Users className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-sm text-gray-600">Edad</p>
            <p className="font-bold text-gray-900">{diet.ageRange}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 border-t-4 border-blue-500">
            <Clock className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-sm text-gray-600">Duración</p>
            <p className="font-bold text-gray-900">{diet.duration}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 border-t-4 border-green-500">
            <ChefHat className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-sm text-gray-600">Dificultad</p>
            <p className="font-bold text-gray-900">{diet.difficulty}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 border-t-4 border-purple-500">
            <Apple className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-sm text-gray-600">Hierro</p>
            <p className="font-bold text-gray-900">{diet.nutritionalInfo.hierro}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-2 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('info')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'info' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            📋 Información
          </button>
          <button
            onClick={() => setActiveTab('meals')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'meals' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🍽️ Comidas Diarias
          </button>
          <button
            onClick={() => setActiveTab('variations')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'variations' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            📅 Variaciones Semanales
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {activeTab === 'info' && (
          <div className="space-y-6">
            {/* Descripción */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{diet.description}</p>
            </div>

            {/* Objetivos */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-7 h-7 text-green-600 mr-3" />
                Objetivos de esta Etapa
              </h2>
              <ul className="space-y-3">
                {diet.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">✓</span>
                    <span className="text-gray-700 text-lg">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advertencias */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-7 h-7 text-red-600 mr-3" />
                Advertencias Importantes
              </h2>
              <ul className="space-y-3">
                {diet.warnings.map((warning, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">⚠️</span>
                    <span className="text-gray-700 text-lg font-medium">{warning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Información Nutricional */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Apple className="w-7 h-7 text-purple-600 mr-3" />
                Información Nutricional
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Nutrientes Clave:</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Hierro:</span> {diet.nutritionalInfo.hierro}</p>
                    <p className="text-gray-700"><span className="font-semibold">Proteínas:</span> {diet.nutritionalInfo.proteinas}</p>
                    <p className="text-gray-700"><span className="font-semibold">Vitaminas:</span> {diet.nutritionalInfo.vitaminas.join(', ')}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Beneficios:</h3>
                  <ul className="space-y-2">
                    {diet.nutritionalInfo.beneficios.map((ben, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-gray-700">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Combinaciones de Alimentos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Droplet className="w-7 h-7 text-blue-600 mr-3" />
                Combinaciones Poderosas
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {diet.foodCombinations.map((combo, i) => (
                  <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h3 className="font-bold text-gray-900 mb-2">{combo.combination}</h3>
                    <p className="text-gray-700 text-sm">{combo.benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips de Preparación */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-7 h-7 text-orange-600 mr-3" />
                Consejos de Preparación
              </h2>
              <ul className="space-y-2">
                {diet.preparationTips.map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">💡</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl shadow-lg p-6 border-2 border-red-400">
              <div className="flex items-start">
                <ShieldCheck className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-800 text-base leading-relaxed font-medium">{diet.disclaimer}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'meals' && (
          <div className="space-y-6">
            {diet.dailyMeals.map((meal, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4">
                  <h3 className="text-2xl font-bold">{meal.nombre}</h3>
                  <p className="text-white/90 flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-2" />
                    {meal.hora}
                  </p>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Alimentos */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">🍽️ Alimentos:</h4>
                    {meal.alimentos.map((grupo, j) => (
                      <div key={j} className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                          grupo.categoria === 'Formador' ? 'bg-red-100 text-red-700' :
                          grupo.categoria === 'Energético' ? 'bg-yellow-100 text-yellow-700' :
                          grupo.categoria === 'Regulador' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {grupo.categoria}
                        </span>
                        <ul className="ml-4 space-y-1">
                          {grupo.items.map((item, k) => (
                            <li key={k} className="text-gray-700 flex items-start">
                              <span className="text-red-500 mr-2">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Preparación */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">👨‍🍳 Preparación:</h4>
                    <ol className="space-y-2">
                      {meal.preparacion.map((paso, j) => (
                        <li key={j} className="flex items-start">
                          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                            {j + 1}
                          </span>
                          <span className="text-gray-700">{paso}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Tips */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">💡 Tips:</h4>
                    <ul className="space-y-1">
                      {meal.tips.map((tip, j) => (
                        <li key={j} className="text-gray-700 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'variations' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📅 Plan Semanal de Variaciones</h2>
              <p className="text-gray-600 mb-6">
                Rota estos alimentos durante la semana para ofrecer variedad y asegurar una nutrición completa:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                      <th className="p-3 text-left rounded-tl-lg">Día</th>
                      <th className="p-3 text-left">Proteína (Hierro)</th>
                      <th className="p-3 text-left">Carbohidrato</th>
                      <th className="p-3 text-left rounded-tr-lg">Fruta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diet.weeklyVariations.map((variation, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-3 font-bold text-red-600">{variation.dia}</td>
                        <td className="p-3 text-gray-700">{variation.proteina}</td>
                        <td className="p-3 text-gray-700">{variation.carbohidrato}</td>
                        <td className="p-3 text-gray-700">{variation.fruta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔄 Beneficios de Variar:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Previene deficiencias nutricionales al incluir diferentes vitaminas y minerales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Desarrolla el paladar del bebé con distintos sabores y texturas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Reduce el riesgo de desarrollar alergias alimentarias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Evita que el bebé se aburra con los mismos alimentos</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};