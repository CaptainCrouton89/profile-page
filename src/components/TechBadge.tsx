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
        border: "2px solid var(--color-primary)",
        color: "var(--color-white)",
        fontWeight: "bold",
        boxShadow: "3px 3px 0 var(--color-primary)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(1.5px, 1.5px)"
        e.currentTarget.style.boxShadow = "1.5px 1.5px 0 var(--color-primary)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0, 0)"
        e.currentTarget.style.boxShadow = "3px 3px 0 var(--color-primary)"
      }}
    >
      {tech}
    </span>
  )
}
