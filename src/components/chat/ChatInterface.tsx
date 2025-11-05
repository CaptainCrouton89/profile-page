"use client"

import { useChat } from 'ai/react'
import { useEffect, useRef } from 'react'
import Message from './Message'
import ChatInput from './ChatInput'

export default function ChatInterface() {
  const { messages, input, handleInputChange, append, setInput, isLoading } = useChat({
    api: '/api/chat',
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // Wrapper for ChatInput's onSubmit
  const onSubmit = () => {
    const trimmedInput = input.trim()
    if (trimmedInput && !isLoading) {
      append({
        role: 'user',
        content: trimmedInput,
      })
      setInput('')
    }
  }

  return (
    <div className="flex flex-col overflow-hidden" style={{ height: 'calc(100vh - 60px)' }}>
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        <div className="flex flex-col gap-6 px-8 py-12 max-w-[900px] w-full mx-auto min-h-min">
        {messages.map((message) => {
          // Handle tool invocations
          if (message.toolInvocations && message.toolInvocations.length > 0) {
            return (
              <div key={message.id} className="flex flex-col max-w-[70%] self-start">
                <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-70">
                  AI ASSISTANT
                </div>
                <div
                  className="p-6 text-base leading-relaxed bg-surface text-white border-[3px] border-black"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                >
                  Tool calling...
                </div>
              </div>
            )
          }

          // Only render user and assistant messages
          if (message.role === 'user' || message.role === 'assistant') {
            return (
              <Message
                key={message.id}
                role={message.role}
                content={message.content}
              />
            )
          }

          return null
        })}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex flex-col max-w-[70%] self-start">
            <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-70">
              AI ASSISTANT
            </div>
            <div
              className="p-6 text-base leading-relaxed bg-surface text-white border-[3px] border-black flex items-center gap-2"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <div
                className="inline-block w-4 h-4 border-[3px] border-primary border-t-transparent animate-spin"
                style={{ animation: 'spin 0.6s linear infinite' }}
              />
              <span>Thinking...</span>
            </div>
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Fixed input at bottom */}
      <ChatInput
        value={input}
        onChange={(value) => setInput(value)}
        onSubmit={onSubmit}
        disabled={isLoading}
        placeholder="Ask me anything..."
      />
    </div>
  )
}
