"use client"

import { CodeBlock } from "./CodeBlock"

interface MarkdownContentProps {
  content: string
  style?: React.CSSProperties
}

export function MarkdownContent({ content, style }: MarkdownContentProps) {
  // Parse content for markdown code blocks (```language\ncode\n```)
  const parseContent = (text: string) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g
    const parts: Array<{ type: "text" | "code"; content: string; language?: string }> = []
    let lastIndex = 0
    let match

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          content: text.slice(lastIndex, match.index),
        })
      }

      // Add code block
      const language = match[1] ? match[1] : "text"
      parts.push({
        type: "code",
        content: match[2].trim(),
        language,
      })

      lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({
        type: "text",
        content: text.slice(lastIndex),
      })
    }

    return parts.length > 0 ? parts : [{ type: "text" as const, content: text }]
  }

  const parts = parseContent(content)

  return (
    <div>
      {parts.map((part, index) => {
        if (part.type === "code") {
          return <CodeBlock key={index} code={part.content} language={part.language} />
        }
        return (
          <p
            key={index}
            style={{
              fontSize: "var(--font-size-md)",
              color: "var(--color-white)",
              lineHeight: "1.6",
              ...style,
            }}
          >
            {part.content}
          </p>
        )
      })}
    </div>
  )
}
