"use client"

import { useChat } from 'ai/react'
import { useEffect, useRef } from 'react'
import Message from './Message'
import ChatInput from './ChatInput'

const suggestedQuestions = [
  "What are you working on these days?",
  "Tell me about your AI experience",
  "What's the 'silas velocity'?",
  "How did you build Mystica?",
  "What's your development philosophy?",
  "Tell me about Co-GM",
]

export default function ChatInterface() {
  const { messages, input, handleInputChange, append, setInput, isLoading } = useChat({
    api: '/api/chat',
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
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

  const handleQuestionClick = (question: string) => {
    append({ role: 'user', content: question })
  }

  return (
    <div className="flex flex-col overflow-hidden" style={{ height: 'calc(100vh - 60px)' }}>
      {/* Messages area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto flex flex-col"
      >
        <div className="flex flex-col gap-6 px-8 py-12 max-w-[900px] w-full mx-auto min-h-min">
        {/* Quick Questions - Only show when no messages */}
        {messages.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="text-left p-4 bg-surface hover:bg-opacity-80 border-[3px] border-black transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer"
                style={{ boxShadow: "var(--shadow-md)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    {question}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {messages.map((message) => {
          // Handle tool invocations inside assistant messages
          if (message.role === 'assistant') {
            const toolInvocations = message.toolInvocations || []

            return (
              <div key={message.id} className="flex flex-col gap-2">
                {/* Show tool invocations */}
                {toolInvocations.length > 0 && (
                  <div className="flex flex-col max-w-[70%] self-start gap-2">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-70">
                      AI ASSISTANT
                    </div>
                    {toolInvocations.map((tool, index) => (
                      <div
                        key={index}
                        className="p-3 bg-surface border-[3px] border-black text-xs"
                        style={{ boxShadow: 'var(--shadow-sm)' }}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-primary ${
                            tool.state === 'result' ? '' : 'animate-pulse'
                          }`} />
                          <span className="text-white font-medium">
                            {tool.state === 'call' && 'Thinking...'}
                            {tool.state === 'result' && `Used ${tool.toolName}`}
                            {tool.state === 'partial-call' && `Using ${tool.toolName}...`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Show message content if present */}
                {message.content && (
                  <Message
                    role={message.role}
                    content={message.content}
                  />
                )}
              </div>
            )
          }

          // Only render user messages normally
          if (message.role === 'user') {
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
