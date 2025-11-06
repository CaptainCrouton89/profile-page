import { ProjectListing } from "@/types/project-listing";

export const projectListings: ProjectListing[] = [
  {
    slug: "co-gm",
    title: "CO-GM",
    subtitle: "D&D Campaign Management Platform",
    description:
      "Solo-developed a complete D&D campaign manager with custom @note_name linking system that auto-updates references, fully customizable fantasy calendars with variable months/weeks, and a workshop marketplace with ratings for sharing content between GMs.",
    metrics: ["1,500+ users", "50+ paying subscribers", "30 monthly active"],
    tags: ["JavaScript", "React", "Node/Express", "MongoDB", "Azure"],
  },
  {
    slug: "mystica",
    title: "MYSTICA",
    subtitle: "AI-Powered Geo-RPG",
    description:
      "Built a geo-location RPG where AI acts as the game engine. Designed and implemented an AI-game engine, and performed model distillation to reduce input tokens by 50% for huge cost savings. Set up multiplayer with WebSockets and Redis sessions.",
    metrics: ["CTO & Lead Dev", "Team of 5", "50% token reduction"],
    tags: ["React Native", "PostgreSQL", "Redis", "Spring", "Fine-tuning"],
  },
  {
    slug: "claude-code-ecosystem",
    title: "CLAUDE CODE ECOSYSTEM",
    subtitle: "AI Development Workflow System",
    description:
      "Built .claude (478 GitHub stars), klaude wrapper with recursive agents and async execution, and MCP Boilerplate (78 stars). Created complete workflow orchestration system with 8+ specialized agents, spec-driven development tools, and custom CLIs.",
    metrics: ["478 stars (.claude)", "78 stars (MCP)", "8+ agent types"],
    tags: ["TypeScript", "SQLite", "Agent Orchestration", "Automation"],
  },
  {
    slug: "mercury-notes",
    title: "MERCURY NOTES",
    subtitle: "AI-Powered Note-Taking App",
    description:
      "Built semantic tagging system that learns from similar notes using embeddings, automatic todo/collection detection, and AI-generated tag summaries with caching. Includes RAG-powered chat interface for querying notes.",
    metrics: ["Semantic search", "Auto-tagging", "RAG chat interface"],
    tags: ["Next.js 15", "React 19", "Supabase", "OpenAI", "pgvector"],
  },
  {
    slug: "compozelabs",
    title: "COMPOZELABS",
    subtitle: "AI Voice Sales Coaching",
    description:
      "Built voice-interactive sales coaching tool with novel 'observer pattern'—reasoning models inject real-time guidance into lightweight voice AI. Delivered in 1 week vs 4-6 week estimate. Achieved 25% improvement in sales rep pass-rates.",
    metrics: ["1 week delivery", "25% pass-rate gain", "Silas velocity coined"],
    tags: ["Next.js", "WebRTC", "OpenAI API", "LinkedIn API", "Real-time AI"],
  },
];

export function getProjectListings(): ProjectListing[] {
  return projectListings;
}
