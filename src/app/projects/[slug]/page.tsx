"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { use } from "react"

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

interface Project {
  title: string
  subtitle: string
  metrics: Record<string, string>
  techStack: string[]
  links: {
    github?: string
    demo?: string
  }
  story: string
  challenges: Challenge[]
  features: Feature[]
  impact: string[]
  philosophy: string
}

// Project data from portfolio interview
const projects: Record<string, Project> = {
  "co-gm": {
    title: "CO-GM",
    subtitle: "D&D CAMPAIGN MANAGEMENT PLATFORM",
    metrics: {
      timeline: "Mar 2023 - Jul 2024",
      users: "1,500+ total users",
      monthlyActive: "30 monthly active",
      subscribers: "50+ paying subscribers",
      role: "Solo Developer",
    },
    techStack: ["JavaScript", "React", "Node/Express", "MongoDB", "Azure"],
    links: {
      demo: "https://cogm.tech",
    },
    story: "As a GM for over a decade, I was frustrated by existing tools that were either too bloated or too limited. D&D is a game about interacting with people—it's really important that you spend as little time fucking around trying to use your notes and as much time as possible actually interacting with the people around you in the game. I wanted to build something that felt natural, was lightning fast, and got out of the way during gameplay. After 3 years of development, Co-GM has 1,500+ users who found it organically, 50+ paying subscribers, and I still get messages from users saying 'I've been looking for a tool that does everything that Co-GM does for ages.'",
    challenges: [
      {
        title: "Custom Markdown Linking System",
        description:
          "The @note_name syntax was a nightmare to implement. When you create that link, it's clickable, and if you edit the name of the link, all the references to it have to also update. It's not like a normal markdown link where you just update the URL—here the text IS the URL, which makes it a lot more complicated. Writing custom markdown where an @ symbol turns something into a clickable link, but then deleting parts of it intelligently updates the link across all notes in the entire campaign.",
      },
      {
        title: "Custom Calendar System",
        description:
          "These were completely customizable calendars. Each GM can create a completely customized calendar for their campaign with their own number of weeks, number of days, number of months, every month with a different number of days. It supported all of that jazz, and that's just like a giant freaking mess. Keeping track of how Monday is a different day of the month, and those days are different per month each year as well. It's hellish. The system handles custom week lengths (e.g., 8-day weeks), custom month lengths (e.g., 13 months, 28 days each), and recurring events (e.g., always the third day of the fourth month of each year, or always the second Monday). All of this required a whole bunch of really annoying modulo math.",
      },
      {
        title: "Workshop Sharing System",
        description:
          "Built a rating system where users could publish calendars, compendia (encyclopedias/wikis), and random tables to a workshop. The data structures were kind of annoying because I was using a NoSQL database—I had to store the score both on the object that was in the store (for performance) and also save the score on the user. When someone subscribes to another user's wiki, all those pages become linkable from their own notes. That's kind of a headache to set up.",
      },
    ],
    features: [
      {
        title: "Custom @note_name Linking",
        description: "Auto-updating references across all campaign notes",
      },
      {
        title: "Fantasy Calendars",
        description: "Fully customizable with variable months/weeks/days",
      },
      {
        title: "Workshop Marketplace",
        description: "Publish and subscribe to other GMs' content with ratings",
      },
      {
        title: "Lightning-Fast UX",
        description: "1-2 clicks between any feature, command+scroll to switch notes",
      },
      {
        title: "Scratch Pad System",
        description: "Hold Command and scroll to slide between notes horizontally",
      },
      {
        title: "Random Tables",
        description: "Customizable random generators for in-game content",
      },
    ],
    impact: [
      "1,500+ users discovered organically through Google Search",
      "50+ paying subscribers with freemium model",
      "30 monthly active users still finding it 3 years later",
      "Zero marketing budget—all growth from word of mouth",
      'User quote: "I\'ve been looking for a tool that does everything that Co-GM does for ages. I can\'t believe I found this."',
      "Still receiving Discord messages: 'Thank you so much for building this incredible tool'",
    ],
    philosophy:
      "D&D is about interacting with people. It's really important that you spend as little time fucking around trying to use your notes and as much time as possible actually interacting with the people around you in the game. There's only one or two clicks between any single thing in the entire app. It's really important to be able to take notes lightning fast and then have them get organized later. This is all pre-LLMs too—this is a big solo endeavor using my own fucking brain.",
  },
  "mystica": {
    title: "MYSTICA",
    subtitle: "AI-POWERED GEO-RPG GAME",
    metrics: {
      timeline: "Aug 2024 - Dec 2024",
      role: "CTO & Lead Developer",
      team: "5 people",
      costSavings: "30% operating cost reduction",
    },
    techStack: ["React Native", "PostgreSQL", "Redis", "Spring", "Fine-tuning"],
    links: {},
    story: "As CTO of Tricky Djinn LLC, I was tasked with making an AI act as a game engine for a geo-RPG. Unlike AR games, we focused on the combat experience itself, aiming to replicate text adventures and tabletop roleplaying games. From a technical standpoint, this is quite challenging—we're asking a lot of AI. Despite the 'magic' of LLMs, getting them to behave like a game engine (returning structured data, not just text) while being cost-effective at scale was the core technical problem I solved.",
    challenges: [
      {
        title: "LLM as Game Engine",
        description:
          "LLMs return text, not data, and are trained to behave like chat bots, not game engines. Initially, I used a sequence of prompts where each step wraps user content in specific instructions on processing and output format, spits out XML, and gets repeated until steps are completed. Finally, it outputs a response for the outcome, along with metadata for affecting user health and state of encounter. This works but is expensive.",
      },
      {
        title: "Fine-Tuning for Cost Reduction",
        description:
          "I realized we could use the larger model with massive, hyper-engineered prompts to create training data for a smaller model. The smaller model wouldn't need instructions on what to do or output formatting. We would have the larger model go through the same prompts the smaller model would later use, take that structured JSON output, and combine it with a much simpler input for the smaller model. Despite fine-tuned models costing more per token, this reduced our input token-count by over 50%, saving us 30% on projected operating costs.",
      },
      {
        title: "Real-Time Multiplayer Infrastructure",
        description:
          "Set up multiplayer using websocket connections and Redis 'sessions', balancing lightning fast communication between players with a scalable backend and database. The combat system required 4 different AI steps to turn user actions into a full round of combat, each with its own prompt that was reduced via fine-tuning.",
      },
    ],
    features: [
      {
        title: "AI Combat Engine",
        description: "4-step AI pipeline converts player actions into structured game outcomes",
      },
      {
        title: "Fine-Tuned Models",
        description: "Custom fine-tuning reduced prompts by 50% for 30% cost savings",
      },
      {
        title: "Location-Based Encounters",
        description: "Google Maps API integration for seeding encounters at real-world locations",
      },
      {
        title: "WebSocket Multiplayer",
        description: "Real-time combat sessions with Redis for scalable player connections",
      },
      {
        title: "Multi-Environment Deployment",
        description: "Development, testing, and live environments with effortless deployment",
      },
    ],
    impact: [
      "50%+ reduction in input token count",
      "30% savings on projected operating costs",
      "Real-time multiplayer with sub-second latency",
      "Encounters regenerate daily/weekly for replay value",
      "Novel fine-tuning architecture applicable to other LLM cost optimization problems",
    ],
    philosophy:
      "Despite the 'magic' of AI, we're asking a lot of it—we're asking it to act as a game engine. The key insight was that you can use expensive, smart models to teach cheaper, smaller models how to behave. Fine-tuning isn't just about customization—it's about cost optimization at scale. This approach of using larger models to create training data for smaller models is similar to how I believe OpenAI's reasoning models work internally.",
  },
  "claude-code-ecosystem": {
    title: "CLAUDE CODE ECOSYSTEM",
    subtitle: "AI DEVELOPMENT WORKFLOW SYSTEM",
    metrics: {
      githubStars: "478 stars (.claude)",
      mcpStars: "78 stars (MCP Boilerplate)",
      agents: "8+ specialized agent types",
      timeline: "2024 - Present",
    },
    techStack: ["TypeScript", "Node.js", "SQLite", "Claude API", "Vercel AI SDK"],
    links: {
      github: "https://github.com/CaptainCrouton89/.claude",
    },
    story: "I'm an optimizer and I love making my own workflows faster, better, stronger. I discovered Claude pretty early on and discovered how customizable it was, especially with subagents. These subagents really blew me away because I almost immediately realized that you could section off context in a subagent. This led me down a path of building an entire ecosystem of tools: .claude (478 stars), klaude (a wrapper with async + recursive agents), MCP Boilerplate (78 stars), and PDOCS CLI for spec-driven development. The core philosophy: research 10 times, plan 5 times, execute once—because fixing a bad execution is almost impossible.",
    challenges: [
      {
        title: "Agent Checkout System (Klaude)",
        description:
          "The big innovation was allowing interactive subagents without burning parent context. Requirements gathering needs to be interactive—it needs to ask you questions. But you want it done by subagents so you're not burning context. Because Claude Code is a child process of the wrapper, it can be killed by the parent process, which can then run 'claude code --resume' on a different session ID. From the user's perspective, your terminal UI is killed and then suddenly a new one appears with the subagent interface.",
      },
      {
        title: "Async Tool Calls (Pre-Hooks)",
        description:
          "Built this before hooks existed. Tool calls were asynchronous—when they fired off, a receipt was returned with a tool ID. But the actual response could come back much later as a user message. I had a queue of messages that would get filled up as tool calls completed. This enabled deep research in ~2 minutes instead of 10+ minutes by parallelizing web searches and summarization across multiple subagents.",
      },
      {
        title: "MCP vs CLI Decision Framework",
        description:
          "The problem with MCPs is that with every single message, all instructions for how to use those MCP servers are included—that's 5,000 to 10,000 tokens, burning through credits and lowering output quality. The solution: CLIs with markdown instruction files you tag in when referenced. Without the reference document, the LLM uses the help command. Only burns context the few times you use it rather than every conversation.",
      },
    ],
    features: [
      {
        title: "Recursive Agent Delegation",
        description: "Agents can create other subagents with custom prompts and tool collections",
      },
      {
        title: "Async Execution",
        description: "Fire off long-running tasks and continue working while they complete",
      },
      {
        title: "Spec-Driven Development (PDOCS)",
        description: "YAML-based documentation system for feature specs and API contracts",
      },
      {
        title: "Multi-Model Routing",
        description: "Route to different LLMs (Claude, reasoning models) based on task complexity",
      },
      {
        title: "Observability & Tracing",
        description: "SQLite database tracks all agent sessions, logs, and system responses",
      },
      {
        title: "Git Hooks Integration",
        description: "Auto-generate CLAUDE.md files after commits for self-documenting repos",
      },
    ],
    impact: [
      "478 GitHub stars on .claude repository",
      "78 GitHub stars on MCP Boilerplate",
      "Community adoption demonstrates validation of approach",
      "Enables 15+ minute autonomous agent runs (vs 2-minute typical)",
      "Greenfield projects: 'Much longer requirements phase, then fire off execution commands for entire features with very little oversight'",
    ],
    philosophy:
      "Speed is really important and long-running tasks are really important. If a task only runs for two minutes, that's enough time to get distracted. However, if the task can run for 15 minutes straight, that's enough to get into flow state and be productive on another project. Spec-driven development is the future—these agents, if you give them enough planning and specs, will execute perfectly. Measure three times, plan twice, execute once. All the inefficiency comes from debugging poor executions, which are a lot harder to debug than just a plan document.",
  },
  "mercury-notes": {
    title: "MERCURY NOTES",
    subtitle: "AI-POWERED NOTE-TAKING APP",
    metrics: {
      techStack: "Next.js 15 + React 19",
      features: "Semantic tagging + RAG chat",
      embedding: "OpenAI embeddings + pgvector",
      primaryUser: "Myself (cost-sensitive)",
    },
    techStack: ["Next.js 15", "React 19", "Redux Toolkit", "Supabase", "Claude", "OpenAI", "Tailwind CSS 4"],
    links: {
      demo: "https://cosmic-delta-gilt.vercel.app",
    },
    story: "The root issue I wanted to solve with Mercury Notes (formerly CosmicNotes) is that when recording notes, we want to just scribble it down. But when reading notes, we want things to be nicely structured. I built a semantic tagging system that learns from your note-taking patterns, automatic todo/collection detection, and AI-generated tag summaries that synthesize messy raw notes into beautifully formatted documents. Since it's primarily for my own use, I optimized heavily for cost-sensitivity.",
    challenges: [
      {
        title: "Semantic Tagging System",
        description:
          "Almost certainly the most technically interesting part. When it looks at your note, it gets an embedding of that note and finds all the other notes with similar semantic content and looks at the tags on those notes. Then it uses a few other heuristics like how long it's been since those notes have been edited and comes up with its best guess of what tag you want based on tags of similar notes. When you first start using the tool, it doesn't really know what subjects you gravitate around. But as you use it more, it learns. What's really important is that the tag's name doesn't have to have anything to do with the content because it's using other semantically similar content to figure out tags rather than the tag name itself.",
      },
      {
        title: "Tag Summary Generation",
        description:
          "Notes get tagged (e.g., 'D&D' + 'brainstorming'). For each tag+category combination, the LLM reads all notes with those properties and regenerates a summary document containing all component notes. The summary is beautifully formatted and nicely synthesized, with original notes linked as references. Summaries are cached—when you come back, it's the exact same summary. The summary page shows it's 'dirty' when new notes are added, and you can manually regenerate. In production, could have a batch job that regenerates any dirty summaries older than one day.",
      },
      {
        title: "Automatic Collection/Todo Detection",
        description:
          "I was really proud of the way it converted collections into to-do lists. If I mention like, 'Oh, here's a laundry list of things I need to do today,' it will do a detection of what type of note. If it detects that it's a collection or a to-do list, it will turn it into structured data and save it as such instead. Your to-do list suddenly becomes this actual to-do list rather than just a collection of random scribbled notes.",
      },
    ],
    features: [
      {
        title: "Semantic Tag Learning",
        description: "Embeddings + similarity search suggests tags based on content, not keywords",
      },
      {
        title: "AI Tag Summaries",
        description: "Synthesizes messy raw notes into formatted documents with references",
      },
      {
        title: "Auto Todo Detection",
        description: "Converts freeform lists into structured todo items automatically",
      },
      {
        title: "RAG Chat Interface",
        description: "Ask questions about your notes using semantic search + LLM",
      },
      {
        title: "Cost-Optimized",
        description: "Manual regeneration and caching to minimize API costs",
      },
    ],
    impact: [
      "Tags learn from your writing patterns over time",
      "Scribbled notes become beautifully formatted summaries",
      "Example: D&D ideas page shows everything relevant with tabs for todos/brainstorming/research",
      "RAG-powered search makes finding old notes effortless",
      "Built 'too many times' with Supabase pgvector—now it's the default stack",
    ],
    philosophy:
      "When recording notes, we want to just scribble it down. When reading notes, we want things nicely structured. Most of the time when you open your notes, it's in the middle of a conversation—'Oh wait, let me note that down really quick.' And then when you try to find it later, it's much easier and organized with all the rest of your content. The key innovation was realizing that tag names don't need to match content—semantic similarity is what matters.",
  },
  "compozelabs": {
    title: "COMPOZELABS",
    subtitle: "AI VOICE SALES COACHING",
    metrics: {
      timeline: "Jan 2025 - Feb 2025",
      delivery: "1 week (vs 4-6 week estimate)",
      improvement: "25% sales rep pass-rate gain",
      recognition: "'Silas velocity' coined by colleagues",
    },
    techStack: ["Next.js", "WebRTC", "OpenAI API", "LinkedIn API", "Reasoning Models"],
    links: {},
    story: "I was brought on to solo-build a voice-interactive sales coaching tool where users practice real-time sales pitches against a voice AI modeled on real people. The POV was estimated to take 4-6 weeks—I delivered it in 1 week. The challenge: voice agents aren't very good because they have to be lightweight (voice is data-intensive), so the models aren't as smart and it's harder to get them to follow instructions. I solved this with a novel 'observer pattern' architecture where reasoning models inject real-time guidance into the lightweight voice AI.",
    challenges: [
      {
        title: "The Observer Pattern",
        description:
          "Voice agents have to be lightweight because voice is data-intensive, so the models under the hood aren't as smart. We got around this by having observer agents looking at the transcript in real time. These observer agents used the latest reasoning models which are really intelligent and we could put really large instructions into those. They would look at the transcript and inject guidance—guidance came in the form of additional user input wrapped in tags indicating 'Hey, this is not actually the user speaking, this is kind of like the system instructions.' Would say stuff like: 'Oh, you need to object more to this part' or 'You need to wrap up the call now.' In this way, we got a more intelligent, better instruction-following voice agent by having this dual system.",
      },
      {
        title: "Getting Agent to Hang Up",
        description:
          "Voice mode by itself will never stop talking to the user. We had to give it a custom tool for hanging up—a tool that was essentially the 'end yourself' tool that would make it so the agent could end its own process, hang up the phone, and close the connection.",
      },
      {
        title: "LinkedIn Profile Integration",
        description:
          "It could search a user's LinkedIn profile. You just plugged in their LinkedIn and it retrieved everything, scraped the LinkedIn page for everything there was to know. It created structured output—a profile representation that included personality, job, personal details. It would also make up additional stuff if information wasn't available that we wanted. It then used that as part of the system prompt for the voice AI.",
      },
    ],
    features: [
      {
        title: "Observer Pattern Architecture",
        description: "Reasoning models inject real-time guidance into lightweight voice AI",
      },
      {
        title: "Multi-Observer System",
        description: "Different observers handle different tasks (objections, timing, feedback)",
      },
      {
        title: "LinkedIn-Powered Personas",
        description: "Scrapes LinkedIn to create realistic AI personas for practice",
      },
      {
        title: "Custom Hang-Up Tool",
        description: "Voice AI can end conversation naturally when objectives are met",
      },
      {
        title: "Real-Time Transcript Analysis",
        description: "Observers analyze conversation as it happens with minimal latency",
      },
    ],
    impact: [
      "Delivered in 1 week vs 4-6 week estimate (67% faster)",
      "25% improvement in sales representative pass-rates",
      "Colleagues coined the term 'Silas velocity' referring to development speed",
      "Novel architecture applicable to other voice AI quality problems",
      "Client feedback: wildly fast development cycle with daily iteration",
    ],
    philosophy:
      "I was brought on because they specifically wanted me to tackle this task. I essentially worked one-on-one with the client—emailing back and forth in the evening like 'hey, check out an update.' This client was pre-seed, building their MVP, so it could change fast. I just made a whole bunch of pushes to production and got immediate feedback. It was a wildly fast development cycle. The hardest part—building that voice AI—was done in like a week and a half. Most of it was just tweaking based on how it understood sales.",
  },
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

      {/* Hero Image Placeholder */}
      <div
        style={{
          width: "100%",
          height: "250px",
          background: "var(--color-gray-dark)",
          border: "var(--border-width) solid var(--color-black)",
          boxShadow: "6px 6px 0 var(--color-black)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "var(--space-2xl)",
        }}
      >
        <span style={{ color: "var(--color-gray-mid)", fontSize: "var(--font-size-lg)" }}>
          Hero Image / Screenshot (250px height)
        </span>
      </div>

      {/* Title and Metadata */}
      <div
        style={{
          border: "var(--border-width) solid var(--color-black)",
          boxShadow: "6px 6px 0 var(--color-black)",
          padding: "var(--space-xl)",
          background: "var(--color-background)",
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
              }}
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {/* Two Column Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "var(--space-2xl)",
        }}
        className="md:grid-cols-[300px_1fr]"
      >
        {/* Sidebar - Quick Stats */}
        <div>
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-lg)",
              background: "var(--color-background)",
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

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2xl)" }}>
          {/* The Story */}
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-xl)",
              background: "var(--color-background)",
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
            <p
              style={{
                fontSize: "var(--font-size-md)",
                color: "var(--color-white)",
                lineHeight: "1.6",
              }}
            >
              {project.story}
            </p>
          </div>

          {/* Technical Challenges */}
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-xl)",
              background: "var(--color-background)",
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
                <p
                  style={{
                    fontSize: "var(--font-size-md)",
                    color: "var(--color-white)",
                    lineHeight: "1.6",
                  }}
                >
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-xl)",
              background: "var(--color-background)",
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
              KEY FEATURES
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--space-md)",
              }}
            >
              {project.features.map((feature: Feature) => (
                <div
                  key={feature.title}
                  style={{
                    border: "2px solid var(--color-gray-mid)",
                    padding: "var(--space-md)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "var(--font-size-md)",
                      color: "var(--color-white)",
                      fontWeight: "bold",
                      marginBottom: "var(--space-xs)",
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "var(--font-size-sm)",
                      color: "var(--color-gray-light)",
                      lineHeight: "1.5",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Results */}
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-xl)",
              background: "var(--color-background)",
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
              IMPACT & RESULTS
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {project.impact.map((item: string, index: number) => (
                <li
                  key={index}
                  style={{
                    fontSize: "var(--font-size-md)",
                    color: "var(--color-white)",
                    lineHeight: "1.8",
                    paddingLeft: "var(--space-lg)",
                    position: "relative",
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

          {/* Development Philosophy */}
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-xl)",
              background: "var(--color-background)",
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
              DEVELOPMENT PHILOSOPHY
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-md)",
                color: "var(--color-white)",
                lineHeight: "1.6",
                fontStyle: "italic",
              }}
            >
              "{project.philosophy}"
            </p>
          </div>

          {/* Related Work */}
          <div
            style={{
              border: "var(--border-width) solid var(--color-black)",
              boxShadow: "6px 6px 0 var(--color-black)",
              padding: "var(--space-xl)",
              background: "var(--color-background)",
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
                href="/projects/cosmicnotes"
                style={{ color: "var(--color-primary)", textDecoration: "underline" }}
              >
                CosmicNotes
              </Link>{" "}
              for related projects
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
