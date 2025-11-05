import React from 'react';
import { cn } from '@/lib/utils';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const Message: React.FC<MessageProps> = ({ role, content }) => {
  const isUser = role === 'user';
  const label = isUser ? 'YOU' : 'AI ASSISTANT';

  return (
    <div
      className={cn(
        'flex flex-col max-w-[70%]',
        isUser ? 'self-end' : 'self-start'
      )}
      style={{ animation: 'messageSlideIn 0.3s ease-out' }}
    >
      <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-70">
        {label}
      </div>
      <div
        className={cn(
          'p-6 text-base leading-relaxed border-[3px] border-black transition-all duration-150 ease-in-out hover:translate-x-[3px] hover:translate-y-[3px]',
          isUser
            ? 'bg-primary text-black'
            : 'bg-surface text-white'
        )}
        style={{ boxShadow: "var(--shadow-md)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-sm)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-md)"
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
