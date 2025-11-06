"use client"

import Link from "next/link"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  metrics?: string[]
  tags: string[]
  slug: string
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  metrics = [],
  tags,
  slug,
}: ProjectCardProps) {
  return (
    <div
      className="transition-transform duration-150"
      style={{
        border: "var(--border-width) solid var(--color-black)",
        boxShadow: "6px 6px 0 var(--color-black)",
        padding: "var(--space-xl)",
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
      {/* Title and View Case Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "var(--space-md)",
          marginBottom: "var(--space-sm)",
        }}
      >
        <h3
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-2xl)",
            color: "var(--color-white)",
            flex: 1,
          }}
        >
          {title}
        </h3>
        <Link
          href={`/projects/${slug}`}
          className="uppercase font-bold transition-all duration-150 inline-block"
          style={{
            fontSize: "var(--font-size-sm)",
            padding: "var(--space-sm) var(--space-md)",
            background: "var(--color-white)",
            color: "var(--color-black)",
            border: "var(--border-width) solid var(--color-black)",
            boxShadow: "4px 4px 0 var(--color-black)",
            textDecoration: "none",
            whiteSpace: "nowrap",
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
          View Case →
        </Link>
      </div>

      {/* Subtitle */}
      <p
        className="uppercase"
        style={{
          fontSize: "var(--font-size-md)",
          color: "var(--color-gray-light)",
          marginBottom: "var(--space-lg)",
          fontWeight: "bold",
        }}
      >
        {subtitle}
      </p>

      {/* Metrics Row */}
      {metrics.length > 0 && (
        <div
          style={{
            fontSize: "var(--font-size-sm)",
            color: "var(--color-white)",
            fontWeight: "bold",
            marginBottom: "var(--space-md)",
            borderTop: "2px solid var(--color-gray-dark)",
            borderBottom: "2px solid var(--color-gray-dark)",
            padding: "var(--space-sm) 0",
          }}
        >
          {metrics.join(" | ")}
        </div>
      )}

      {/* Description */}
      <p
        style={{
          fontSize: "var(--font-size-md)",
          color: "var(--color-white)",
          lineHeight: "1.6",
          marginBottom: "var(--space-lg)",
        }}
      >
        {description}
      </p>

      {/* Tech Badges */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-sm)",
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="uppercase"
            style={{
              fontSize: "var(--font-size-xs)",
              padding: "var(--space-xs) var(--space-sm)",
              background: "var(--color-primary)",
              color: "var(--color-black)",
              border: "2px solid var(--color-black)",
              fontWeight: "bold",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
