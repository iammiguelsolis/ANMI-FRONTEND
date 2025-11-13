import React, { useState } from 'react';
import { registerUser } from '../api/apiService';
import { useNavigate, Link } from 'react-router-dom';

export const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [babyAgeMonths, setBabyAgeMonths] = useState('');
  
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Debe aceptar los Términos y Condiciones para registrarse.');
      return;
    }
    
    try {
      await registerUser({
        username,
        password,
        babyAgeMonths: parseInt(babyAgeMonths) || null,
      });
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      navigate('/login');
    } catch (error) {
      alert('Error en el registro');
      console.error(error);
    }
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Crear cuenta en ANMI
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario (alias)"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="number"
            value={babyAgeMonths}
            onChange={(e) => setBabyAgeMonths(e.target.value)}
            placeholder="Edad del infante (meses)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* --- CHECKBOX DE TÉRMINOS Y CONDICIONES --- */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              He leído y acepto los{' '}
              <button
                type="button"
                onClick={toggleModal}
                className="font-medium text-red-600 hover:underline"
              >
                Términos y Condiciones
              </button>
            </label>
          </div>
          {/* ------------------------------------------- */}

          <button
            type="submit"
            disabled={!agreedToTerms} // <-- BOTÓN DESHABILITADO
            className="w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Registrarse
          </button>
        </form>
        <div className="text-center">
          <Link to="/login" className="text-sm text-red-600 hover:underline">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
          <br />
          {/* --- ENLACE AÑADIDO --- */}
          <Link to="/" className="text-sm text-gray-500 hover:underline">
            &larr; Volver al inicio
          </Link>
        </div>
      </div>

      {/* --- MODAL CON EL "FLORO" ÉTICO --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center " onClick={toggleModal}>
          <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Términos de Servicio y Consentimiento</h3>
            <div className="space-y-4 text-gray-700 max-h-[60vh] overflow-y-auto pr-2">
              <p>Bienvenido a ANMI. Antes de continuar, es crucial que entiendas cómo funciona nuestro asistente.</p>
              
              <h4 className="font-bold text-red-700">1. AVISO IMPORTANTE: NO SOMOS UN SUSTITUTO MÉDICO</h4>
              <p>ANMI es una herramienta educativa diseñada para proporcionar información general sobre nutrición y prevención de la anemia, basada en fuentes oficiales (OMS, MINSA). La información proporcionada **NO reemplaza** el diagnóstico, consejo o tratamiento de un pediatra, nutricionista o profesional de la salud calificado.</p>
              
              <h4 className="font-bold">2. TU PRIVACIDAD (MINIMIZACIÓN DE DATOS)</h4>
              <p>Cumpliendo con los principios de privacidad, **no te pedimos tu nombre real, correo ni teléfono**. Solo te pedimos un "alias" (nombre de usuario) para guardar tus chats. La edad de tu bebé se usa únicamente para filtrar la información relevante (ej. papillas para 6 meses vs. trocitos para 9 meses).</p>

              <h4 className="font-bold">3. TU CONTROL (DERECHO AL OLVIDO)</h4>
              <p>Tus conversaciones se guardan para tu conveniencia, pero tú tienes el control total. En el futuro, implementaremos una función para que puedas **borrar todo tu historial** de conversaciones de forma permanente.</p>
              
              <p className="font-bold mt-4">Al hacer clic en "Aceptar", tú confirmas que:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Entiendes que ANMI es una herramienta educativa y no un consejo médico.</li>
                <li>Das tu consentimiento para que usemos la edad de tu bebé (de forma anónima) para darte respuestas personalizadas.</li>
                <li>No usarás este chat para emergencias médicas (como fiebre, vómitos o diarrea).</li>
              </ul>
            </div>
            <button
              onClick={toggleModal}
              className="w-full px-4 py-2 mt-6 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};