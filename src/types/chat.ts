export interface User {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
  user?: User;
}

export interface ChatState {
  messages: Message[];
  currentUser: User | null;
  isLoading: boolean;
}
