import React, { useState, useEffect, useRef } from 'react';
import {
  createChat,
  getUserChats,
  getMessagesForChat,
  sendMessage,
} from '../api/apiService';
import type { ChatSession, Message } from '../types';
import { MessageBubble } from '../components/MessageBubble'; // <-- IMPORTANTE
import { useNavigate } from 'react-router-dom';

export const ChatPage: React.FC = () => {
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Para feedback de UX
  const messagesEndRef = useRef<null | HTMLDivElement>(null); // Para auto-scroll
  const navigate = useNavigate();

  useEffect(() => {
    loadChats();
  }, []);

  // Auto-scroll al fondo cuando llegan mensajes nuevos
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadChats = async () => {
    try {
      const { data } = await getUserChats();
      setChats(data);
      // Opcional: Cargar el primer chat automáticamente
      if (data.length > 0) {
        selectChat(data[0].id);
      }
    } catch (error) {
      console.error('Error al cargar chats', error);
      // Si el token es inválido (error 401), deslogueamos
      localStorage.removeItem('anmi_token');
      navigate('/login');
    }
  };

  const handleNewChat = async () => {
    try {
      setIsLoading(true);
      const { data: newChat } = await createChat();
      setChats([newChat, ...chats]);
      selectChat(newChat.id);
    } catch (error) {
      console.error('Error al crear chat', error);
    } finally {
      setIsLoading(false);
    }
  };

  const selectChat = async (chatId: string) => {
    setCurrentChatId(chatId);
    setIsLoading(true);
    try {
      const { data } = await getMessagesForChat(chatId);
      setMessages(data);
    } catch (error) {
      console.error('Error al cargar mensajes', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentChatId || !input || isLoading) return;

    setIsLoading(true);
    const userMessageContent = input;
    setInput(''); // Limpia el input inmediatamente

    const userMessage: Message = {
      id: `temp-user-${Date.now()}`,
      chatSessionId: currentChatId,
      sender: 'USER',
      content: userMessageContent,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const { data: botMessage } = await sendMessage(
        currentChatId,
        userMessageContent
      );
      // Reemplaza el mensaje temporal con la respuesta real del bot
      // (Opcional, pero bueno para UX. Aquí solo añadimos el del bot)
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error al enviar mensaje', error);
      // Opcional: Mostrar un mensaje de error en el chat
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('anmi_token');
    navigate('/login');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Columna Izquierda: Sidebar de Chats */}
      <div className="flex flex-col w-full md:w-1/3 lg:w-1/4 bg-white border-r border-gray-200">
        {/* Header del Sidebar */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">ANMI Chats</h2>
        </div>

        {/* Botón de Nuevo Chat */}
        <div className="p-2">
          <button
            onClick={handleNewChat}
            disabled={isLoading}
            className="w-full px-4 py-2 font-semibold text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 disabled:opacity-50"
          >
            + Nuevo Chat
          </button>
        </div>

        {/* Lista de Chats */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => selectChat(chat.id)}
              className={`p-4 cursor-pointer hover:bg-gray-100 ${
                chat.id === currentChatId
                  ? 'bg-blue-100 border-r-4 border-blue-500'
                  : ''
              }`}
            >
              <p className="font-medium text-gray-700">{chat.title}</p>
            </div>
          ))}
        </div>
        
        {/* Footer del Sidebar (Logout) */}
        <div className="p-2 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 font-semibold text-red-600 border border-red-500 rounded-lg hover:bg-red-50"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Columna Derecha: Ventana de Chat */}
      <div className="flex flex-col flex-1 w-full md:w-2/3 lg:w-3/4">
        {/* Historial de Mensajes */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {/* Elemento invisible para el auto-scroll */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input de Mensaje */}
        <div className="p-4 bg-white border-t border-gray-200">
          <form onSubmit={handleSend} className="flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={!currentChatId || isLoading}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={
                isLoading
                  ? 'Procesando...'
                  : 'Escribe tu consulta sobre nutrición...'
              }
            />
            <button
              type="submit"
              disabled={!currentChatId || isLoading}
              className="px-5 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};