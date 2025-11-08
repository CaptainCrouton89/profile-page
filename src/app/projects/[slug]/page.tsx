"use client"

import { projects } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { use } from "react"
import { MarkdownContent } from "@/components/MarkdownContent"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

interface Challenge {
  title: string
  description: string
}

interface Feature {
  title: string
  description: string
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params)
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "var(--space-3xl) var(--space-xl)",
      }}
    >
      {/* Breadcrumb */}
      <Link
        href="/projects"
        className="transition-colors duration-150"
        style={{
          display: "inline-block",
          marginBottom: "var(--space-2xl)",
          color: "var(--color-primary)",
          textDecoration: "none",
          fontSize: "var(--font-size-sm)",
          fontWeight: "bold",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--color-white)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-primary)"
        }}
      >
        ← Back to Projects
      </Link>

      {/* Hero Image */}
      {project.heroImage && (
        <div
          style={{
            width: "100%",
            height: "450px",
            position: "relative",
            border: "var(--border-width) solid var(--color-black)",
            boxShadow: "6px 6px 0 var(--color-black)",
            marginBottom: "var(--space-2xl)",
            overflow: "hidden",
          }}
        >
          <Image
            src={project.heroImage}
            alt={`${project.title} preview`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}

      {/* Title and Metadata */}
      <div
        style={{
          border: "var(--border-width) solid var(--color-black)",
          boxShadow: "6px 6px 0 var(--color-black)",
          padding: "var(--space-xl)",
          background: "var(--color-surface)",
          marginBottom: "var(--space-2xl)",
        }}
      >
        <h1
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-4xl)",
            color: "var(--color-white)",
            marginBottom: "var(--space-xs)",
          }}
        >
          {project.title}
        </h1>
        <p
          className="uppercase"
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-primary)",
            marginBottom: "var(--space-lg)",
            fontWeight: "bold",
            letterSpacing: "0.05em",
          }}
        >
          {project.subtitle}
        </p>

        {/* Tech Stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-sm)",
            marginBottom: "var(--space-lg)",
          }}
        >
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
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
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-bold transition-all duration-150 inline-block"
              style={{
                fontSize: "var(--font-size-sm)",
                padding: "var(--space-sm) var(--space-md)",
                background: "var(--color-primary)",
                color: "var(--color-black)",
                border: "var(--border-width) solid var(--color-black)",
                boxShadow: "4px 4px 0 var(--color-black)",
                textDecoration: "none",
              }}
            >
              Visit Live Site
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-bold transition-all duration-150 inline-block"
              style={{
                fontSize: "var(--font-size-sm)",
                padding: "var(--space-sm) var(--space-md)",
                background: "var(--color-white)",
                color: "var(--color-black)",
                border: "var(--border-width) solid var(--color-black)",
                boxShadow: "4px 4px 0 var(--color-black)",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(2px, 2px)";
                e.currentTarget.style.boxShadow = "2px 2px 0 var(--color-black)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "4px 4px 0 var(--color-black)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translate(4px, 4px)";
                e.currentTarget.style.boxShadow = "0px 0px 0 var(--color-black)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translate(2px, 2px)";
                e.currentTarget.style.boxShadow = "2px 2px 0 var(--color-black)";
              }}
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {/* Magazine Layout: Two Column + Full-Width Breaks */}

      {/* The Story + Quick Stats Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "var(--space-3xl)",
        }}
      >
        {/* Left Column: The Story */}
        <div
          style={{
            border: "var(--border-width) solid var(--color-black)",
            boxShadow: "6px 6px 0 var(--color-black)",
            padding: "var(--space-xl)",
            background: "var(--color-surface)",
          }}
        >
          <h2
            className="uppercase font-black"
            style={{
              fontSize: "var(--font-size-2xl)",
              color: "var(--color-white)",
              marginBottom: "var(--space-md)",
              letterSpacing: "0.05em",
            }}
          >
            THE STORY
          </h2>
          <MarkdownContent content={project.story} />
        </div>

        {/* Right Column: Quick Stats */}
        <div>
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-lg)",
              background: "var(--color-surface)",
              position: "sticky",
              top: "var(--space-xl)",
            }}
          >
            <h2
              className="uppercase font-black"
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-white)",
                marginBottom: "var(--space-lg)",
                letterSpacing: "0.05em",
              }}
            >
              QUICK STATS
            </h2>
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} style={{ marginBottom: "var(--space-md)" }}>
                <div
                  className="uppercase"
                  style={{
                    fontSize: "var(--font-size-xs)",
                    color: "var(--color-gray-mid)",
                    marginBottom: "var(--space-xs)",
                    fontWeight: "bold",
                  }}
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-sm)",
                    color: "var(--color-white)",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Width Philosophy Break */}
      <div
        style={{
          border: "var(--border-width) solid var(--color-black)",
          boxShadow: "8px 8px 0 var(--color-black)",
          padding: "var(--space-xl)",
          background: "var(--color-surface)",
          marginTop: "var(--space-2xl)",
          marginBottom: "var(--space-2xl)",
          textAlign: "center",
        }}
      >
        <h2
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-primary)",
            marginBottom: "var(--space-md)",
            letterSpacing: "0.1em",
          }}
        >
          DEVELOPMENT INSIGHTS
        </h2>
        <p
          style={{
            fontSize: "var(--font-size-md)",
            color: "var(--color-white)",
            lineHeight: "1.7",
            fontStyle: "italic",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          "{project.philosophy}"
        </p>
      </div>

      {/* Challenges + Features/Impact Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "var(--space-3xl)",
        }}
      >
        {/* Left Column: Technical Challenges */}
        <div
          style={{
            border: "var(--border-width) solid var(--color-black)",
            boxShadow: "6px 6px 0 var(--color-black)",
            padding: "var(--space-xl)",
            background: "var(--color-surface)",
          }}
        >
          <h2
            className="uppercase font-black"
            style={{
              fontSize: "var(--font-size-2xl)",
              color: "var(--color-white)",
              marginBottom: "var(--space-lg)",
              letterSpacing: "0.05em",
            }}
          >
            TECHNICAL CHALLENGES
          </h2>
          {project.challenges.map((challenge: Challenge, index: number) => (
            <div key={index} style={{ marginBottom: index < project.challenges.length - 1 ? "var(--space-lg)" : "0" }}>
              <h3
                style={{
                  fontSize: "var(--font-size-lg)",
                  color: "var(--color-primary)",
                  marginBottom: "var(--space-sm)",
                  fontWeight: "bold",
                }}
              >
                {challenge.title}
              </h3>
              <MarkdownContent content={challenge.description} />
            </div>
          ))}
        </div>

        {/* Right Column: Features + Impact */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
          {/* Key Features - Compact List */}
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-lg)",
              background: "var(--color-surface)",
            }}
          >
            <h2
              className="uppercase font-black"
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-white)",
                marginBottom: "var(--space-lg)",
                letterSpacing: "0.05em",
              }}
            >
              KEY FEATURES
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {project.features.map((feature: Feature, index: number) => (
                <li
                  key={index}
                  style={{
                    marginBottom: index < project.features.length - 1 ? "var(--space-md)" : "0",
                    paddingLeft: "var(--space-md)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--color-primary)",
                      fontWeight: "bold",
                      fontSize: "var(--font-size-lg)",
                    }}
                  >
                    ✦
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "var(--font-size-sm)",
                        color: "var(--color-white)",
                        fontWeight: "bold",
                        marginBottom: "var(--space-xs)",
                      }}
                    >
                      {feature.title}
                    </div>
                    <div
                      style={{
                        fontSize: "var(--font-size-xs)",
                        color: "var(--color-gray-light)",
                        lineHeight: "1.5",
                      }}
                    >
                      {feature.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact & Results - Compact */}
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-lg)",
              background: "var(--color-surface)",
            }}
          >
            <h2
              className="uppercase font-black"
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-white)",
                marginBottom: "var(--space-lg)",
                letterSpacing: "0.05em",
              }}
            >
              IMPACT & RESULTS
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {project.impact.map((item: string, index: number) => (
                <li
                  key={index}
                  style={{
                    fontSize: "var(--font-size-sm)",
                    color: "var(--color-white)",
                    lineHeight: "1.7",
                    paddingLeft: "var(--space-md)",
                    position: "relative",
                    marginBottom: index < project.impact.length - 1 ? "var(--space-sm)" : "0",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--color-primary)",
                      fontWeight: "bold",
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Work - Full Width */}
      <div
        style={{
          border: "var(--border-width) solid var(--color-black)",
          boxShadow: "6px 6px 0 var(--color-black)",
          padding: "var(--space-lg)",
          background: "var(--color-surface)",
          marginTop: "var(--space-2xl)",
        }}
      >
        <h2
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-white)",
            marginBottom: "var(--space-sm)",
            letterSpacing: "0.05em",
          }}
        >
          RELATED WORK
        </h2>
        <p
          style={{
            fontSize: "var(--font-size-md)",
            color: "var(--color-gray-light)",
          }}
        >
          Check out{" "}
          <Link
            href="/projects/mystica"
            style={{ color: "var(--color-primary)", textDecoration: "underline" }}
          >
            Mystica
          </Link>{" "}
          and{" "}
          <Link
            href="/projects/mercury-notes"
            style={{ color: "var(--color-primary)", textDecoration: "underline" }}
          >
            Mercury Notes
          </Link>{" "}
          for related projects
        </p>
      </div>
    </main>
  )
}
