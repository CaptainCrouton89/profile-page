"use client"

interface ClientWorkCardProps {
  title: string
  subtitle?: string
  timeline: string
  location?: string
  description: string
  metrics?: string[]
  techStack: string[]
  link?: {
    href: string
    label: string
  }
  featured?: boolean
}

export function ClientWorkCard({
  title,
  subtitle,
  timeline,
  location,
  description,
  metrics = [],
  techStack,
  link,
  featured = false,
}: ClientWorkCardProps) {
  return (
    <div
      className="transition-transform duration-150"
      style={{
        border: "var(--border-width) solid var(--color-black)",
        boxShadow: "6px 6px 0 var(--color-black)",
        padding: featured ? "var(--space-xl)" : "var(--space-lg)",
        background: "var(--color-surface)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(3px, 3px)"
        e.currentTarget.style.boxShadow = "3px 3px 0 var(--color-black)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0, 0)"
        e.currentTarget.style.boxShadow = "6px 6px 0 var(--color-black)"
      }}
    >
      {/* Title and Timeline */}
      <div
        className="flex flex-col md:flex-row md:justify-between md:items-start"
        style={{ gap: "var(--space-sm)", marginBottom: "var(--space-md)" }}
      >
        <div>
          <h3
            className="uppercase font-black"
            style={{
              fontSize: "var(--font-size-2xl)",
              color: "var(--color-white)",
              marginBottom: subtitle ? "var(--space-xs)" : "0",
            }}
          >
            {title}
          </h3>
          {subtitle && (
            <p
              className="uppercase"
              style={{
                fontSize: "var(--font-size-sm)",
                color: "var(--color-gray-light)",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div
          className="text-right"
          style={{
            fontSize: "var(--font-size-sm)",
            color: "var(--color-gray-mid)",
          }}
        >
          <div>{timeline}</div>
          {location && <div>{location}</div>}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "var(--font-size-md)",
          color: "var(--color-white)",
          lineHeight: "1.6",
          marginBottom: metrics.length > 0 ? "var(--space-lg)" : "var(--space-md)",
        }}
      >
        {description}
      </p>

      {/* Metrics */}
      {metrics.length > 0 && (
        <div
          className="flex flex-wrap"
          style={{
            gap: "var(--space-md)",
            marginBottom: "var(--space-md)",
          }}
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              style={{
                fontSize: "var(--font-size-sm)",
                color: "var(--color-primary)",
                fontWeight: "bold",
              }}
            >
              {metric}
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack */}
      <div
        className="flex flex-wrap"
        style={{
          gap: "var(--space-sm)",
          marginBottom: link ? "var(--space-lg)" : "0",
        }}
      >
        {techStack.map((tech) => (
          <span
            key={tech}
            className="uppercase"
            style={{
              fontSize: "var(--font-size-xs)",
              padding: "var(--space-xs) var(--space-sm)",
              background: "transparent",
              border: "2px solid var(--color-gray-mid)",
              color: "var(--color-white)",
              fontWeight: "bold",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link.href}
          className="inline-block uppercase font-bold transition-all duration-150"
          style={{
            fontSize: "var(--font-size-sm)",
            padding: "var(--space-sm) var(--space-md)",
            background: "var(--color-white)",
            color: "var(--color-black)",
            border: "var(--border-width) solid var(--color-black)",
            boxShadow: "4px 4px 0 var(--color-black)",
            marginTop: "var(--space-md)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(2px, 2px)"
            e.currentTarget.style.boxShadow = "2px 2px 0 var(--color-black)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)"
            e.currentTarget.style.boxShadow = "4px 4px 0 var(--color-black)"
          }}
        >
          {link.label} →
        </a>
      )}
    </div>
  )
}
