"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  disabled?: boolean
  placeholder?: string
}

function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
  placeholder = "Type your message...",
}: ChatInputProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (value.trim() && !disabled) {
        onSubmit()
      }
    }
  }

  const handleSubmit = () => {
    if (value.trim() && !disabled) {
      onSubmit()
    }
  }

  const isSubmitDisabled = !value.trim() || disabled

  return (
    <div className="sticky bottom-0 w-full flex justify-center z-50 bg-background border-t-[3px] border-black p-8">
      <div className="w-full max-w-[900px] flex items-end gap-4">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1"
        />
        <Button
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
          className="shrink-0"
        >
          SEND
        </Button>
      </div>
    </div>
  )
}

export default ChatInput
