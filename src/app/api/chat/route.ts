import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { systemPrompt } from '@/lib/ai/prompts';
import { tools } from '@/lib/ai/tools';

export const maxDuration = 30;

const messageHistory = new Map<string, number>();
const RATE_LIMIT = 20;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const userMessages = messageHistory.get(identifier);

  if (!userMessages) {
    messageHistory.set(identifier, 1);
    return true;
  }

  if (userMessages >= RATE_LIMIT) {
    return false;
  }

  messageHistory.set(identifier, userMessages + 1);
  return true;
}

function cleanupRateLimits() {
  messageHistory.clear();
}

setInterval(cleanupRateLimits, RATE_LIMIT_WINDOW);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid request body', { status: 400 });
    }

    const identifier = req.headers.get('x-forwarded-for') || 'anonymous';

    if (!checkRateLimit(identifier)) {
      return new Response('Rate limit exceeded. Please try again in a few minutes.', {
        status: 429,
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const result = await streamText({
      model: openai('gpt-4.1-mini'),
      system: systemPrompt,
      messages,
      tools,
      maxSteps: 5,
    });

    return result.toAIStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
