import { Project } from "@/lib/markdown"
import ProjectCard from "./ProjectCard"

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "var(--space-2xl)",
          color: "var(--color-gray-light)",
        }}
      >
        <p>No projects found.</p>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]"
      style={{
        gap: "var(--space-2xl)",
      }}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          tags={project.tags}
          slug={project.slug}
        />
      ))}
    </div>
  )
}
