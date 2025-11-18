import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createChat, getUserChats, getMessagesForChat, sendMessage } from '../api/apiService.ts';
import type { ChatSession, Message } from '../types';

export const ChatListPage: React.FC = () => {
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newChatTitle, setNewChatTitle] = useState('');
  
  // Estados para el chat activo en desktop
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    loadChats();
  }, []);

  useEffect(() => {
    if (selectedChatId) {
      loadMessages(selectedChatId);
    }
  }, [selectedChatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadChats = async () => {
    setIsLoading(true);
    try {
      const { data } = await getUserChats();
      setChats(data);
    } catch (error) {
      console.error('Error al cargar chats', error);
      localStorage.removeItem('anmi_token');
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMessages = async (chatId: string) => {
    try {
      const { data } = await getMessagesForChat(chatId);
      setMessages(data);
    } catch (error) {
      console.error('Error al cargar mensajes', error);
    }
  };

  const handleNewChatClick = () => {
    setNewChatTitle('Nueva Consulta');
    setIsModalOpen(true);
  };

  const handleSubmitNewChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatTitle || newChatTitle.trim() === "") {
      return;
    }

    try {
      const { data: newChat } = await createChat(newChatTitle);
      setIsModalOpen(false);
      setNewChatTitle('');
      loadChats();
      
      if (window.innerWidth >= 768) {
        setSelectedChatId(newChat.id);
      } else {
        navigate(`/chat/${newChat.id}`);
      }
    } catch (error) {
      console.error('Error al crear chat', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewChatTitle('');
  };

  const handleChatClick = (chatId: string) => {
    if (window.innerWidth >= 768) {
      setSelectedChatId(chatId);
    } else {
      navigate(`/chat/${chatId}`);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChatId || !input.trim() || isSendingMessage) return;

    const userMessageContent = input.trim();
    setInput('');
    setIsSendingMessage(true);

    const userMessage: Message = {
      id: `temp-user-${Date.now()}`,
      chatSessionId: selectedChatId,
      sender: 'USER',
      content: userMessageContent,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const { data: botMessage } = await sendMessage(selectedChatId, userMessageContent);
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error al enviar mensaje', error);
    } finally {
      setIsSendingMessage(false);
    }
  };

  const getInitials = (title: string) => {
    const words = title.trim().split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return title.substring(0, 2).toUpperCase();
  };

  const getAvatarColor = (title: string) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-red-500',
      'bg-orange-500',
      'bg-green-500',
      'bg-teal-500',
      'bg-indigo-500',
    ];
    const index = title.length % colors.length;
    return colors[index];
  };

  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  return (
    <>
      {/* Vista móvil - Lista completa */}
      <div className="flex flex-col h-screen bg-white md:hidden">
        <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <Link to="/app" className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Chats</h1>
          </div>
          <button
            onClick={handleNewChatClick}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            title="Nueva consulta"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto pb-20">
          {isLoading && (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500"></div>
            </div>
          )}
          
          {!isLoading && chats.length === 0 && (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">No tienes chats aún</p>
              <p className="text-gray-400 text-sm mt-1">¡Inicia una nueva consulta para comenzar!</p>
            </div>
          )}

          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
              className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-full ${getAvatarColor(chat.title)} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                {getInitials(chat.title)}
              </div>
              <div className="flex-1 ml-3 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900 truncate text-base">
                    {chat.title}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">
                  {new Date(chat.createdAt).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>

        <button
          onClick={handleNewChatClick}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Vista Desktop - Sidebar + Panel de chat */}
      <div className="hidden md:flex h-screen bg-gray-100">
        {/* Sidebar izquierda */}
        <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Chats</h1>
              <Link to="/app" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Link>
            </div>
            <button
              onClick={handleNewChatClick}
              className="w-full px-4 py-2.5 font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-[1.02]"
            >
              + Nueva Consulta
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {isLoading && (
              <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500"></div>
              </div>
            )}
            
            {!isLoading && chats.length === 0 && (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Sin chats</p>
                <p className="text-gray-400 text-sm mt-1">Crea tu primera consulta</p>
              </div>
            )}

            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleChatClick(chat.id)}
                className={`flex items-center px-4 py-3 cursor-pointer transition-colors border-b border-gray-100 ${
                  selectedChatId === chat.id ? 'bg-red-50 hover:bg-red-100' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-full ${getAvatarColor(chat.title)} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {getInitials(chat.title)}
                </div>
                <div className="flex-1 ml-3 min-w-0">
                  <p className="font-semibold text-gray-900 truncate text-base">
                    {chat.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {new Date(chat.createdAt).toLocaleDateString('es-ES', { 
                      day: 'numeric', 
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel derecho - Chat o pantalla de bienvenida */}
        <div className="flex-1 flex flex-col bg-white">
          {!selectedChatId ? (
            // Pantalla de bienvenida
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="text-center px-8 max-w-md">
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Selecciona un chat
                </h2>
                <p className="text-gray-500 text-lg mb-8">
                  Elige una conversación de la lista o crea una nueva consulta para comenzar
                </p>
                <button
                  onClick={handleNewChatClick}
                  className="px-8 py-3 font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105"
                >
                  Iniciar Nueva Consulta
                </button>
                <div className="mt-12 flex justify-center space-x-8 text-gray-400">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs">Respuestas rápidas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-xs">100% seguro</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs">24/7 disponible</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Ventana de chat activa - DISEÑO MEJORADO
            <>
              {/* Header mejorado del chat */}
              <header className="sticky top-0 z-10 bg-white shadow-sm">
                <div className="flex items-center px-4 py-3">
                  <div className={`w-10 h-10 rounded-full ${getAvatarColor(selectedChat?.title || '')} flex items-center justify-center text-white font-bold shadow-md`}>
                    {getInitials(selectedChat?.title || '')}
                  </div>
                  <div className="ml-3 flex-1">
                    <h2 className="font-semibold text-gray-900">{selectedChat?.title}</h2>
                    <p className="text-xs text-green-500 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                      En línea
                    </p>
                  </div>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </header>

              {/* Mensajes mejorados */}
              <div className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50">
                {messages.length === 0 && !isSendingMessage && (
                  <div className="flex flex-col items-center justify-center h-full text-center px-8">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">¡Inicia la conversación!</h3>
                    <p className="text-gray-500 text-sm">Escribe tu primera consulta abajo</p>
                  </div>
                )}

                {messages.map((msg, index) => {
                  const isUser = msg.sender === 'USER';
                  const showTime = index === 0 || 
                    (index > 0 && new Date(msg.createdAt).getTime() - new Date(messages[index - 1].createdAt).getTime() > 300000);

                  return (
                    <div key={msg.id}>
                      {showTime && (
                        <div className="flex justify-center my-4">
                          <span className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm">
                            {new Date(msg.createdAt).toLocaleString('es-ES', { 
                              day: 'numeric', 
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                      )}
                      
                      <div className={`mb-3 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%]`}>
                          {!isUser && (
                            <div className="flex items-center mb-1">
                              <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                                AI
                              </div>
                              <span className="text-xs text-gray-500 font-medium">Asistente</span>
                            </div>
                          )}
                          
                          <div
                            className={`px-4 py-2.5 rounded-2xl shadow-sm ${
                              isUser
                                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white rounded-br-md'
                                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">
                              {msg.content}
                            </p>
                            <div className="flex items-center justify-end mt-1 space-x-1">
                              <span className={`text-xs ${isUser ? 'text-red-100' : 'text-gray-400'}`}>
                                {new Date(msg.createdAt).toLocaleTimeString('es-ES', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </span>
                              {isUser && (
                                <svg className="w-4 h-4 text-red-100" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Indicador de escritura */}
                {isSendingMessage && (
                  <div className="flex justify-start mb-3">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                      <div className="flex space-x-1.5">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input mejorado tipo WhatsApp */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
                <div className="flex items-end space-x-2">
                  <button className="p-2.5 text-gray-500 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                  
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage(e as any);
                        }
                      }}
                      disabled={isSendingMessage}
                      className="w-full px-4 py-3 pr-12 bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 text-gray-900"
                      placeholder={isSendingMessage ? 'Esperando respuesta...' : 'Escribe un mensaje...'}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  <button
                    type="button"
                    onClick={(e) => handleSendMessage(e as any)}
                    disabled={isSendingMessage || !input.trim()}
                    className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex-shrink-0"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-opacity-50 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white w-full md:max-w-md rounded-t-3xl md:rounded-2xl shadow-2xl transform transition-all animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Nueva Consulta</h2>
              <button
                onClick={handleCloseModal}
                className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-5">
              <label htmlFor="chatTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de la consulta
              </label>
              <input
                type="text"
                id="chatTitle"
                value={newChatTitle}
                onChange={(e) => setNewChatTitle(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSubmitNewChat(e as any);
                  }
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Ej: Consulta sobre facturación"
                autoFocus
              />
              
              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-3 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubmitNewChat(e as any)}
                  className="flex-1 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md"
                >
                  Crear Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};