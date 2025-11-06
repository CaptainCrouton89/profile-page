"use client"

interface TechBadgeProps {
  tech: string
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span
      className="uppercase transition-all duration-150 inline-block"
      style={{
        fontSize: "var(--font-size-xs)",
        padding: "var(--space-xs) var(--space-sm)",
        background: "transparent",
        border: "2px solid var(--color-gray-mid)",
        color: "var(--color-white)",
        fontWeight: "bold",
        boxShadow: "2px 2px 0 var(--color-gray-dark)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(1px, 1px)"
        e.currentTarget.style.boxShadow = "1px 1px 0 var(--color-gray-dark)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0, 0)"
        e.currentTarget.style.boxShadow = "2px 2px 0 var(--color-gray-dark)"
      }}
    >
      {tech}
    </span>
  )
}
