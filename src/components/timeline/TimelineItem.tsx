'use client'

interface TimelineItemProps {
  date: string
  title: string
  description: string
  position: 'left' | 'right'
}

export default function TimelineItem({
  date,
  title,
  description,
  position,
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
        }}
      >
        {description}
      </p>
    </div>
  )
}
