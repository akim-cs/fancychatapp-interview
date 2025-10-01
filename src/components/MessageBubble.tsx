import React from 'react';
import { Message } from '@/types/chat';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
}

export default function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  const isSystem = message.userId === 'system';
  const isAI = message.userId === 'ai';

  if (isSystem) {
    return (
      <div className="flex justify-center mb-4">
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-lg text-sm">
          <div className="font-medium mb-1">System</div>
          <div>{message.content}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isOwn
            ? 'bg-blue-500 text-white'
            : isAI
            ? 'bg-green-100 text-green-800 border border-green-200'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        <div className="text-sm font-medium mb-1">
          {message.user?.username || 'Unknown User'}
        </div>
        <div className="text-sm whitespace-pre-wrap">{message.content}</div>
        <div className={`text-xs mt-1 ${
          isOwn 
            ? 'text-blue-100' 
            : isAI 
            ? 'text-green-600' 
            : 'text-gray-500'
        }`}>
          {new Date(message.createdAt).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
