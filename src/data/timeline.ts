import { TimelineEntry } from "@/types/timeline";

export const timelineEntries: TimelineEntry[] = [
  {
    id: "2025-present",
    date: "2025 - Present",
    title: "San Francisco - Building the Future",
    description:
      "Moved to SF in February for the startup energy. Selectively taking on consulting projects while seeking full-time senior engineering or tech lead roles.",
    skills: ["AI Infrastructure", "DevTools", "Full-Stack", "LLM Integration"],
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
      "Building automated video generation pipeline for seed-stage startup. Parallelized 4-second chunk generation with continuous footage capability and video cloning features.",
    skills: ["Claude Code", "Replicate API", "FFMPEG", "11 Labs", "Agent Orchestration"],
    links: [{ label: "View Client Work", href: "/client-work" }],
  },
  {
    id: "2025-odapt",
    date: "~1 Month (2025)",
    title: "Odapt (YC X25) - Frontend Architecture Overhaul",
    description:
      "Founding Engineer for Y Combinator X25 startup. Migrated 10,000+ lines from vanilla JS to TypeScript + Next.js. Built recursive iframe architecture for AI-generated, self-modifying UIs.",
    skills: ["TypeScript", "Next.js 14", "React 18", "Zod", "Runtime Validation"],
    links: [{ label: "View Client Work", href: "/client-work" }],
  },
  {
    id: "2025-01",
    date: "Jan 2025 - Feb 2025",
    title: "CompozeLabs - AI Voice Sales Coaching",
    description:
      "Built voice-interactive sales coaching tool with novel observer pattern. Real-time AI coaching with LinkedIn persona generation. POV estimated 4-6 weeks, delivered in 1 week.",
    skills: ["WebRTC", "STT/TTS", "Next.js", "LinkedIn API", "Observer Pattern"],
    links: [
      { label: "View Case Study", href: "/projects/compozelabs" },
      { label: "See Client Work", href: "/client-work" },
    ],
  },
  {
    id: "2025-claude-ecosystem",
    date: "2025 (Ongoing)",
    title: "Claude Code Ecosystem (.claude + klaude + MCP Boilerplate)",
    description:
      "Built comprehensive workflow orchestration system around Claude Code. Created tools enabling async agents, recursive subagents, and spec-driven development.",
    skills: ["Agent Orchestration", "CLI Development", "MCP Servers", "Workflow Automation"],
    links: [
      { label: "View Case Study", href: "/projects/claude-code-ecosystem" },
    ],
  },
  {
    id: "2025-mercury-notes",
    date: "~1 Month (2025)",
    title: "Mercury Notes - AI Note-Taking",
    description:
      "AI-powered note-taking with semantic tagging using embeddings. Auto-detects todos/collections, generates summaries per tag/category, RAG-powered chat interface.",
    skills: ["Next.js 15", "React 19", "Redux Toolkit", "Supabase", "pgvector", "RAG"],
    links: [{ label: "View Case Study", href: "/projects/mercury-notes" }],
  },
  {
    id: "2025-crypto-dashboard",
    date: "2025 (Ongoing)",
    title: "Crypto Trading Analytics Dashboard",
    description:
      "Institutional-grade fintech platform for $20M+ assets under management. Cross-chain price normalization (67 blockchains), real-time SSE streaming, VWAP calculation with outlier detection.",
    skills: ["Next.js 14", "TypeScript", "D3.js", "DeBank API", "Supabase", "PostgreSQL", "Redis"],
    links: [{ label: "View Client Work", href: "/client-work" }],
  },
  {
    id: "2025-cancer-platform",
    date: "~1 Month (2025)",
    title: "Cancer Education Platform (C0)",
    description:
      "AI-powered cancer education platform aggregating three sources: public web (Firecrawl), AI-generated responses, and clinician-reviewed content. Side-by-side comparison interface.",
    skills: ["React", "TypeScript", "FastAPI", "Firecrawl", "OpenAI API", "JWT Auth"],
    links: [{ label: "View Client Work", href: "/client-work" }],
  },
  {
    id: "2024-08",
    date: "Aug 2024 - Dec 2024",
    title: "Mystica (Tricky Djinn LLC) - CTO & Lead Developer",
    description:
      "Co-founded startup building AI-powered geo-RPG. Players explore real-world locations fighting fantasy creatures. Led team of 5. Pioneered fine-tuning architecture for cost reduction.",
    skills: ["React Native", "PostgreSQL", "Redis", "Spring", "Google Maps API", "LLM Fine-tuning"],
    links: [{ label: "View Case Study", href: "/projects/mystica" }],
  },
  {
    id: "2023-03",
    date: "Mar 2023 - Jul 2024",
    title: "Co-GM - SaaS Project",
    description:
      "D&D campaign manager built solo. Custom @note_name linking with auto-updating references. Fully customizable calendars. Workshop for sharing content with ratings.",
    skills: ["JavaScript", "Express", "Node", "Azure", "MongoDB", "React"],
    links: [{ label: "View Case Study", href: "/projects/co-gm" }],
  },
  {
    id: "2023-06",
    date: "Jun 2023 - Dec 2024",
    title: "Health Tech Company - Software Consultant",
    description:
      "E-commerce web app for 5,000+ employee international health tech company. Multiple frontend frameworks (React, Knockout.js, Blazor Pages), C# .NET backend, microservices architecture. Produced 2x commits and 5x code vs other devs. Optimized page loads by seconds, fixed critical auth vulnerabilities, architected real-time messaging across 3rd-party APIs.",
    skills: ["React", "Knockout.js", "Blazor", "C# .NET", "Microservices"],
    links: [{ label: "View Client Work", href: "/client-work" }],
  },
  {
    id: "2022-08",
    date: "Aug 2022 - Apr 2023",
    title: "Concord USA - Software Consultant",
    description:
      "Timesheet submission & review platform, 500 users, 2,000 timesheets/month, Salesforce API integration. Full-stack development with React frontend, PostgreSQL database, and Spring Boot (Java) backend.",
    skills: ["React", "PostgreSQL", "Spring Boot", "Java", "Salesforce API"],
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
];

export function getTimelineEntries(): TimelineEntry[] {
  return timelineEntries;
}
