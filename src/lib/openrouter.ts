// OpenRouter API integration
interface OpenRouterMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export const openrouter = {
  // API configuration
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '',
  model: process.env.NEXT_PUBLIC_OPENROUTER_MODEL || 'qwen/qwen3-14b:free',
  baseUrl: 'https://openrouter.ai/api/v1',

  // Check if OpenRouter is properly configured
  isConfigured(): boolean {
    return !!this.apiKey && this.apiKey !== 'your_openrouter_api_key_here';
  },

  // Send a message to OpenRouter AI
  async sendMessage(message: string, conversationHistory: OpenRouterMessage[] = []): Promise<string> {
    if (!this.isConfigured()) {
      throw new Error('OpenRouter API key not configured. Please add your API key to .env.local');
    }

    try {
      const messages: OpenRouterMessage[] = [
        {
          role: 'system',
          content: 'You are a helpful AI assistant. Respond in a friendly, conversational manner. Keep responses concise but informative.'
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ];

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Next.js Chat App'
        },
        body: JSON.stringify({
          model: this.model,
          messages: messages,
          max_tokens: 500,
          temperature: 0.7,
          stream: false
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`OpenRouter API error: ${response.status} - ${errorData.error?.message || response.statusText}`);
      }

      const data: OpenRouterResponse = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No response from OpenRouter API');
      }

      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('OpenRouter API error:', error);
      throw error;
    }
  },

  // Get available free models (for reference)
  getFreeModels(): string[] {
    return [
      'qwen/qwen3-14b:free',
      'qwen/qwen3-30b-a3b:free', 
      'qwen/qwen3-4b:free',
      'openrouter/cypher-alpha:free'
    ];
  },

  // Validate API key
  async validateApiKey(): Promise<boolean> {
    if (!this.isConfigured()) {
      return false;
    }

    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        }
      });
      return response.ok;
    } catch {
      return false;
    }
  }
};
