'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/LoginForm';
import { auth } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      const user = await auth.login(email, password);
      if (user) {
        router.push('/chat');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      const user = await auth.register(email, username, password);
      if (user) {
        router.push('/chat');
      } else {
        setError('Registration failed');
      }
    } catch (err) {
      setError('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <LoginForm 
        onLogin={handleLogin}
        onRegister={handleRegister}
        isLoading={isLoading}
      />
    </div>
  );
}
