import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Corregimos las rutas de importación añadiendo la extensión .tsx
import { LoginPage } from './pages/LoginPage.tsx';
import { RegisterPage } from './pages/RegisterPage.tsx';
import { HomePage } from './pages/HomePage.tsx'; // Esta es tu página de "Dashboard"
import { ChatListPage } from './pages/ChatListPage.tsx';
import { ChatWindowPage } from './pages/ChatWindowPage.tsx';
import { LandingPage } from './pages/LandingPage.tsx'; // <-- NUEVA PÁGINA

// Componente de Ruta Protegida (sin cambios)
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
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
        
        {/* Redirigir cualquier otra ruta a la Landing Page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;