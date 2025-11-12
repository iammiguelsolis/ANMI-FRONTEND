// src/pages/ChatListPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createChat, getUserChats } from '../api/apiService';
import type { ChatSession } from '../types';

export const ChatListPage: React.FC = () => {
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadChats();
  }, []);

  const loadChats = async () => {
    setIsLoading(true);
    try {
      const { data } = await getUserChats();
      setChats(data);
    } catch (error) {
      console.error('Error al cargar chats', error);
      localStorage.removeItem('anmi_token'); // Desloguear si falla
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = async () => {
    try {
      const { data: newChat } = await createChat();
      // Navega inmediatamente a la nueva ventana de chat
      navigate(`/chat/${newChat.id}`);
    } catch (error) {
      console.error('Error al crear chat', error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <Link to="/app" className="text-red-600 hover:text-red-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-800">Mis Chats</h1>
        <div className="w-6"></div> {/* Espaciador */}
      </header>
      
      {/* Botón de Nuevo Chat */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={handleNewChat}
          className="w-full px-4 py-3 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700"
        >
          + Iniciar Nueva Consulta
        </button>
      </div>

      {/* Lista de Chats */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {isLoading && <p className="p-4 text-center text-gray-500">Cargando...</p>}
        {!isLoading && chats.length === 0 && (
          <p className="p-4 text-center text-gray-500">No tienes chats. ¡Inicia una nueva consulta!</p>
        )}
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => navigate(`/chat/${chat.id}`)}
            className="p-4 cursor-pointer hover:bg-gray-100 border-b border-gray-200"
          >
            <p className="font-medium text-gray-800">{chat.title}</p>
            <span className="text-sm text-gray-500">
              {new Date(chat.createdAt).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};