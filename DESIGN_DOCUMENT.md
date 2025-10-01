# Next.js Chat App - Simplified Design Document

## Project Overview
A basic Next.js chat application for building practice with OpenRouter authentication and essential chat functionality.

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: OpenRouter Auth
- **State Management**: React useState/useContext
- **Icons**: Lucide React

## Core Features
1. **Authentication**: Login/Register with OpenRouter
2. **Chat Interface**: Basic message display and input
3. **Real-time Messaging**: Simple message exchange
4. **Responsive Design**: Mobile-friendly layout

## Component Structure
```
src/
├── app/
│   ├── login/
│   ├── chat/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ChatBox.tsx
│   ├── MessageList.tsx
│   ├── MessageInput.tsx
│   ├── MessageBubble.tsx
│   ├── LoginForm.tsx
│   └── Header.tsx
├── lib/
│   ├── auth.ts
│   └── openrouter.ts
└── types/
    └── chat.ts
```

## Key Components

### ChatBox.tsx
Main chat container with message list and input

### MessageList.tsx
Displays list of messages with scroll functionality

### MessageInput.tsx
Text input with send button for new messages

### MessageBubble.tsx
Individual message display component

### LoginForm.tsx
Authentication form for OpenRouter login

## Database Schema (Simplified)
```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Messages table
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## API Routes
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/messages` - Get messages
- `POST /api/messages` - Send message

## Implementation Plan
1. Setup Next.js project with TypeScript and Tailwind
2. Create basic UI components
3. Implement OpenRouter authentication
4. Add message functionality
5. Style and polish UI
