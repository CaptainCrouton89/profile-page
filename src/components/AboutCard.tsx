"use client"

interface AboutCardProps {
  id: string
  icon: string
  title: string
  previewContent: React.ReactNode
  fullContent: React.ReactNode
  isExpanded: boolean
  onToggle: () => void
  className?: string
  style?: React.CSSProperties
}

export function AboutCard({
  id,
  icon,
  title,
  previewContent,
  fullContent,
  isExpanded,
  onToggle,
  className = "",
  style = {},
}: AboutCardProps) {
  return (
    <div
      onClick={onToggle}
      className={`about-card transition-all duration-150 cursor-pointer ${className}`}
      style={{
        border: isExpanded
          ? "var(--border-width) solid var(--color-primary)"
          : "var(--border-width) solid var(--color-black)",
        boxShadow: isExpanded
          ? "6px 6px 0 var(--color-primary)"
          : "6px 6px 0 var(--color-black)",
        padding: "var(--space-xl)",
        background: "var(--color-surface)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.transform = "translate(3px, 3px)"
          e.currentTarget.style.boxShadow = "3px 3px 0 var(--color-black)"
        }
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.transform = "translate(0, 0)"
          e.currentTarget.style.boxShadow = "6px 6px 0 var(--color-black)"
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-sm)",
          marginBottom: "var(--space-md)",
        }}
      >
        <span style={{ fontSize: "var(--font-size-2xl)" }}>{icon}</span>
        <h3
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-white)",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Content */}
      <div
        style={{
          maxHeight: isExpanded ? "2000px" : "150px",
          transition: "max-height 0.3s ease-out",
          overflow: "hidden",
        }}
      >
        {isExpanded ? fullContent : previewContent}
      </div>

      {/* Expand/Collapse Indicator */}
      <div
        className="uppercase"
        style={{
          fontSize: "var(--font-size-xs)",
          color: isExpanded ? "var(--color-primary)" : "var(--color-gray-mid)",
          marginTop: "var(--space-md)",
          opacity: 0.7,
          fontWeight: "bold",
          letterSpacing: "0.1em",
        }}
      >
        {isExpanded ? "Click to collapse ↑" : "Click to expand ↓"}
      </div>
    </div>
  )
}
