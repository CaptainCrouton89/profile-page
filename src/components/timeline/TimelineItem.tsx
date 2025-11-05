'use client'

import Link from 'next/link'

interface TimelineItemProps {
  date: string
  title: string
  description: string
  position: 'left' | 'right'
  links?: Array<{
    label: string
    href: string
  }>
}

export default function TimelineItem({
  date,
  title,
  description,
  position,
  links,
}: TimelineItemProps) {
  return (
    <div
      style={{
        background: '#1A1A1A',
        border: '3px solid var(--color-black)',
        boxShadow: '6px 6px 0 var(--color-black)',
        padding: 'var(--space-xl)',
        maxWidth: '450px',
        marginRight: position === 'left' ? 'var(--space-xl)' : 0,
        marginLeft: position === 'right' ? 'var(--space-xl)' : 0,
        transition: 'all 0.15s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(3px, 3px)'
        e.currentTarget.style.boxShadow = '3px 3px 0 var(--color-black)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)'
        e.currentTarget.style.boxShadow = '6px 6px 0 var(--color-black)'
      }}
    >
      <div
        style={{
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 'var(--space-sm)',
        }}
      >
        {date}
      </div>
      <h3
        style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-black)',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-white)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-gray-light)',
          lineHeight: 1.6,
          margin: 0,
          marginBottom: links && links.length > 0 ? 'var(--space-md)' : 0,
        }}
      >
        {description}
      </p>

      {links && links.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-sm)',
            flexWrap: 'wrap',
            marginTop: 'var(--space-md)',
          }}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                padding: 'var(--space-xs) var(--space-sm)',
                border: '2px solid var(--color-primary)',
                background: 'transparent',
                transition: 'all 0.15s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-primary)'
                e.currentTarget.style.color = 'var(--color-black)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--color-primary)'
              }}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
