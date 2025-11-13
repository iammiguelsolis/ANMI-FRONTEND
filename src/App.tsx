import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage'; // Esta es tu página de "Dashboard"
import { ChatListPage } from './pages/ChatListPage';
import { ChatWindowPage } from './pages/ChatWindowPage';
import { LandingPage } from './pages/LandingPage'; // <-- NUEVA PÁGINA
import { DietDetailPage } from './pages/DietDetailPage';

// Componente de Ruta Protegida (sin cambios)
const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const token = localStorage.getItem('anmi_token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- RUTAS PÚBLICAS --- */}
        <Route path="/" element={<LandingPage />} /> {/* <-- NUEVA RUTA RAÍZ */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* --- RUTAS PROTEGIDAS --- */}
        <Route 
          path="/app" // <-- TU ANTIGUA RUTA '/' AHORA ES '/app'
          element={<ProtectedRoute><HomePage /></ProtectedRoute>} 
        />
        <Route 
          path="/chat" 
          element={<ProtectedRoute><ChatListPage /></ProtectedRoute>} 
        />
        <Route 
          path="/chat/:chatId" 
          element={<ProtectedRoute><ChatWindowPage /></ProtectedRoute>} 
        />
        <Route 
          path="/diet/:dietId" 
          element={<ProtectedRoute><DietDetailPage /></ProtectedRoute>} 
        />
        
        {/* Redirigir cualquier otra ruta a la Landing Page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;