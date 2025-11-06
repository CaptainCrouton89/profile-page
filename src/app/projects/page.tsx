import ProjectCard from "@/components/projects/ProjectCard"
import { projectListings } from "@/data/project-listings"

export default function ProjectsPage() {
  const projects = projectListings

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--space-3xl) var(--space-xl)",
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: "var(--space-3xl)",
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
          PROJECTS
        </h1>
        <p
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-gray-light)",
            lineHeight: "1.6",
          }}
        >
          The stuff I've built that I'm most proud of
        </p>
      </div>

      {/* Project List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2xl)",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </main>
  )
}
