import Timeline from "@/components/timeline/Timeline"

export default function TimelinePage() {
  const timelineEntries = [
    {
      id: "2025-present",
      date: "2025 - Present",
      title: "San Francisco - Building the Future",
      description:
        "Moved to SF in February for the startup energy. Selectively taking on consulting projects while seeking full-time senior engineering or tech lead roles. Current clients: ODAPT (YC W25), Mimetic ($1.5M raised). Building developer tools, AI infrastructure, and creating 'magic moments' for users.",
      links: [
        { label: "View Client Work", href: "/client-work" },
        { label: "Contact Me", href: "/contact" },
      ],
    },
    {
      id: "2025-mimetic",
      date: "2025 (Ongoing)",
      title: "Mimetic - Video Generation Pipeline",
      description:
        "Building automated video generation pipeline for $1.5M seed-stage startup. Wired to Replicate API, 11 Labs for audio, using Claude Code with custom subagents for script generation. Parallelized 4-second chunk generation with continuous footage capability (last frame → start frame). Includes video cloning feature to recreate existing videos with same feel/color schemes.",
      links: [{ label: "View Client Work", href: "/client-work" }],
    },
    {
      id: "2025-odapt",
      date: "~1 Month (2025)",
      title: "ODAPT (YC W25) - Frontend Architecture Overhaul",
      description:
        "Founding Engineer for Y Combinator Winter 2025 startup. Refactored 10,000+ lines from vanilla JavaScript to TypeScript + Next.js. Built recursive iframe architecture for AI-generated UIs that can modify themselves in real-time. 45% performance improvement, 60% increase in maintainability, 35% reduction in runtime defects.",
      links: [{ label: "View Client Work", href: "/client-work" }],
    },
    {
      id: "2025-01",
      date: "Jan 2025 - Feb 2025",
      title: "CompozeLabs - AI Voice Sales Coaching",
      description:
        "Built voice-interactive sales-coaching tool with novel 'observer pattern' architecture. POV estimated 4-6 weeks, delivered in 1 week. Voice agent guided by reasoning models (GPT-5) watching transcript in real-time. Includes LinkedIn scraping for persona generation. 25% improvement in sales rep pass-rates. Colleagues coined term 'Silas velocity'.",
      links: [
        { label: "View Case Study", href: "/projects/compozelabs" },
        { label: "See Client Work", href: "/client-work" },
      ],
    },
    {
      id: "2024-claude-ecosystem",
      date: "2024 - Present",
      title: "Claude Code Ecosystem (.claude + klaude + MCP Boilerplate)",
      description:
        "Built comprehensive workflow orchestration system around Claude Code. Created .claude repository (478 GitHub stars) with agent orchestration, custom slash commands, and workflow automation. Built Klaude wrapper enabling async agents, recursive subagents, and agent checkout system. Pioneered spec-driven development with PDOCS CLI. Created MCP Boilerplate (78 stars) for easier MCP server creation.",
      links: [
        { label: "View Case Study", href: "/projects/claude-code-ecosystem" },
      ],
    },
    {
      id: "2024-cosmicnotes",
      date: "2024 - Present",
      title: "CosmicNotes (Mercury Notes) - AI Note-Taking",
      description:
        "Built AI-powered note-taking tool with semantic tagging system using embeddings. Notes auto-tagged based on similarity to previous notes with same tags. Auto-detects collections/todos and converts to structured data. AI-generated summaries per tag/category combination with 'dirty' state tracking. RAG-powered chat interface using pgvector in Supabase.",
      links: [{ label: "View Case Study", href: "/projects/cosmicnotes" }],
    },
    {
      id: "2024-crypto-dashboard",
      date: "2024 (Ongoing)",
      title: "Crypto Trading Analytics Dashboard",
      description:
        "Real-time yield tracking dashboard for $20M+ crypto portfolio. Built cross-chain price normalization engine (67 blockchains), real-time SSE streaming (<200ms latency), and volume-weighted average price (VWAP) calculation. 95% reduction in time-to-insight (5-8 hours → instant), 1,800 annual hours saved per portfolio manager, $2.3M additional yield captured annually.",
      links: [{ label: "View Client Work", href: "/client-work" }],
    },
    {
      id: "2024-cancer-platform",
      date: "~1 Month (2024-2025)",
      title: "Cancer Education Platform (C0)",
      description:
        "Built AI-powered cancer education platform aggregating info from three sources: public web (via Firecrawl), AI-generated responses, and clinician-reviewed content. Implemented JWT auth with role-based access control (Patient, Medical Reviewer, Administrator). Side-by-side comparison interface for information trust.",
      links: [{ label: "View Client Work", href: "/client-work" }],
    },
    {
      id: "2024-08",
      date: "Aug 2024 - Dec 2024",
      title: "Mystica (Tricky Djinn LLC) - CTO & Lead Developer",
      description:
        "Co-founded startup and built AI-powered geo-RPG. Led team of 5 developers. Used Google Maps API to seed encounters worldwide, regenerated daily/weekly. Pioneered fine-tuning architecture: large model generates training data, small model learns shortened prompts. 50% token reduction, 30% cost savings. Built real-time multiplayer with WebSocket + Redis. Set up multi-environment deployment pipeline.",
      links: [{ label: "View Case Study", href: "/projects/mystica" }],
    },
    {
      id: "2023-03",
      date: "Mar 2023 - Jul 2024",
      title: "Co-GM - Solo SaaS Project",
      description:
        "Built complete D&D campaign manager as solo developer. Custom markdown linking system with @note_name syntax where renaming auto-updates all references. Fully customizable calendars (custom weeks, months, recurring events). Workshop system for sharing calendars, compendia, random tables with rating system. 1,500+ users, 50+ paying subscribers, still receiving organic signups 3 years later with zero marketing. Built entirely pre-LLMs.",
      links: [{ label: "View Case Study", href: "/projects/co-gm" }],
    },
    {
      id: "2022-08",
      date: "Aug 2022 - Dec 2024",
      title: "Concord USA - Software Consultant",
      description:
        "2+ years, 2 major enterprise projects. Project 1: Timesheet platform (500 users, 2,000 timesheets/month) with Salesforce integration. Project 2: E-commerce web app for 5,000+ employee international health tech company. Worked across React, Knockout.js, Blazor, C# .NET. Produced 2x commits and 5x code vs other devs. Optimized page loads by seconds, fixed critical auth vulnerabilities, architected real-time messaging across 3rd-party APIs.",
      links: [{ label: "View Client Work", href: "/client-work" }],
    },
    {
      id: "2022-05",
      date: "May 2022",
      title: "Graduated Carleton College",
      description:
        "Computer Science Major with AI/ML focus. Received distinction for exceptional work in senior capstone AI project. Built Reddit chatbot using custom LLM with highway model architecture (pass-through transformers combining text embeddings + metadata). Earlier work: stock market predictors with RNNs (built 3 times), computer vision algorithms for Clean Energy Associates internship.",
    },
    {
      id: "2018-2022",
      date: "2018 - 2022",
      title: "Carleton College, Minnesota",
      description:
        "Computer Science Major with focus on AI/ML. Teaching assistant for multiple CS courses. Research in machine learning and neural networks. Built custom LLM for senior capstone (pre-GPT era) with highway model architecture. This was when I first fell in love with AI, then got disillusioned (2022-2023), then re-awakened by GitHub Copilot.",
    },
    {
      id: "2016-2018",
      date: "2016 - 2018",
      title: "Boarding School, Hawaii",
      description:
        "2 years away from Alaska. Played foosball obsessively—spent hours after classes at the 2 foosball tables. Reached top competitive skill level. Only 2-7 people in the world have ever beaten me consistently. This is where the competitive streak really took off.",
    },
    {
      id: "childhood-dnd",
      date: "2017 (Age 17)",
      title: "The Map Project Begins",
      description:
        "Decided at 17 that if I wanted deep lore for my D&D world, I should run all campaigns in the same place. Started building a fantasy map. Players left the edge. Made it 100x bigger (2,000px → 20,000px). Took 5 years to complete. Hand-drew all mountains. Now the first Google result for 'largest fantasy map on the internet.' Also built AlariaWiki.Online with all the lore, and created Heart Rush TTRPG (custom tactical combat system fixing D&D's problems, now played by my players' friends).",
    },
    {
      id: "childhood",
      date: "Childhood",
      title: "Alaska - Where It All Began",
      description:
        "Born and raised in Alaska. Dad grew up in a log cabin and made sure my childhood was full of crazy camping experiences: flying in bush planes, halibut fishing, salmon fishing, backcountry skiing, crabbing, shrimping, hiking in mountains, boating. Spent a good piece of my life on boats and planes and outdoors. Started DMing D&D campaigns. Built 150+ programming side projects over the years (most public on GitHub). Programming has always been a major hobby—wake up and code until sleep.",
    },
  ]

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
