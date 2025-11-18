import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMessagesForChat, sendMessage, getUserChats } from '../api/apiService';
import type { Message } from '../types';

export const ChatWindowPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatTitle, setChatTitle] = useState('Consulta');
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (chatId) {
      loadMessages();
      loadChatInfo();
    }
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadChatInfo = async () => {
    try {
      const { data: chats } = await getUserChats();
      const currentChat = chats.find((chat: any) => chat.id === chatId);
      if (currentChat) {
        setChatTitle(currentChat.title);
      }
    } catch (error) {
      console.error('Error al cargar info del chat', error);
    }
  };

  const loadMessages = async () => {
    if (!chatId) return;
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
    if (!chatId || !input.trim() || isLoading) return;

    const userMessageContent = input.trim();
    setInput('');
    setIsLoading(true);

    const userMessage: Message = {
      id: `temp-user-${Date.now()}`,
      chatSessionId: chatId,
      sender: 'USER',
      content: userMessageContent,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const { data: botMessage } = await sendMessage(chatId, userMessageContent);
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error al enviar mensaje', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getInitials = (title: string) => {
    const words = title.trim().split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return title.substring(0, 2).toUpperCase();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header mejorado */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center px-4 py-3">
          <button 
            onClick={() => navigate('/chat')} 
            className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Avatar y título */}
          <div className="flex items-center ml-2 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
              {getInitials(chatTitle)}
            </div>
            <div className="ml-3 flex-1">
              <h1 className="text-base font-semibold text-gray-900 truncate">{chatTitle}</h1>
              <p className="text-xs text-green-500 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                En línea
              </p>
            </div>
          </div>

          {/* Botón de opciones */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {isLoading && messages.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-3"></div>
              <p className="text-gray-500 text-sm">Cargando mensajes...</p>
            </div>
          </div>
        )}
        
        {messages.length === 0 && !isLoading && (
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
                <div className={`max-w-[75%] ${isUser ? 'order-2' : 'order-1'}`}>
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
                    <div className={`flex items-center justify-end mt-1 space-x-1`}>
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

        {/* Indicador de escritura cuando está cargando */}
        {isLoading && messages.length > 0 && (
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

      {/* Input mejorado */}
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
                  handleSend(e as any);
                }
              }}
              disabled={isLoading}
              className="w-full px-4 py-3 pr-12 bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 text-gray-900"
              placeholder={isLoading ? 'Esperando respuesta...' : 'Escribe un mensaje...'}
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
            onClick={(e) => handleSend(e as any)}
            disabled={isLoading || !input.trim()}
            className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};