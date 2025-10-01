# Next.js Chat App with OpenRouter AI

A modern chat application built with Next.js, TypeScript, and Tailwind CSS, featuring real AI responses powered by OpenRouter.

## ✨ Features

- **Real AI Chat**: Powered by OpenRouter with free models
- **Authentication**: Simple login/register system
- **Real-time Interface**: Modern chat UI with message history
- **Responsive Design**: Mobile-friendly interface
- **TypeScript**: Full type safety
- **Error Handling**: Graceful error handling and user feedback

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- OpenRouter API key (free)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd fancychatapp-interview
   npm install
   ```

2. **Set up OpenRouter API:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenRouter API key:
   ```
   NEXT_PUBLIC_OPENROUTER_API_KEY=your_actual_api_key_here
   NEXT_PUBLIC_OPENROUTER_MODEL=qwen/qwen3-14b:free
   ```

3. **Get your OpenRouter API key:**
   - Go to [OpenRouter.ai](https://openrouter.ai/)
   - Sign up for a free account
   - Get your API key from [API Keys](https://openrouter.ai/keys)

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Detailed Setup

For a complete setup guide, see [SETUP.md](./SETUP.md).

## 🎯 Available Free Models

The app supports several free OpenRouter models:

- **qwen/qwen3-14b:free** - 14B parameters, balanced performance
- **qwen/qwen3-30b-a3b:free** - 30B parameters, advanced reasoning  
- **qwen/qwen3-4b:free** - 4B parameters, fast responses
- **openrouter/cypher-alpha:free** - OpenRouter's own model

Change the model in `.env.local` to try different options.

## 🏗️ Project Structure

```
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
```

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenRouter API
- **Icons**: Lucide React
- **State Management**: React hooks

## 🎨 Key Features

### Authentication
- Simple email/password login
- User registration
- Session management
- Route protection

### Chat Interface
- Real-time message display
- Conversation history
- AI-powered responses
- Error handling
- Loading states

### OpenRouter Integration
- Multiple free model support
- Conversation context
- Error handling
- API key validation

## 🚀 Usage

1. **Register/Login**: Create an account or sign in
2. **Start Chatting**: Send messages and get AI responses
3. **Conversation History**: Your chat history is maintained during the session
4. **Logout**: Use the logout button to sign out

## 🛠️ Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx tsc --noEmit` - Check TypeScript types

## 🔒 Security

- API keys are stored in environment variables
- `.env.local` is gitignored
- Input validation and sanitization
- Error handling prevents information leakage

## 🐛 Troubleshooting

### Common Issues

1. **"API key not configured" error**
   - Make sure you've added your API key to `.env.local`
   - Restart the development server

2. **"OpenRouter API error" messages**
   - Check your API key is valid
   - Verify your internet connection
   - Try a different free model

3. **No AI responses**
   - Check browser console for errors
   - Verify the model name in `.env.local`

## �� Future Enhancements

- [ ] Streaming responses
- [ ] Message persistence
- [ ] File upload support
- [ ] User profiles
- [ ] Multiple chat rooms
- [ ] Message reactions
- [ ] Typing indicators

## �� License

MIT License - feel free to use this project for learning and development!

## 🤝 Contributing

This is a learning project, but feel free to:
- Report issues
- Suggest improvements
- Fork and experiment
- Share your modifications

---

**Happy Chatting!** 🚀

Built with ❤️ using Next.js and OpenRouter
