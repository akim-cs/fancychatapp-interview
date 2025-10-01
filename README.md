A modern chat application built with Next.js, TypeScript, and Tailwind CSS, featuring real AI responses powered by OpenRouter.
Need:
- Node.js 18+ 
- OpenRouter API key (free)

npm run dev to start on localhost

src/
├── app/
│   ├── login/          # Authentication page
│   ├── chat/           # Main chat interface
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home/redirect page
├── components/
│   ├── ChatBox.tsx     # Main chat container
│   ├── MessageList.tsx # Message display with auto-scroll
│   ├── MessageInput.tsx # Message input with send functionality
│   ├── MessageBubble.tsx # Individual message component
│   └── LoginForm.tsx   # Authentication form
├── lib/
│   ├── auth.ts         # Authentication system
│   └── openrouter.ts   # OpenRouter API integration
└── types/
    └── chat.ts         # TypeScript type definitions


Authentication:
- Simple email/password login
- User registration
- Session management
- Route protection

Chat Interface:
- Real-time message display
- Conversation history
- AI-powered responses
- Error handling
- Loading states

Future plans or enhancements to make:
backend hookup storage hookup for data consistency for user profile information and chat history
