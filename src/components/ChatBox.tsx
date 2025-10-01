import React from 'react';
import { Message, User } from '@/types/chat';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

interface ChatBoxProps {
  messages: Message[];
  currentUser: User | null;
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
}

export default function ChatBox({ 
  messages, 
  currentUser, 
  onSendMessage, 
  isLoading = false 
}: ChatBoxProps) {
  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b p-4 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">Chat App</h1>
        <p className="text-sm text-gray-600">
          {currentUser ? `Welcome, ${currentUser.username}!` : 'Please log in to chat'}
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden">
        <MessageList 
          messages={messages} 
          currentUserId={currentUser?.id || null} 
        />
      </div>

      {/* Input */}
      <MessageInput 
        onSendMessage={onSendMessage} 
        disabled={!currentUser || isLoading}
      />
    </div>
  );
}
