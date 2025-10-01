'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuthenticated()) {
      router.push('/chat');
    } else {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Chat App
        </h1>
        <p className="text-gray-600">
          Redirecting you to the appropriate page...
        </p>
      </div>
    </div>
  );
}
