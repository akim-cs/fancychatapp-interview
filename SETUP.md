# OpenRouter Setup Guide

This guide will help you set up OpenRouter integration for real AI responses in your chat app.

## Step 1: Create OpenRouter Account

1. Go to [OpenRouter.ai](https://openrouter.ai/)
2. Click "Sign Up" and create your account
3. Verify your email address

## Step 2: Get Your API Key

1. After logging in, go to [API Keys](https://openrouter.ai/keys)
2. Click "Create Key"
3. Give your key a name (e.g., "Chat App")
4. Copy the generated API key

## Step 3: Configure Your App

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and replace `your_openrouter_api_key_here` with your actual API key:
   ```
   NEXT_PUBLIC_OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_OPENROUTER_MODEL=qwen/qwen3-14b:free
   ```

## Step 4: Available Free Models

The app is configured to use free models. Here are some options:

- `qwen/qwen3-14b:free` - 14B parameter model, good for general chat
- `qwen/qwen3-30b-a3b:free` - 30B parameter model, better reasoning
- `qwen/qwen3-4b:free` - 4B parameter model, faster responses
- `openrouter/cypher-alpha:free` - OpenRouter's own model

You can change the model in `.env.local` by updating `NEXT_PUBLIC_OPENROUTER_MODEL`.

## Step 5: Test Your Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000`
3. Login/register and start chatting
4. You should now get real AI responses!

## Troubleshooting

### "OpenRouter API key not configured" Error
- Make sure you've created `.env.local` with your API key
- Restart the development server after adding the API key
- Check that the API key is correct

### "OpenRouter API error" Messages
- Verify your API key is valid at [OpenRouter Keys](https://openrouter.ai/keys)
- Check your internet connection
- Make sure you have credits (free models should work without credits)

### No AI Responses
- Check the browser console for error messages
- Verify the model name is correct
- Try a different free model

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- API keys are only used on the client side for this demo app
- In production, you'd want to use server-side API calls

## Next Steps

Once you have OpenRouter working, you can:
- Try different models
- Adjust the system prompt in `src/lib/openrouter.ts`
- Add conversation memory
- Implement streaming responses
- Add more advanced features

Happy chatting! 🚀
