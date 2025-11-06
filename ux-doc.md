Portfolio Site UX Design Document

Site Map & Navigation

┌─────────────────────────────────────────────────────────────┐
│  HEADER NAV (Always visible, neo-brutalist sticky header)  │
│  [SILAS RHYNEER] Home | Projects | Client Work | About |   │
│                 Timeline | Contact                          │
└─────────────────────────────────────────────────────────────┘

📍 Home (/)
└─> Chat interface with AI Silas
└─> Suggested next steps buttons after AI responses

📍 Projects (/projects)
└─> List view with previews (5 case studies)
└─> Links to individual case studies:
    ├─> /projects/co-gm
    ├─> /projects/mystica
    ├─> /projects/claude-code-ecosystem
    ├─> /projects/mercury-notes
    └─> /projects/compozelabs
        └─> Cross-link to Client Work page

📍 Client Work (/client-work)
└─> Single consolidated page
└─> Sections: CompozeLabs, ODAPT, Cancer Platform,
    Crypto Dashboard, Concord, Mimetic

📍 About (/about)
└─> Multi-section page (organized, scannable)
└─> Sections: Who I Am, Philosophy, Skills, Interests

📍 Timeline (/timeline)
└─> Reverse chronological (present → past)
└─> Links to case studies & client work
└─> Includes education, personal milestones

📍 Contact (/contact)
└─> Contact form + links (GitHub, LinkedIn, Email, Phone)

---
Page-by-Page Layouts

1. Home (/) - Chat Interface ✅ Already implemented

Current implementation is solid! Enhancement to add:

**Suggested Next Steps Implementation:**
- After AI responds, show 2-3 neo-brutalist buttons:
- [View Co-GM Case Study →]
- [See All Projects]
- [Learn More About Silas →]
- Buttons use your design system: toxic orange, 6px shadow, collapse on
click

---
2. Projects (/projects) - List with Previews

Layout: Single-column list, each project is a large card

┌────────────────────────────────────────────────────────┐
│  PROJECTS                                              │
│  The stuff I've built that I'm most proud of          │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ CO-GM                                    [View Case →] │
│ D&D Campaign Management Platform                       │
├────────────────────────────────────────────────────────┤
│ 1,500+ users | 50+ paying subscribers | 3 years dev   │
│                                                        │
│ Built a complete D&D campaign manager with custom     │
│ markdown linking, fully customizable calendars, and   │
│ a workshop system for sharing content.                │
│                                                        │
│ [JavaScript] [React] [Node] [MongoDB] [Azure]         │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ MYSTICA                                  [View Case →] │
│ AI-Powered Geo-RPG Game                               │
├────────────────────────────────────────────────────────┤
│ Team of 5 | CTO | 4-month development                 │
│                                                        │
│ Built a geo-location RPG where AI generates combat    │
│ encounters. Used fine-tuning to reduce costs by 30%   │
│ and built real-time multiplayer with WebSockets.      │
│                                                        │
│ [React Native] [PostgreSQL] [Redis] [Spring] [AI]     │
└────────────────────────────────────────────────────────┘

... [Continue for remaining 3 projects]

Design Details:
- Each card: 3px black border, 6px shadow (neo-brutalist)
- Hover: Shadow reduces to 3px, slight translate
- Tech badges: Small orange badges with black borders
- "View Case →" button: Secondary button style (white bg, black text)
- Metrics row: Bold stats separated by |
- 2-3 sentence summary: Concise, highlights key achievement

---
3. Individual Case Study Pages (e.g., /projects/co-gm)

Structure (take inspiration from your design doc):

┌────────────────────────────────────────────────────────┐
│  ← Back to Projects                                    │
├────────────────────────────────────────────────────────┤
│                                                        │
│  [Hero Image / Screenshot - 250px height]             │
│                                                        │
├────────────────────────────────────────────────────────┤
│  CO-GM                                                 │
│  D&D CAMPAIGN MANAGEMENT PLATFORM                      │
│                                                        │
│  1,500+ users | 50+ paying subscribers | cogm.tech    │
│  [JavaScript] [React] [Node] [MongoDB] [Azure]        │
│                                                        │
│  [Visit Live Site] [View on GitHub]                   │
└────────────────────────────────────────────────────────┘

┌─────────────────┬──────────────────────────────────────┐
│ QUICK STATS     │ THE STORY                            │
├─────────────────┤                                      │
│ Timeline        │ "As a lifelong Dungeon Master, I     │
│ Mar 2023-Jul 24 │  was frustrated by existing tools... │
│                 │                                      │
│ Users           │ [Personal narrative woven with        │
│ 1,500+ total    │  technical challenges]               │
│ 30 monthly      │                                      │
│                 │ [Inject personality, philosophy,     │
│ Tech Stack      │  values here - show WHO you are]    │
│ • JavaScript    │                                      │
│ • React         │                                      │
│ • Node/Express  │ TECHNICAL CHALLENGES                 │
│ • MongoDB       │                                      │
│ • Azure         │ 🔧 Custom Markdown Linking           │
│                 │ The @note_name syntax was a          │
│ Role            │ nightmare to implement...            │
│ Solo Developer  │                                      │
│                 │ [Explain technical achievement]      │
│ Links           │                                      │
│ [GitHub]        │ 🔧 Custom Calendar System            │
│ [Live Demo]     │ Completely customizable calendars... │
│                 │                                      │
└─────────────────┴──────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ KEY FEATURES                                           │
├────────────────────────────────────────────────────────┤
│                                                        │
│ [Feature cards in grid - 2 cols on desktop]           │
│ ┌──────────────────┐ ┌──────────────────┐            │
│ │ Custom Markdown  │ │ Calendar System  │            │
│ │ [icon/visual]    │ │ [icon/visual]    │            │
│ └──────────────────┘ └──────────────────┘            │
│                                                        │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ IMPACT & RESULTS                                       │
├────────────────────────────────────────────────────────┤
│ ✓ 1,500+ users discovered organically                 │
│ ✓ 50+ paying subscribers                              │
│ ✓ Still active 3 years later with zero marketing      │
│ ✓ User quote: "I've been looking for this for ages"   │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ DEVELOPMENT PHILOSOPHY                                 │
├────────────────────────────────────────────────────────┤
│ "D&D is about interacting with people. The tool       │
│  should never get in the way..."                      │
│                                                        │
│ [Inject your design philosophy - speed, UX, etc.]     │
│ [Show WHO you are as a developer]                     │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ RELATED WORK                                           │
├────────────────────────────────────────────────────────┤
│ [Card: Mystica] [Card: Mercury Notes]                 │
│ "Check out these related projects"                    │
└────────────────────────────────────────────────────────┘

Key Design Principles:
1. Inject Personality: Weave in your values, philosophy, competitive
nature, "Silas velocity"
2. Tell Stories: Not just "I built X", but "As a GM for 10 years, I
noticed Y problem..."
3. Technical Depth: Show the hard problems you solved (fine-tuning,
observer pattern, etc.)
4. Visual Hierarchy: Big bold titles, clear sections, scannable
5. Neo-Brutalist Style: Every section is a card with borders and shadows

---
4. Client Work (/client-work) - Consolidated Page

Layout: Timeline-style or sectioned list

┌────────────────────────────────────────────────────────┐
│  CLIENT WORK                                           │
│  Consulting & agency projects that showcase my         │
│  versatility across AI, fintech, healthcare, and more │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ FEATURED PROJECT                                       │
├────────────────────────────────────────────────────────┤
│ COMPOZELABS - AI VOICE SALES COACHING                  │
│ Jan 2025 - Feb 2025 | Minneapolis, MN                  │
│                                                        │
│ Built voice-interactive sales coaching tool with       │
│ novel "observer pattern" architecture. Delivered in    │
│ 1 week (67% faster than 4-6 week estimate).           │
│                                                        │
│ 📊 25% improvement in sales rep pass-rates             │
│ ⚡ Colleagues coined term "Silas velocity"             │
│                                                        │
│ [View Full Case Study →]                               │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ CONSULTING CLIENTS (Rhyneer Consulting LLC)           │
└────────────────────────────────────────────────────────┘

├─ ODAPT (YC X25) ──────────────────────────────────────┤
│  Frontend Architecture Overhaul | ~1 month (2025)     │
│  Refactored 10,000+ lines to TypeScript + Next.js     │
│  • 45% performance improvement                         │
│  • 60% increase in maintainability                     │
│  • 35% reduction in runtime defects                    │
│  [TypeScript] [Next.js 14] [React 18]                 │
└────────────────────────────────────────────────────────┘

├─ CANCER EDUCATION PLATFORM ───────────────────────────┤
│  Healthcare Startup | ~1 month (2024-2025)            │
│  AI-powered platform aggregating cancer information    │
│  • Multi-source aggregation (web, AI, clinician)      │
│  • Role-based access control (RBAC)                    │
│  • Intelligent web scraping with Firecrawl            │
│  [React] [TypeScript] [FastAPI] [OpenAI]              │
└────────────────────────────────────────────────────────┘

... [Continue with remaining clients]

┌────────────────────────────────────────────────────────┐
│ AGENCY WORK                                            │
└────────────────────────────────────────────────────────┘

├─ CONCORD USA ─────────────────────────────────────────┤
│  Enterprise Consulting | Aug 2022 - Dec 2024          │
│  2+ years, 2 major projects                           │
│                                                        │
│  Project 1: Timesheet Platform                        │
│  500 users, 2,000 timesheets/month                    │
│  [React] [PostgreSQL] [Spring Boot] [Salesforce]      │
│                                                        │
│  Project 2: 5,000+ Employee Health Tech Company       │
│  E-commerce web app for international hearing aid co  │
│  "2x commits and 5x code vs any other developer"      │
│  [React] [Knockout.js] [Blazor] [C# .NET]            │
└────────────────────────────────────────────────────────┘

Design Notes:
- CompozeLabs prominently featured at top (it has own case study)
- Collapsible sections or accordion-style for each client
- Consistent card format: Timeline | Tech Stack | Key Metrics
- Link to CompozeLabs full case study
- Neo-brutalist cards with black borders, orange accents for metrics

---
5. About (/about) - Bento Grid Dashboard with Expandable Sections

Layout: Interactive grid where all sections are visible as preview cards. Click any card to expand in place.

┌────────────────────────────────────────────────────────┐
│  ABOUT ME                                              │
│  Click any section to explore                          │
└────────────────────────────────────────────────────────┘

**BENTO GRID LAYOUT (Desktop - responsive grid):**

**Row 1: Profile (spans full width, never collapses)**
┌─────────────────────────────────────────────────────────┐
│ [Profile Photo] SILAS RHYNEER                           │
│ 200x200px       Software Engineer & AI Specialist      │
│                                                         │
│                 I build intelligent systems that scale, │
│                 solve impossible problems, and create   │
│                 magic moments for users.                │
│                                                         │
│                 [GitHub] [LinkedIn] [Email] [Phone]     │
└─────────────────────────────────────────────────────────┘

**Row 2: Origin & Philosophy (2 cards side-by-side)**
┌──────────────────────────────┐ ┌────────────────────────┐
│ 🏔️ WHO I AM                  │ │ 🧠 PHILOSOPHY          │
│                              │ │                        │
│ Alaska → Hawaii → Carleton   │ │ "If it's impossible,   │
│ → San Francisco              │ │ that's an opportunity" │
│                              │ │                        │
│ Born and raised in Alaska.   │ │ Speed • Optimization • │
│ My dad grew up in a log      │ │ Creating Magic         │
│ cabin, made sure my...       │ │                        │
│                              │ │ I'm obsessed with      │
│ [State: Collapsed]           │ │ workflow optimization  │
│ Click to expand ↓            │ │ and building tools...  │
│                              │ │                        │
└──────────────────────────────┘ │ [State: Collapsed]     │
                                 │ Click to expand ↓      │
                                 └────────────────────────┘

**Row 3: Skills & Interests (2 cards, Skills narrower)**
┌────────────────────────┐ ┌──────────────────────────────┐
│ 🛠️ TECHNICAL SKILLS    │ │ 🎲 INTERESTS & HOBBIES       │
│                        │ │                              │
│ [AI/LLM] [Full-Stack]  │ │ D&D GM • 20k×20k pixel map   │
│ [DevTools] [Infra]     │ │ Heart Rush TTRPG • Foosball  │
│                        │ │ Music (guitar/drums)         │
│ AI/LLM • Full-Stack •  │ │                              │
│ DevTools • Automation  │ │ GM for 10+ years. Built the  │
│                        │ │ largest fantasy map on the   │
│ [State: Collapsed]     │ │ internet - 20k × 20k pixels  │
│ Click to expand ↓      │ │                              │
└────────────────────────┘ │ [State: Collapsed]           │
                           │ Click to expand ↓            │
                           └──────────────────────────────┘

**Row 4: Goals (spans full or most of width)**
┌─────────────────────────────────────────────────────────┐
│ 📈 WHAT I'M LOOKING FOR                                 │
│                                                         │
│ Seeking senior/tech lead roles • DevTools • AI infra   │
│ High-growth startups where speed & innovation matter   │
│                                                         │
│ [State: Collapsed]                                      │
│ Click to expand ↓                                       │
└─────────────────────────────────────────────────────────┘

---

**INTERACTION MECHANICS:**

**Collapsed State (default):**
- Shows 2-4 lines of preview text
- "Click to expand ↓" indicator at bottom
- 3px black border, 6px black shadow
- Hover: shadow reduces to 3px, slight translate (3px, 3px)
- Cursor: pointer

**Expanded State (when clicked):**
- Card smoothly expands vertically (CSS height animation)
- Shows full content for that section
- "Click to collapse ↑" indicator at bottom
- Other cards remain visible but push down
- Border changes to 3px orange
- Shadow becomes 6px orange offset
- Cursor: pointer

**Animation:**
```css
transition:
  height 0.3s ease-out,
  border-color 0.15s ease,
  box-shadow 0.15s ease,
  transform 0.15s ease;
```

**Behavior Options:**
- **Option A:** Only ONE card expanded at a time (clicking new card collapses current)
- **Option B:** Multiple cards can be expanded simultaneously
- **Recommendation:** Option A for cleaner UX

---

**CONTENT FOR EACH CARD:**

**🏔️ WHO I AM**

*Collapsed (preview):*
"Alaska → Hawaii → Carleton → San Francisco

Born and raised in Alaska. My dad grew up in a log cabin, and made sure my childhood was full of crazy camping experiences..."

*Expanded (full content):*
- Full personal story (~4-5 paragraphs):
  - Alaska upbringing (fishing, camping, skiing, flying, D&D)
  - Dad's log cabin background
  - Boarding school in Hawaii (2 years) - foosball obsession begins
  - Carleton College (CS major, AI/ML focus, distinction in capstone)
  - Move to SF in Feb 2025 for startup scene
- Optional: Small image grid (Alaska mountains, D&D dice, foosball table)
- Timeline bullets: Key milestones

**🧠 PHILOSOPHY & APPROACH**

*Collapsed (preview):*
"If the problem seems impossible, then that's an opportunity"

Three pillars: Speed • Optimization • Creating Magic"

*Expanded (full content):*
- Opening quote in large text
- **⚡ SPEED ("Silas Velocity")**
  - Obsessed with workflow optimization
  - Building internal tools, memorizing keybinds
  - "Colleagues coined term 'Silas velocity'"
  - Most gains from removing speed bumps before execution
- **🎯 OPTIMIZATION**
  - Making things faster, better, stronger
  - Both personal workflows and system performance
  - Always seeking next 10x improvement
  - Example: Fine-tuning in Mystica saved 30% costs
- **✨ CREATING MAGIC**
  - "Oh my god, it just magically does it for me" moments
  - Building tools that surprise and delight
  - Examples: Co-GM auto-linking, Mercury Notes tagging
  - What drives my work

**🛠️ TECHNICAL SKILLS**

*Collapsed (preview):*
"[AI/LLM] [Full-Stack] [DevTools] [Infrastructure]

AI/LLM Integration • Full-Stack Development • DevTools & Automation • Cloud Infrastructure"

*Expanded (full content):*
Organized by category with badge clouds:

**AI & LLM Integration**
[GPT-4.1] [Claude] [Fine-tuning] [RAG] [Embeddings] [Prompt Engineering] [Agent Orchestration]

**Full-Stack Development**
[TypeScript] [React] [Next.js] [Node.js] [Python] [FastAPI] [PostgreSQL] [MongoDB] [Redis] [Supabase]

**DevTools & Automation**
[Claude Code] [Agent Orchestration] [Git Hooks] [Custom CLIs] [Workflow Optimization] [MCP Servers]

**Infrastructure & Cloud**
[Docker] [Kubernetes] [AWS] [Vercel] [Azure] [WebSockets] [Real-time Systems]

(Each badge: neo-brutalist style, hover effect - shadow shift)

**🎲 INTERESTS & HOBBIES**

*Collapsed (preview):*
"D&D GM for 10+ years • 20k×20k pixel fantasy map
Heart Rush TTRPG • Foosball champion • Music (guitar/drums)

GM for 10+ years. Built the largest fantasy map on the internet..."

*Expanded (full content):*
2x3 grid of detailed hobby cards:

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 🎲 D&D          │ │ 🗺️ Map Making   │ │ 🏓 Foosball     │
│                 │ │                 │ │                 │
│ GM for 10+      │ │ 20k × 20k pixel │ │ Only 2-7 people │
│ years. Run all  │ │ fantasy map.    │ │ in the world    │
│ campaigns in    │ │ Took 5 years to │ │ can beat me     │
│ my world        │ │ complete. First │ │ consistently.   │
│ "Alaria"        │ │ Google result!  │ │ Played obsess-  │
│                 │ │                 │ │ ively in HS     │
└─────────────────┘ └─────────────────┘ └─────────────────┘

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 🎸 Music        │ │ ⚔️ Heart Rush   │ │ 🏔️ Outdoors     │
│                 │ │                 │ │                 │
│ Guitar & drums. │ │ Custom TTRPG    │ │ Alaska camping, │
│ Love playing    │ │ rulebook. Fixed │ │ fishing, skiing,│
│ music with      │ │ D&D's problems  │ │ flying, hiking. │
│ friends         │ │ with tactical   │ │ Grew up on      │
│                 │ │ combat system   │ │ boats & planes  │
└─────────────────┘ └─────────────────┘ └─────────────────┘

(Each card: neo-brutalist border, small icon/emoji, 3-4 sentences)

**📈 WHAT I'M LOOKING FOR**

*Collapsed (preview):*
"Seeking senior engineering or tech lead roles
DevTools • AI infrastructure • High-growth startups where speed & innovation are valued"

*Expanded (full content):*
- **What I want:** Senior engineering or tech lead role
- **Why:** Take ownership of complex technical challenges
- **What I build:** Things that seem impossible, create magic for users
- **Ideal environment:**
  - DevTools companies
  - AI infrastructure
  - High-growth startups where speed & innovation are valued
- **What I bring:** "Silas velocity", obsessive optimization, full-stack AI expertise
- **CTAs:** [View My Timeline →] [Contact Me →]

---

**RESPONSIVE BEHAVIOR:**

**Desktop (>1024px):**
- Bento grid with varied card sizes
- Profile: full width
- Who I Am + Philosophy: 50/50 split
- Skills (40%) + Interests (60%): uneven split for visual interest
- Goals: full width

**Tablet (768px - 1024px):**
- Profile: full width
- Cards stack to 2 columns or full width
- Smaller cards go full width first

**Mobile (<768px):**
- All cards full width (single column)
- Profile: Photo above text (not side-by-side)
- Smaller preview text (1-2 lines instead of 3-4)
- Collapsible cards still work the same way

---

**IMPLEMENTATION DETAILS:**

**State Management:**
```typescript
const [expandedCard, setExpandedCard] = useState<string | null>(null)

const toggleCard = (cardId: string) => {
  if (expandedCard === cardId) {
    setExpandedCard(null) // Collapse if already expanded
  } else {
    setExpandedCard(cardId) // Expand new card, auto-collapse others
  }
}
```

**Accessibility:**
- Each card is a `<button>` with `role="button"` or clickable div with proper semantics
- `aria-expanded={expandedCard === 'cardId'}` on each card
- Keyboard navigation: Tab to focus, Enter/Space to toggle
- Focus visible state: orange border + shadow (matches hover)
- Screen reader: "Click to expand" / "Click to collapse" text

**CSS Classes:**
```css
.about-card {
  border: 3px solid var(--color-black);
  box-shadow: 6px 6px 0 var(--color-black);
  transition: all 0.15s ease;
  cursor: pointer;
  overflow: hidden;
}

.about-card:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 var(--color-black);
}

.about-card.expanded {
  border-color: var(--color-primary);
  box-shadow: 6px 6px 0 var(--color-primary);
}

.about-card-content {
  max-height: 100px; /* Collapsed height */
  transition: max-height 0.3s ease-out;
}

.about-card.expanded .about-card-content {
  max-height: 2000px; /* Expanded height (or use auto with JS) */
}
```

**Design Tokens to Add:**
- `--card-collapsed-height`: varies by card (100px - 150px)
- `--card-expanded-max-height`: 2000px (or calculate dynamically)
- Use CSS Grid for bento layout with `grid-template-columns` and responsive breakpoints

---

**VISUAL ENHANCEMENTS:**

**Preview Text Fade:**
- When collapsed, add gradient fade on last line to indicate more content
- Use `linear-gradient` mask or pseudo-element

**Expand/Collapse Indicator:**
- Small text at bottom: "Click to expand ↓" / "Click to collapse ↑"
- Style: `font-size: 12px; opacity: 0.7; text-transform: uppercase;`
- Animates on hover (slight bounce)

**Badge Hover Effects (in Skills card):**
- Each tech badge: mini neo-brutalist style
- Hover: shadow reduces, slight translate
- Could show tooltip with proficiency level (optional)

---

Design Notes:
- **Profile card:** Always visible, provides context, never collapses
- **Varied card sizes:** Creates visual interest (not uniform grid)
- **One expanded at a time:** Cleaner UX, prevents overwhelming content
- **Smooth animations:** Height transition must feel polished (use max-height trick)
- **Mobile-first:** Ensure touch targets are large enough (min 44px height)
- **Content density:** Preview text should entice without revealing everything

---
6. Timeline (/timeline) - Reverse Chronological

Layout: Vertical timeline with alternating sides (mobile: left-aligned)

┌────────────────────────────────────────────────────────┐
│  TIMELINE                                              │
│  My journey from Alaska to San Francisco              │
│  (and everywhere in between)                          │
└────────────────────────────────────────────────────────┘

                [Timeline dot]
                        │
    ┌────────────────┴─────────────────┐
    │ 2025 - PRESENT                   │
    │ San Francisco                    │
    ├──────────────────────────────────┤
    │ Selective consulting + seeking   │
    │ full-time senior role            │
    │                                  │
    │ [Odapt (YC X25)] [Mimetic]       │
    │ [See Client Work →]              │
    └──────────────────────────────────┘
                        │
                [Timeline dot]
                        │
        ┌────────────┴───────────────┐
        │ JAN 2025 - FEB 2025        │
        │ CompozeLabs, Minneapolis   │
        ├────────────────────────────┤
        │ AI Voice Sales Coaching    │
        │                            │
        │ [View Case Study →]        │
        └────────────────────────────┘
                        │
                [Timeline dot]
                        │
    ┌────────────────┴─────────────────┐
    │ AUG 2024 - DEC 2024              │
    │ Mystica (Tricky Djinn LLC)       │
    ├──────────────────────────────────┤
    │ CTO & Lead Developer             │
    │                                  │
    │ [View Case Study →]              │
    └──────────────────────────────────┘
                        │
                [Timeline dot]
                        │
        ┌────────────┴───────────────┐
        │ MAR 2023 - JUL 2024        │
        │ Co-GM Development          │
        ├────────────────────────────┤
        │ Solo SaaS project          │
        │ 1,500+ users               │
        │                            │
        │ [View Case Study →]        │
        └────────────────────────────┘
                        │
                [Timeline dot]
                        │
    ┌────────────────┴─────────────────┐
    │ AUG 2022 - DEC 2024              │
    │ Concord USA                      │
    ├──────────────────────────────────┤
    │ Software Consultant              │
    │ 2+ years, 2 major projects       │
    │                                  │
    │ [See Client Work →]              │
    └──────────────────────────────────┘
                        │
                [Timeline dot]
                        │
        ┌────────────┴───────────────┐
        │ 2018 - 2022                │
        │ Carleton College           │
        ├────────────────────────────┤
        │ Computer Science Major     │
        │ AI/ML Focus                │
        │                            │
        │ Distinction in capstone    │
        └────────────────────────────┘
                        │
                [Timeline dot]
                        │
    ┌────────────────┴─────────────────┐
    │ 2016 - 2018                      │
    │ Boarding School, Hawaii          │
    ├──────────────────────────────────┤
    │ 2 years away from Alaska         │
    │                                  │
    │ Played foosball obsessively      │
    └──────────────────────────────────┘
                        │
                [Timeline dot]
                        │
        ┌────────────┴───────────────┐
        │ CHILDHOOD                  │
        │ Alaska                     │
        ├────────────────────────────┤
        │ Born and raised in Alaska  │
        │                            │
        │ Camping, fishing, skiing,  │
        │ flying, D&D, map-making    │
        └────────────────────────────┘

Design Notes:
- Use timeline component from design doc (alternating sides, dots,
borders)
- Each item: Date, location/role, brief description, links
- Include personality: "Played foosball obsessively", "Built 20k x 20k
pixel map"
- Links to case studies, client work page, or external sites
- Mobile: Collapse to left-aligned single column

---
7. Contact (/contact) - Simple Form

Layout: Centered form with social links

┌────────────────────────────────────────────────────────┐
│  GET IN TOUCH                                          │
│  Let's build something incredible together             │
└────────────────────────────────────────────────────────┘

┌─────────────────┬──────────────────────────────────────┐
│ [Contact Form]  │ OTHER WAYS TO REACH ME               │
│                 │                                      │
│ Name            │ 📧 silas@example.com                 │
│ [_____________] │ [Copy] [Email Me]                    │
│                 │                                      │
│ Email           │ 💼 LinkedIn                           │
│ [_____________] │ linkedin.com/in/silasrhyneer         │
│                 │ [Visit Profile]                      │
│ Message         │                                      │
│ [_____________] │ 💻 GitHub                             │
│ [_____________] │ github.com/silasrhyneer              │
│ [_____________] │ [View Repos]                         │
│                 │                                      │
│ [Send Message]  │ 📱 (555) 123-4567                    │
│                 │ [Call] [Text]                        │
└─────────────────┴──────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ AVAILABILITY                                           │
├────────────────────────────────────────────────────────┤
│ I'm currently seeking:                                 │
│ • Full-time senior engineering or tech lead roles     │
│ • Selective consulting projects (AI/LLM focused)      │
│                                                        │
│ Response time: Usually within 48 hours                │
└────────────────────────────────────────────────────────┘

Design Notes:
- Form fields use design system (3px borders, orange focus state)
- Social links: Large buttons with icons
- Clear availability statement
- Submit button: Primary button style (orange bg, black text, shadow
collapse)

---
Additional UX Considerations

Navigation Flow Enhancements

1. Chat "Suggested Next Steps" Implementation

After the AI responds, dynamically show 2-3 contextual buttons based on
the conversation:

// Example logic
const getSuggestedNextSteps = (lastAIMessage: string) => {
if (lastAIMessage.includes('Co-GM')) {
return [
    { label: 'View Co-GM Case Study', href: '/projects/co-gm' },
    { label: 'See All Projects', href: '/projects' },
]
}
if (lastAIMessage.includes('consulting') ||
lastAIMessage.includes('client')) {
return [
    { label: 'View Client Work', href: '/client-work' },
    { label: 'Contact Me', href: '/contact' },
]
}
// Default
return [
{ label: 'See All Projects', href: '/projects' },
{ label: 'Learn About Me', href: '/about' },
]
}

Display as neo-brutalist buttons below AI message:
<div className="flex gap-3 mt-4">
{suggestedSteps.map(step => (
<Link 
    href={step.href}
    className="btn btn-secondary btn-small"
>
    {step.label} →
</Link>
))}
</div>

---
2. Breadcrumbs on Case Study Pages

Add breadcrumbs at top of each case study:

← Back to Projects / Co-GM

<div className="text-sm mb-6">
<Link href="/projects" className="text-primary 
hover:text-primary-dark">
← Back to Projects
</Link>
<span className="text-gray-mid mx-2">/</span>
<span className="text-white">Co-GM</span>
</div>

---
3. Cross-Links Between Related Projects

At bottom of each case study, show related projects:

<section className="mt-12">
<h3 className="text-2xl font-black mb-6">Related Work</h3>
<div className="grid grid-cols-2 gap-6">
<ProjectCard 
    title="Mystica"
    subtitle="AI-Powered Geo-RPG"
    href="/projects/mystica"
/>
<ProjectCard
    title="Mercury Notes"
    subtitle="AI Note-Taking"
    href="/projects/mercury-notes"
/>
</div>
</section>

---
Responsive Considerations

Mobile Adaptations:
- Timeline: Single column, left-aligned (already in design doc)
- Projects list: Full-width cards, reduce padding
- Case study sidebar: Move "Quick Stats" below main content on mobile
- Navigation: Hamburger menu (already in design doc)
- Chat: Full-screen on mobile

Tablet (768px):
- Card grid: 2 columns → 1 column
- Timeline: Switch to mobile layout
- Maintain navigation bar

---
Content Organization Tips

For Case Study Pages (inject personality):

1. Opening Hook: Personal story, not just tech
- ❌ "I built a D&D tool"
- ✅ "As a GM for 10+ years, I was frustrated by existing tools..."
2. Technical Achievements: Explain WHY it's hard
- ❌ "Custom markdown linking"
- ✅ "When users rename a note, all @references must auto-update across
every note—a nightmare to implement..."
3. Philosophy Injection: Show your values
- "Speed is critical during gameplay—only 1-2 clicks between any
feature"
- "I believe tools should create magic moments"
4. Competitive Drive: When appropriate
- "Delivered in 1 week (67% faster than estimated)"
- "Colleagues coined the term 'Silas velocity'"

---
Implementation Checklist

Here's what you need to build:

Phase 1: Navigation & Structure
- Create route structure: /projects, /projects/[slug], /client-work,
/about, /timeline, /contact
- Build header navigation component (6 items)
- Style header with neo-brutalist theme

Phase 2: Projects Page
- Create /projects list view with 5 project cards
- Build reusable ProjectPreviewCard component
- Add tech badge component
- Link to individual case studies

Phase 3: Case Study Pages
- Create dynamic route /projects/[slug]
- Build case study template with sections:
- Hero image
- Stats sidebar
- Story section
- Technical challenges
- Key features
- Impact & results
- Related work
- Create 5 case study pages (Co-GM, Mystica, Claude Code, Mercury Notes,
CompozeLabs)

Phase 4: Client Work Page
- Create /client-work consolidated page
- Build client work card component
- Add expandable/collapsible sections (optional)
- Link CompozeLabs to its case study

Phase 5: About Page
- Create /about multi-section page
- Build profile section with image + bio
- Add philosophy section
- Add skills section with badge cloud
- Add interests grid (6 cards)
- Add "What I'm Looking For" section

Phase 6: Timeline Page
- Create /timeline reverse chronological layout
- Implement timeline component (from design doc)
- Add all timeline items (present → childhood)
- Add links to case studies & external pages

Phase 7: Contact Page
- Create /contact form
- Implement contact form with validation
- Add social links section
- Add availability statement

Phase 8: Chat Enhancements
- Add "Suggested Next Steps" buttons after AI responses
- Implement dynamic suggestions based on context

Phase 9: Polish
- Add breadcrumbs to case study pages
- Add "Related Work" sections to case studies
- Test responsive behavior (mobile/tablet)
- Add smooth scroll animations
- Test all cross-links