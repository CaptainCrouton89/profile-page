"use client"

import { useState } from "react"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = "text", className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      },
      (err: Error) => {
        console.error("Failed to copy code to clipboard:", err)
        alert(`Failed to copy: ${err.message}`)
      }
    )
  }

  return (
    <div
      className={`relative ${className}`}
      style={{
        border: "var(--border-width) solid var(--color-black)",
        boxShadow: "4px 4px 0 var(--color-black)",
        background: "var(--color-black)",
        marginBottom: "var(--space-md)",
      }}
    >
      {/* Language label and copy button header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--space-xs) var(--space-sm)",
          borderBottom: "var(--border-width) solid var(--color-gray-mid)",
          background: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <span
          className="uppercase"
          style={{
            fontSize: "var(--font-size-xs)",
            color: "var(--color-gray-mid)",
            fontWeight: "bold",
          }}
        >
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="uppercase font-bold transition-all duration-150"
          style={{
            fontSize: "var(--font-size-xs)",
            padding: "var(--space-xs) var(--space-sm)",
            background: copied ? "var(--color-primary)" : "var(--color-white)",
            color: "var(--color-black)",
            border: "2px solid var(--color-black)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.currentTarget.style.background = "var(--color-primary)"
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.currentTarget.style.background = "var(--color-white)"
            }
          }}
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>

      {/* Code content */}
      <pre
        style={{
          margin: 0,
          padding: "var(--space-md)",
          overflow: "auto",
          fontSize: "var(--font-size-sm)",
          lineHeight: "1.5",
          color: "var(--color-white)",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
