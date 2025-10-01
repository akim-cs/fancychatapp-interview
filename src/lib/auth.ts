import { User } from '@/types/chat';

// Simple in-memory storage for demo purposes
let currentUser: User | null = null;

export const auth = {
  // Simulate login
  async login(email: string, password: string): Promise<User | null> {
    // In a real app, this would call your backend API
    // For demo purposes, we'll create a mock user
    if (email && password) {
      const user: User = {
        id: '1',
        email,
        username: email.split('@')[0],
        createdAt: new Date(),
      };
      currentUser = user;
      return user;
    }
    return null;
  },

  // Simulate registration
  async register(email: string, username: string, password: string): Promise<User | null> {
    // In a real app, this would call your backend API
    if (email && username && password) {
      const user: User = {
        id: Date.now().toString(),
        email,
        username,
        createdAt: new Date(),
      };
      currentUser = user;
      return user;
    }
    return null;
  },

  // Get current user
  getCurrentUser(): User | null {
    return currentUser;
  },

  // Logout
  logout(): void {
    currentUser = null;
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return currentUser !== null;
  },
};
