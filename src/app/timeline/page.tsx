import Timeline from "@/components/timeline/Timeline"
import { timelineEntries } from "@/data/timeline"

export default function TimelinePage() {

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "var(--space-3xl) var(--space-xl)",
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: "var(--space-3xl)",
          textAlign: "center",
        }}
      >
        <h1
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-4xl)",
            color: "var(--color-white)",
            marginBottom: "var(--space-md)",
          }}
        >
          TIMELINE
        </h1>
        <p
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-gray-light)",
            lineHeight: "1.6",
          }}
        >
          My journey from Alaska to San Francisco
          <br />
          (and everywhere in between)
        </p>
      </div>

      {/* Timeline Component */}
      <Timeline entries={timelineEntries} />
    </main>
  )
}
