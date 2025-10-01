'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ChatBox from '@/components/ChatBox';
import { auth } from '@/lib/auth';
import { openrouter } from '@/lib/openrouter';
import { Message, User } from '@/types/chat';

export default function ChatPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.getCurrentUser();
    if (!user) {
      router.push('/login');
    } else {
      setCurrentUser(user);
    }
  }, [router]);

  const handleSendMessage = async (content: string) => {
    if (!currentUser) return;

    setIsLoading(true);
    setError(null);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      userId: currentUser.id,
      content,
      createdAt: new Date(),
      user: currentUser,
    };

    setMessages(prev => [...prev, userMessage]);

    try {
      // Check if OpenRouter is configured
      if (!openrouter.isConfigured()) {
        throw new Error('OpenRouter API key not configured. Please add your API key to .env.local');
      }

      // Prepare conversation history for OpenRouter
      const conversationHistory = messages.map(msg => ({
        role: msg.userId === currentUser.id ? 'user' as const : 'assistant' as const,
        content: msg.content
      }));

      // Get AI response from OpenRouter
      const aiResponse = await openrouter.sendMessage(content, conversationHistory);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        userId: 'ai',
        content: aiResponse,
        createdAt: new Date(),
        user: {
          id: 'ai',
          email: 'ai@openrouter.com',
          username: 'AI Assistant',
          createdAt: new Date(),
        },
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to get AI response';
      setError(errorMessage);
      
      // Add error message to chat
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        userId: 'system',
        content: `Error: ${errorMessage}`,
        createdAt: new Date(),
        user: {
          id: 'system',
          email: 'system@chat.app',
          username: 'System',
          createdAt: new Date(),
        },
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    auth.logout();
    router.push('/login');
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      {/* Error notification */}
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50 max-w-md">
          <div className="flex justify-between items-start">
            <div>
              <strong>Error:</strong> {error}
            </div>
            <button
              onClick={() => setError(null)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* API Key warning */}
      {!openrouter.isConfigured() && (
        <div className="fixed top-4 left-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded z-50 max-w-md">
          <div className="flex justify-between items-start">
            <div>
              <strong>Setup Required:</strong> Add your OpenRouter API key to .env.local to enable AI responses.
            </div>
            <button
              onClick={() => setError(null)}
              className="ml-4 text-yellow-500 hover:text-yellow-700"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Logout button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      <ChatBox
        messages={messages}
        currentUser={currentUser}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
}
