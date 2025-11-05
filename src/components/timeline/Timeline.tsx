import { TimelineEntry } from '@/lib/markdown'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.css'

interface TimelineProps {
  entries: TimelineEntry[]
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div
      style={{
        position: 'relative',
        padding: '3rem 0',
      }}
    >
      {/* Vertical center line */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '3px',
          height: '100%',
          background: '#000000',
        }}
        className={styles.timelineLine}
      />

      {/* Timeline items */}
      {entries.map((entry, index) => {
        const isEven = index % 2 === 0
        const position = isEven ? 'right' : 'left'

        return (
          <div
            key={entry.id}
            style={{
              display: 'flex',
              justifyContent: isEven ? 'flex-end' : 'flex-start',
              paddingRight: isEven ? '50%' : 0,
              paddingLeft: isEven ? 0 : '50%',
              position: 'relative',
              marginBottom: '3rem',
            }}
            className={styles.timelineItemWrapper}
          >
            {/* Orange dot */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '16px',
                background: '#FF6B00',
                border: '3px solid #000000',
                boxShadow: '3px 3px 0 #000000',
              }}
              className={styles.timelineDot}
            />

            {/* Timeline item content */}
            <TimelineItem
              date={entry.date}
              title={entry.title}
              description={entry.description}
              position={position}
              links={entry.links}
            />
          </div>
        )
      })}
    </div>
  )
}
