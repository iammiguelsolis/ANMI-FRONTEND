import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMessagesForChat, sendMessage } from '../api/apiService';
import type { Message } from '../types';
import { MessageBubble } from '../components/MessageBubble';

export const ChatWindowPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { chatId } = useParams<{ chatId: string }>(); // Obtiene el ID del chat de la URL
  const navigate = useNavigate();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (chatId) {
      loadMessages();
    }
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    if (!chatId || !input || isLoading) return;

    setIsLoading(true);
    const userMessageContent = input;
    setInput('');

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

  return (
    <div className="flex flex-col h-screen">
      {/* Header con botón de "Atrás" */}
      <header className="flex items-center p-4 bg-white border-b border-gray-200">
        <button onClick={() => navigate('/chat')} className="text-red-600 hover:text-red-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="text-xl font-bold text-gray-800 ml-4">Consulta</h1>
      </header>

      {/* Historial de Mensajes */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {isLoading && messages.length === 0 && <p>Cargando mensajes...</p>}
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input de Mensaje */}
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSend} className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder={isLoading ? 'Procesando...' : 'Escribe tu consulta...'}
          />
          <button
            type="submit"
            disabled={isLoading || !input}
            className="px-5 py-3 font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 disabled:opacity-50"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};