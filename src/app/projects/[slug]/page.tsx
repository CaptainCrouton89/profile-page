import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getProjectSlugs } from '@/lib/markdown';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div
      style={{
        maxWidth: '900px',
        padding: '2rem',
        margin: '0 auto',
      }}
    >
      <Link
        href="/projects"
        style={{
          display: 'inline-block',
          marginBottom: 'var(--space-xl)',
          color: 'var(--color-gray-light)',
          textDecoration: 'none',
          fontSize: 'var(--font-size-base)',
        }}
      >
        ? Back to Projects
      </Link>

      <header style={{ marginBottom: 'var(--space-2xl)' }}>
        <h1
          style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: 'var(--font-weight-black)',
            marginBottom: 'var(--space-md)',
            color: 'var(--color-white)',
          }}
        >
          {project.title}
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-lg)',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: 'var(--font-size-base)',
              letterSpacing: '0.05em',
            }}
          >
            {project.subtitle}
          </span>
          <span
            style={{
              color: 'var(--color-gray-light)',
              fontSize: 'var(--font-size-base)',
            }}
          >
            {project.year}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-lg)',
          }}
        >
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {(project.github || project.demo) && (
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-md)',
              flexWrap: 'wrap',
            }}
          >
            {project.github && (
              <Button asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
            )}
            {project.demo && (
              <Button asChild>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  Demo
                </Link>
              </Button>
            )}
          </div>
        )}
      </header>

      <div
        style={{
          color: 'var(--color-gray-light)',
          lineHeight: '1.6',
        }}
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </div>
  );
}
