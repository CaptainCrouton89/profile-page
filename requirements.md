# Requirements: Portfolio Site with AI Chat Interface

## Overview
**Purpose:** Professional portfolio website to showcase work, experience, and skills for job hunting. The site features an AI-powered chat interface as the primary interaction point, allowing visitors to learn about your work through conversation.

**User Benefit:**
- Recruiters/hiring managers can quickly explore your background through conversational AI
- Interactive, memorable experience that stands out from traditional portfolios
- Easy access to project details, resume, and career history

**Problem:** Traditional portfolios are static and require visitors to hunt for information. An AI chat interface provides an engaging, guided experience that surfaces relevant information based on visitor questions.

**Related Documentation:**
- `design-document.html` - Complete design system and component library
- `requirements.md` - This document

### Edge Cases
- **Empty state (chat):** Initial greeting message from AI assistant when no conversation history exists
- **Error state (chat):** API failures show friendly error message with retry option; avoid exposing technical errors
- **Loading state (chat):** Streaming response with typing indicator; tool call progress shown (e.g., "Fetching GitHub data...")
- **Empty state (projects):** If no projects exist, show placeholder state (not a concern for v1 with 3-4 projects)
- **Mobile navigation:** Hamburger menu collapses on mobile (< 768px), touch-friendly targets
- **Slow network:** Progressive image loading, skeleton loaders for content

## Functional Requirements

### Pages & Navigation

**1. Home Page (Chat Landing)**
- AI chat interface as hero component (full viewport height)
- Chat takes center stage with minimal distraction
- Navigation bar at top with links to About and Projects
- Chat messages displayed in conversation bubbles (AI left/user right, per design system)
- Input field at bottom (sticky) with send button
- Messages persist in session (scroll history)

**2. About Page**
- Profile section: image/avatar, name, title, bio
- Career timeline component showing job history with dates and descriptions
- Navigation to other pages
- Mobile-responsive: timeline collapses to left-aligned on mobile

**3. Projects Page**
- Grid of project cards (3-4 initially, responsive grid layout)
- Each card shows: image/gradient, title, category tag, brief description, tech tags, year
- Cards link to individual project detail pages (`/projects/[slug]`)

**4. Individual Project Pages (`/projects/[slug]`)**
- Full case study layout
- Header: title, category, year, tech stack tags
- Hero image or gradient
- Sections: Overview, Challenge, Solution, Results, Role
- Back navigation to Projects page
- SEO-optimized with meta tags per project

### User Interactions

**Chat Interface:**
- Type message in input field → press Enter or click Send → message appears as user bubble
- AI streams response token-by-token (appears to "type")
- When AI uses tools, show loading state: "[tool name] loading..." below AI message
- Scroll automatically to latest message
- No message editing (send-only, no delete)
- Clear conversation button? (Defer to implementation decision)

**Navigation:**
- Click nav links → smooth transition to page
- Mobile: hamburger menu toggles navigation overlay
- Footer with social links (GitHub, LinkedIn, email)

**Projects:**
- Click project card → navigate to `/projects/[slug]`
- Hover effects on cards (shadow shift per design system)

**Resume Download:**
- "Download Resume" button in nav or about page
- Downloads static PDF from `/public/resume.pdf`
- Opens in new tab or triggers download (browser-dependent)

### Data Requirements

**Project Schema (Markdown Frontmatter):**
```yaml
---
title: string (required)
slug: string (required, URL-safe)
category: string (required, e.g., "Machine Learning", "Full-Stack Development")
year: number (required)
description: string (required, ~2 sentences)
image: string (optional, path to image)
gradient: string (optional, CSS gradient if no image)
tags: string[] (required, tech stack)
order: number (required, display priority)
---
# Markdown content for case study
```

**Timeline Entry Schema (Markdown Frontmatter):**
```yaml
---
date: string (required, e.g., "2024 - Present")
title: string (required, job title)
company: string (optional)
description: string (required, paragraph)
order: number (required, chronological display)
---
```

**Bio/About Content:**
- Markdown file: `content/about.md`
- Includes: name, title, bio paragraph, profile image path

**Resume PDF:**
- Static file: `public/resume.pdf`

### API Requirements

**Chat API Endpoint:**
- **Endpoint:** `POST /api/chat`
- **Request:**
```json
{
  "messages": [
    { "role": "user" | "assistant" | "system", "content": "string" }
  ]
}
```
- **Response:** Streaming SSE (Server-Sent Events) via Vercel AI SDK
- **Errors:**
  - 429 Rate Limit: "Too many requests, please try again later"
  - 500 Server Error: "Something went wrong, please retry"
  - 400 Bad Request: "Invalid message format"

**Chat Tool Schema (Infrastructure Only for V1):**
- Tools defined in `/api/chat/route.ts`
- Tool structure: `{ name: string, description: string, parameters: zod schema, execute: async function }`
- V1 tools: placeholder structure (e.g., `getProjectDetails`, `getGitHubInfo`) with mock responses
- Future: real implementations fetching from markdown/GitHub API

### UI Requirements

**Design System:**
- Use styles/components from `design-document.html`
- Colors: Toxic orange primary (#FF6B00), near-black backgrounds (#0A0A0A, #1A1A1A)
- Typography: Space Grotesk (chunky sans), JetBrains Mono (code)
- Borders: 3px thick black borders
- Shadows: Hard offset shadows (6px 6px 0 black), no blur/soft shadows
- Buttons: Shadow collapse animation on hover/press
- Cards: Neo-brutalist with hover transform

**Component Specifications:**
1. **Chat Message Bubble:**
   - User: Orange background, black text, right-aligned, max-width 70%
   - AI: Dark surface background, white text, left-aligned, max-width 70%
   - Label above each message ("YOU" / "AI ASSISTANT", small caps)
   - Slide-in animation on message entry

2. **Chat Input:**
   - Textarea with auto-resize
   - Sticky to bottom of viewport
   - Orange border on focus, offset shadow
   - Send button (primary button style)

3. **Project Card:**
   - Image/gradient at top (250px height)
   - Card header: category tag (small badge), title (h3)
   - Card body: description paragraph, tech tags
   - Card footer: year, "View Project →" button
   - Hover: translate + shadow collapse

4. **Timeline Item:**
   - Alternating left/right on desktop (center line)
   - Left-aligned on mobile
   - Date badge (orange), title, description
   - Orange dot on timeline

**States:**
- **Loading:** Spinner for page loads, skeleton for chat tool calls
- **Empty:** Initial chat greeting, no empty states for projects (3-4 guaranteed)
- **Error:** Inline error messages (red alert component from design system)
- **Success:** Visual feedback on actions (e.g., "Resume downloaded")

**Accessibility:**
- Semantic HTML (nav, main, article, section)
- ARIA labels for interactive elements (hamburger menu, send button)
- Keyboard navigation support (Tab, Enter for forms)
- Alt text for images
- Sufficient color contrast (design system already compliant)

**Responsive Breakpoints:**
- Desktop: max-width 1400px, centered
- Tablet: 768px - timeline collapses, nav becomes hamburger
- Mobile: cards single-column, reduced spacing

## Technical Requirements

### Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode enabled)
- **Package Manager:** pnpm
- **AI:** Vercel AI SDK v5 (`useChat` hook), GPT-4.1-mini model
- **Styling:** CSS Modules or Tailwind (defer decision) + design system variables
- **Content:** Markdown parsing (likely `gray-matter` + `remark`/`unified`)

### Performance
- **Page Load:** < 3s on 3G, target LCP < 2.5s
- **Chat Response:** Streaming starts < 500ms, streaming visible immediately
- **Tool Calls:** Show loading state, complete within 3-5s
- **Image Loading:** Lazy load below fold, use Next.js Image optimization
- **Bundle Size:** Code-split per page, target < 200KB initial JS

### Security
- **Authentication:** None required (public portfolio)
- **API Protection:** Rate limiting on `/api/chat` (e.g., 20 messages per 10 minutes per IP)
- **Input Sanitization:** Escape user messages before rendering (prevent XSS)
- **Environment Variables:** API keys (OpenAI) in `.env.local`, never committed

### SEO Optimization
- **Meta Tags:** Title, description, og:image for all pages
- **Structured Data:** JSON-LD for Person, CreativeWork (projects)
- **Sitemap:** Auto-generated sitemap.xml
- **Robots.txt:** Allow all
- **Dynamic Metadata:** Next.js Metadata API for per-page customization

### Integration Points
1. **OpenAI API (via Vercel AI SDK):**
   - Chat completions with streaming
   - Tool calling (function calling API)
   - Error handling for rate limits, timeouts

2. **Markdown Content:**
   - Parse frontmatter + body for projects, timeline, about
   - Build-time parsing for static generation
   - File structure: `content/projects/[slug].md`, `content/timeline/[id].md`, `content/about.md`

3. **GitHub API (future):**
   - Infrastructure for tool calls to GitHub
   - V1: mock responses or placeholder

## Implementation Notes

### Technology Choices

**Next.js App Router:**
- Reasoning: Modern React patterns, excellent SSG/SSR for SEO, API routes for chat backend
- File-based routing: `app/page.tsx` (home), `app/about/page.tsx`, `app/projects/page.tsx`, `app/projects/[slug]/page.tsx`

**Vercel AI SDK v5:**
- Reasoning: Simplifies streaming chat, tool calling, React integration with `useChat` hook
- Example usage:
```typescript
import { useChat } from 'ai/react';

const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
  api: '/api/chat',
});
```

**TypeScript Strict Mode:**
- `tsconfig.json`: `"strict": true`
- No `any` types, explicit return types on functions
- Zod for runtime validation (tool parameters)

**Markdown Parsing:**
- `gray-matter`: Extract frontmatter
- `remark` + `remark-html`: Render markdown to HTML (or `react-markdown` for component-based rendering)
- Load markdown files at build time for projects/timeline (SSG)

### AI System Prompt (Digital Twin Personality)

```
You are [Your Name]'s digital assistant, but you speak as [Your Name] in the first person.
Respond casually and personally, as if the user is chatting directly with [Your Name].

About me:
- [Brief background, key skills, personality traits]
- [Current role/status]
- [Notable projects/achievements]

Tone: Friendly, approachable, confident but not arrogant. Use first-person ("I built...", "My work focuses on...").

Answer questions about my projects, experience, skills, and background. If you don't know something, say so honestly.
If asked to schedule a call or get in touch, provide contact info: [email], [LinkedIn], [GitHub].
```

(Defer actual knowledge integration - V1 is infrastructure only)

### Error Handling

**Chat API Errors:**
- OpenAI rate limit (429): Retry with exponential backoff (Vercel AI SDK handles this), show "Slow response..." to user
- Network failure: Show error banner, "Retry" button
- Invalid input: Validate message length (max 1000 chars?), prevent empty messages

**Content Missing:**
- If markdown file not found: 404 page with link back to projects
- If resume PDF missing: Hide download button or show "Coming soon"

**Build-Time Errors:**
- Invalid markdown frontmatter: Log error, skip file, display warning in dev

### File Structure (Proposed)

```
app/
  layout.tsx              # Root layout, nav, design system CSS
  page.tsx                # Home (chat landing)
  about/
    page.tsx              # About page
  projects/
    page.tsx              # Projects grid
    [slug]/
      page.tsx            # Individual project page
  api/
    chat/
      route.ts            # Chat API endpoint (POST handler)
      tools.ts            # Tool definitions (mock for V1)
components/
  chat/
    ChatInterface.tsx     # useChat wrapper, message list, input
    Message.tsx           # Individual message bubble
    ToolCallLoader.tsx    # Loading indicator for tool calls
  projects/
    ProjectCard.tsx       # Card component for grid
    ProjectGrid.tsx       # Grid layout wrapper
  timeline/
    Timeline.tsx          # Timeline component
    TimelineItem.tsx      # Individual timeline entry
  layout/
    Header.tsx            # Nav bar
    Footer.tsx            # Footer with links
content/
  projects/
    project-1.md
    project-2.md
    project-3.md
  timeline/
    job-1.md
    job-2.md
    job-3.md
  about.md
public/
  resume.pdf            # Static resume
  images/
    profile.jpg
    projects/...
lib/
  markdown.ts           # Markdown parsing utilities
  ai/
    tools.ts            # AI tool definitions
    prompts.ts          # System prompt constants
design-document.html    # Reference (not in build)
requirements.md         # This file
```

## Out of Scope (V1)

- **AI Knowledge Base Integration:** System prompt only for V1, no markdown parsing or GitHub data fetching
- **Real Tool Implementations:** Mock/placeholder responses for tools in V1
- **Contact Form:** No contact form backend, just email link/download resume
- **Blog Section:** Not included, focus on projects/experience
- **Analytics Integration:** Can add later (Vercel Analytics is trivial)
- **Dark/Light Theme Toggle:** Design is dark-only for V1
- **Chat History Persistence:** No database, session-only (could add localStorage later)
- **Rate Limiting UI:** Basic backend rate limiting, no user-facing quota display
- **Project Filtering/Search:** Only 3-4 projects, no filter needed
- **Animations Beyond Design System:** Stick to design system hover effects, no complex page transitions

## Success Criteria

- [ ] Home page renders with functional chat interface using Vercel AI SDK
- [ ] Chat streams responses from GPT-4.1-mini, shows loading states for tool calls
- [ ] About page displays bio, timeline, and profile image from markdown content
- [ ] Projects page shows 3-4 project cards in responsive grid
- [ ] Individual project pages render markdown case studies with proper styling
- [ ] All pages follow neo-brutalist design system (toxic orange, hard shadows, thick borders)
- [ ] Site is mobile-responsive with hamburger nav at < 768px
- [ ] Resume PDF downloads from nav/about page
- [ ] SEO meta tags present on all pages (title, description, og:image)
- [ ] TypeScript strict mode enabled, no `any` types, build passes with no errors
- [ ] Lighthouse score: Performance > 90, Accessibility > 95, SEO > 95

## Relevant Files

**Existing:**
- `design-document.html` - Complete design system reference
- `CLAUDE.md` - Project context (Next.js, pnpm)

**To Create:**
- `app/layout.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/projects/page.tsx`
- `app/projects/[slug]/page.tsx`
- `app/api/chat/route.ts`
- `components/chat/ChatInterface.tsx`
- `components/chat/Message.tsx`
- `components/chat/ToolCallLoader.tsx`
- `components/projects/ProjectCard.tsx`
- `components/projects/ProjectGrid.tsx`
- `components/timeline/Timeline.tsx`
- `components/timeline/TimelineItem.tsx`
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `lib/markdown.ts`
- `lib/ai/tools.ts`
- `lib/ai/prompts.ts`
- `content/projects/project-1.md`
- `content/projects/project-2.md`
- `content/projects/project-3.md`
- `content/timeline/job-1.md`
- `content/timeline/job-2.md`
- `content/about.md`
- `public/resume.pdf`
- `styles/globals.css` (design system variables)
