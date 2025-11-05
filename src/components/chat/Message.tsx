import React from 'react';
import { cn } from '@/lib/utils';
import { marked } from 'marked';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const Message: React.FC<MessageProps> = ({ role, content }) => {
  const isUser = role === 'user';
  const label = isUser ? 'YOU' : 'SILAS';

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
            : 'text-white'
        )}
        style={{
          boxShadow: "var(--shadow-md)",
          ...(!isUser && { backgroundColor: 'var(--color-gray-dark)' })
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-sm)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-md)"
        }}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : (
          <div
            className="prose prose-invert prose-sm max-w-none [&>p]:mb-4 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-1 [&_pre]:whitespace-pre-wrap [&_code]:break-words [&_a]:text-primary [&_a]:underline hover:[&_a]:opacity-80"
            dangerouslySetInnerHTML={{
              __html: marked(content, {
                breaks: true,
                gfm: true,
              }),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Message;
