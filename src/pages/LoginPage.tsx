import React, { useState } from 'react';
import { loginUser } from '../api/apiService.ts';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, AlertCircle, CheckCircle, X } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      navigate('/app');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      showModal('error', 'Campos vacíos', 'Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    
    try {
      const { data } = await loginUser({ username, password });
      localStorage.setItem('anmi_token', data.token);
      showModal('success', '¡Bienvenido!', 'Has iniciado sesión correctamente');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Usuario o contraseña incorrectos';
      showModal('error', 'Error de autenticación', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl border border-gray-100">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-2">
              <Lock className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Iniciar Sesión
            </h2>
            <p className="text-gray-500 text-sm">Ingresa a tu cuenta ANMI</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Usuario</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ingresa tu usuario"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
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

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Iniciando sesión...</span>
                </>
              ) : (
                <span>Iniciar Sesión</span>
              )}
            </button>
          </form>

          <div className="pt-4 border-t border-gray-200 space-y-3 text-center">
            <Link to="/register" className="block text-sm text-red-600 hover:text-red-700 font-medium transition-colors">
              ¿No tienes cuenta? Regístrate aquí
            </Link>
            <Link to="/" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      {modal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm animate-fadeIn">
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
                {modal.type === 'success' ? 'Continuar' : 'Entendido'}
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