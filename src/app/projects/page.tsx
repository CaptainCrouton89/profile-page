import { getProjects } from '@/lib/markdown'
import ProjectGrid from '@/components/projects/ProjectGrid'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div
      style={{
        maxWidth: '1200px',
        padding: '2rem',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        Projects
      </h1>
      <ProjectGrid projects={projects} />
    </div>
  )
}
