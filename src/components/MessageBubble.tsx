import React from 'react';
import type { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const { sender, content } = message;
  const isBot = sender === 'BOT';

  // Determina el estilo basado en quién envía
  const alignment = isBot ? 'justify-start' : 'justify-end';
  const bubbleColor = isBot
    ? 'bg-gray-200 text-gray-800'
    : 'bg-red-600 text-white';

  return (
    <div className={`flex w-full mb-3 ${alignment}`}>
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-xl ${bubbleColor}`}
      >
        {/* Usamos 'pre-wrap' para respetar los saltos de línea del bot */}
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
};