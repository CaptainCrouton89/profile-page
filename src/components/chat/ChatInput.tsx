"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
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
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
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
    <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center z-50 p-4 bg-background">
      <div className="w-full max-w-[900px] flex items-center gap-4">
        <Input
          ref={inputRef}
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
