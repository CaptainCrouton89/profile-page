import { getAboutContent, getTimeline } from '@/lib/markdown'
import Timeline from '@/components/timeline/Timeline'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default async function AboutPage() {
  const aboutContent = await getAboutContent()
  const timelineEntries = await getTimeline()

  if (!aboutContent) {
    return (
      <div className="container mx-auto max-w-[1200px] px-8 py-8">
        <p>About content not found.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-[1200px] px-8 py-8">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start bg-[var(--color-surface)] border-[3px] border-black p-12 shadow-[8px_8px_0_var(--color-black)] mb-16">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/profile.png"
            alt={aboutContent.name}
            width={200}
            height={200}
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover border-[3px] border-black shadow-[6px_6px_0_var(--color-black)]"
          />
        </div>

        {/* Profile Content */}
        <div className="flex-1">
          <h1 className="text-[2.5rem] font-black mb-2 leading-tight">
            {aboutContent.name}
          </h1>
          <div className="text-lg text-[var(--color-primary)] font-bold uppercase tracking-[0.1em] mb-6">
            {aboutContent.title}
          </div>
          <p className="text-base leading-relaxed text-[var(--color-gray-light)] mb-8">
            {aboutContent.bio}
          </p>

          {/* Profile Links */}
          <div className="flex gap-4 flex-wrap">
            {aboutContent.github && (
              <Button asChild variant="ghost" size="sm">
                <a
                  href={aboutContent.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            )}
            {aboutContent.linkedin && (
              <Button asChild variant="ghost" size="sm">
                <a
                  href={aboutContent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            )}
            {aboutContent.email && (
              <Button asChild variant="ghost" size="sm">
                <a href={`mailto:${aboutContent.email}`}>
                  Email
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Markdown Content */}
      {aboutContent.content && (
        <div
          className="prose prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: aboutContent.content }}
        />
      )}

      {/* Timeline */}
      {timelineEntries.length > 0 && (
        <div className="mt-16">
          <Timeline entries={timelineEntries} />
        </div>
      )}
    </div>
  )
}
