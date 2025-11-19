import React, { useState } from 'react';
import { registerUser } from '../api/apiService';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Baby, AlertCircle, CheckCircle, X, FileText, Shield } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [babyAgeMonths, setBabyAgeMonths] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{
    show: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    show: false,
    type: 'success',
    title: '',
    message: ''
  });

  const navigate = useNavigate();

  const showModal = (type: 'success' | 'error', title: string, message: string) => {
    setModal({ show: true, type, title, message });
  };

  const closeModal = () => {
    setModal({ ...modal, show: false });
    if (modal.type === 'success') {
      navigate('/login');
    }
  };

  const toggleTermsModal = () => setIsTermsModalOpen(!isTermsModalOpen);

  const validateForm = (): { valid: boolean; message: string } => {
    if (!username.trim()) {
      return { valid: false, message: 'El nombre de usuario es obligatorio' };
    }
    if (username.length < 3) {
      return { valid: false, message: 'El nombre de usuario debe tener al menos 3 caracteres' };
    }
    if (!password) {
      return { valid: false, message: 'La contraseña es obligatoria' };
    }
    if (password.length < 6) {
      return { valid: false, message: 'La contraseña debe tener al menos 6 caracteres' };
    }
    if (password !== confirmPassword) {
      return { valid: false, message: 'Las contraseñas no coinciden' };
    }
    if (!agreedToTerms) {
      return { valid: false, message: 'Debes aceptar los Términos y Condiciones para continuar' };
    }
    if (babyAgeMonths && (parseInt(babyAgeMonths) < 0 || parseInt(babyAgeMonths) > 60)) {
      return { valid: false, message: 'La edad del infante debe estar entre 0 y 60 meses' };
    }
    return { valid: true, message: '' };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateForm();
    if (!validation.valid) {
      showModal('error', 'Validación', validation.message);
      return;
    }

    setLoading(true);
    
    try {
      await registerUser({
        username,
        password,
        babyAgeMonths: babyAgeMonths ? parseInt(babyAgeMonths) : null,
      });
      showModal('success', '¡Registro exitoso!', 'Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'El registro ha fallado. Por favor intenta nuevamente.';
      showModal('error', 'Error en el registro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 py-8">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl border border-gray-100">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-2">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Crear cuenta
            </h2>
            <p className="text-gray-500 text-sm">Únete a ANMI y cuida la nutrición de tu bebé</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Nombre de usuario (alias)</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Elige un alias"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>
              <p className="text-xs text-gray-500">No necesitamos tu nombre real. Tu privacidad es importante.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Confirmar contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repite tu contraseña"
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={loading}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Edad del infante (opcional)</label>
              <div className="relative">
                <Baby className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={babyAgeMonths}
                  onChange={(e) => setBabyAgeMonths(e.target.value)}
                  placeholder="Edad en meses (0-60)"
                  min="0"
                  max="60"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>
              <p className="text-xs text-gray-500">Esto ayuda a personalizar las recomendaciones nutricionales.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-3">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-red-600 rounded focus:ring-red-500 cursor-pointer"
                  disabled={loading}
                />
                <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                  He leído y acepto los{' '}
                  <button
                    type="button"
                    onClick={toggleTermsModal}
                    className="font-semibold text-red-600 hover:text-red-700 underline inline-flex items-center gap-1"
                  >
                    <FileText className="w-4 h-4" />
                    Términos y Condiciones
                  </button>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !agreedToTerms}
              className="w-full px-4 py-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creando cuenta...</span>
                </>
              ) : (
                <span>Crear cuenta</span>
              )}
            </button>
          </form>

          <div className="pt-4 border-t border-gray-200 space-y-3 text-center">
            <Link to="/login" className="block text-sm text-red-600 hover:text-red-700 font-medium transition-colors">
              ¿Ya tienes cuenta? Inicia sesión aquí
            </Link>
            <Link to="/" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      {/* MODAL DE TÉRMINOS Y CONDICIONES */}
      {isTermsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm animate-fadeIn p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden transform transition-all animate-slideUp max-h-[90vh] flex flex-col">
            <div className="bg-red-50 p-6 border-b border-red-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Términos de Servicio y Consentimiento</h3>
                </div>
                <button
                  onClick={toggleTermsModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-5 overflow-y-auto flex-1">
              <p className="text-gray-700 leading-relaxed">
                Bienvenido a <strong>ANMI</strong>. Antes de continuar, es crucial que entiendas cómo funciona nuestro asistente.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  1. AVISO IMPORTANTE: NO SOMOS UN SUSTITUTO MÉDICO
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ANMI es una herramienta educativa diseñada para proporcionar información general sobre nutrición y prevención de la anemia, basada en fuentes oficiales (OMS, MINSA). La información proporcionada <strong>NO reemplaza</strong> el diagnóstico, consejo o tratamiento de un pediatra, nutricionista o profesional de la salud calificado.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  2. TU PRIVACIDAD (MINIMIZACIÓN DE DATOS)
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Cumpliendo con los principios de privacidad, <strong>no te pedimos tu nombre real, correo ni teléfono</strong>. Solo te pedimos un "alias" (nombre de usuario) para guardar tus chats. La edad de tu bebé se usa únicamente para filtrar la información relevante (ej. papillas para 6 meses vs. trocitos para 9 meses).
                </p>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  3. TU CONTROL (DERECHO AL OLVIDO)
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tus conversaciones se guardan para tu conveniencia, pero tú tienes el control total. En el futuro, implementaremos una función para que puedas <strong>borrar todo tu historial</strong> de conversaciones de forma permanente.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-gray-900 mb-3">Al hacer clic en "Acepto", tú confirmas que:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Entiendes que ANMI es una herramienta educativa y no un consejo médico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Das tu consentimiento para que usemos la edad de tu bebé (de forma anónima) para darte respuestas personalizadas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>No usarás este chat para emergencias médicas (como fiebre, vómitos o diarrea).</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <button
                onClick={toggleTermsModal}
                className="w-full py-3 px-4 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Acepto los términos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE MENSAJES (ÉXITO/ERROR) */}
      {modal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm animate-fadeIn p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform transition-all animate-slideUp">
            <div className={`p-6 ${modal.type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {modal.type === 'success' ? (
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                  )}
                  <h3 className={`text-xl font-bold ${modal.type === 'success' ? 'text-green-900' : 'text-red-900'}`}>
                    {modal.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-700 mb-6">{modal.message}</p>
              <button
                onClick={closeModal}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                  modal.type === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {modal.type === 'success' ? 'Ir al login' : 'Entendido'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};