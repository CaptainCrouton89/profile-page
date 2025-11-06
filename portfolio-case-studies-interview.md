# Portfolio Case Studies Interview - Silas Rhyneer
**Date:** November 5, 2025
**Purpose:** Gathering detailed information for 5 main case studies + client work page

---

## Project Overview

### Main Case Studies (5):
1. **Co-GM** - 1,500+ users, 50+ paying subscribers, solo-developed SaaS
2. **Mystica** - AI-powered geo-RPG, novel LLM fine-tuning architecture
3. **Claude Code Ecosystem** - .claude (478 stars) + klaude + MCP Boilerplate (78 stars)
4. **Mercury Notes** - AI-powered note-taking with semantic search
5. **CompozeLabs** - Voice-interactive sales coaching tool (links to client work page)

### Client Work Page (separate timeline/abbreviated):
- CompozeLabs (primary feature)
- ODAPT (YC W25)
- Cancer Education Platform (C0)
- Crypto Trading Dashboard
- Humanity's Voice
- Mimetic (video generation pipeline)

---

## Case Study 1: Co-GM

### Basic Info
**URL:** cogm.tech
**Users:** 1,500+ total, 30 monthly active users (still finding it organically after 3 years)
**Revenue:** 50+ paying subscribers
**Timeline:** Started 3 years ago (Mar 2023 - Jul 2024)
**Tech Stack:** JavaScript, Express, Node, Azure App Services, CSS, MongoDB, React

### Technical Achievements

**Custom Markdown Linking System:**
Question: Can you describe the actual syntax for linking?
Answer: The syntax was @note_name. When users rename a note, all references automatically update across all notes. This was a nightmare to implement because writing custom markdown where an @ symbol turns something into a clickable link, but then deleting parts of it intelligently updates the link. When you create that link, it's clickable, and if you edit the name of the link, all the references to it have to also update. It's not like a normal markdown link where you just update the URL. Here the text IS the URL, which makes it a lot more complicated.

**Custom Calendar System:**
Question: How complex was the calendar implementation?
Answer: These were completely customizable calendars. Each GM can create a completely customized calendar for their campaign with their own number of weeks, number of days, number of months, every month with a different number of days. It supported all of that jazz, and that's just like a giant freaking mess. Keeping track of how Monday is a different day of the month, and those days are different per month each year as well. It's hellish. I was also really proud of getting it working.

The system handles:
- Custom week lengths (e.g., 8-day weeks)
- Custom month lengths (e.g., 13 months, 28 days each)
- Recurring events (e.g., always the third day of the fourth month of each year, or always the second Monday)
- All of this required "a whole bunch of really annoying modulo math"

**Workshop/Sharing System:**
Question: Did you build any discovery/rating system?
Answer: Yes, I did have a rating system. Users could rate published content. The data structures for that were kind of annoying because I was using a NoSQL database. I had to store the score both on the object that was in the store (for performance, to avoid querying every single user's scores) and also save the score on the user. So it was performant for retrieval but then making edits had to update in two different places.

**Content Sharing Architecture:**
Users could publish:
- Calendars
- Compendia (encyclopedias/wikis for their world)
- Random tables

The owner can edit, other users can access but can't edit. When someone subscribes to another user's wiki, all those pages become linkable from their own notes. "That's kind of a headache to set up."

### Monetization
**Free Tier:** Access to one of everything (one campaign, one compendium, one set of random tables)
**Paid Tier:** Unlocks more campaigns, more tools, more random tables. Users get a taste of everything, but active GMs running multiple campaigns or who don't want to delete old campaigns (many GMs find it sentimental) have to pay to upgrade.

### User Feedback & Growth
**Discovery:** Primarily Google Search and word of mouth
**User Quote (paraphrased):** "I've been looking for a tool that does everything that Co-GM does for ages. And I can't believe I found this. Oh my God."

Despite no active development, still receiving messages in Discord: "Oh, my God, thank you so much for building this incredible tool."

### Development Philosophy
**Built Pre-LLMs:** "This is all pre-LLMs too. This is a big solo endeavor using my own fucking brain."

**Speed Focus:** The entire tool was designed for speed during gameplay:
- "D&D is a game about interacting with people. It's really important that you spend as little time fucking around trying to use your notes and as much time as possible actually interacting with the people around you in the game."
- Scratch pad feature: Hold Command and scroll side to side to slide between different notes horizontally
- "There's only one or two clicks between any single fucking thing in the entire thing"
- Can type @person_name to create a note that references that person, clicking on it creates a new note that gets added to the wiki

**Design Philosophy:**
"It's really important to be able to take notes lightning fast and then have them get organized later."

---

## Case Study 2: Mystica

### Basic Info
**Company:** Tricky Djinn LLC (co-founded)
**Role:** CTO and lead developer
**Team Size:** 5 people
**Timeline:** Aug 2024 - Dec 2024
**URL:** mystica.cloud (no longer active)
**Tech Stack:** React Native, PostgreSQL, Redis, Spring

### Core Concept
Geo-RPG powered by AI. Text-based adventure game where you wander the real world, go to real locations, and fight fantasy creatures. Unlike AR games, focuses on combat experience itself, aiming to replicate text adventures and tabletop roleplaying games.

Question: How does the game determine what encounter to spawn at a specific GPS location?
Answer: We used AI to fill in all locations around the world. We used the Google Maps API to find landmarks and we had different types of encounters at different locations. We tried to match the location data (which was its own JSON object about that location) and then had the encounter and combat be relevant to that specific type of location. So it was all pre-seeded encounter types, but we had functionality to regenerate them every day or week so that you could go back to the same location and fight a new boss that was located there.

### Technical Challenge: LLM as Game Engine
"From a technical standpoint, this is quite challenging. Despite the 'magic' of AI, we're asking a lot of it—we're asking it to act as a game engine."

**Initial Approach:**
- Used a sequence of prompts where each step wraps user content in specific instructions on processing and output format
- Spits out XML
- Gets repeated until steps are completed
- Finally outputs response for outcome, along with metadata for affecting user health and state of encounter
- "This, I believe, is also partially how OpenAI's newest strawberry model works"

### Major Optimization: Fine-Tuning for Cost Reduction

Question: Can you walk me through the fine-tuning process?
Answer: We would have the larger model go through the same prompts the smaller model would later go through. We'd give this really customized specialized prompt for having it create output for scoring the realism and effectiveness of an action, for example. Then we would take that output, that structured JSON output, and combine it with a much simpler input for the smaller model.

**The Result:**
- Could shorten input by substantial amount
- Rather than using really lengthy instructions for the large model, we used much more pared down set of instructions containing just the key variable data
- The smaller model knew to output JSON following all those instructions without including instructions for how to output it
- All of its fine-tuning was on this data

**Model Used (Historical):** GPT-4 Mini (what was available in August 2024)

**Combat System Architecture:**
- 4 different AI steps required to turn user actions into full round of combat
- Each step had its own prompt that was reduced via fine-tuning
- Example: For big model: "Here's a player action: 'I swing my sword at the dragon's wing.' Output JSON scoring realism (0-100) and effectiveness (0-100) with reasoning."
- For fine-tuned small model: Just "Player action: 'I swing my sword at the dragon's wing.'" and it outputs the same JSON structure

**Cost Savings:**
- Reduced input token count by over 50%
- Saved 30% on projected operating costs
- "Despite fine-tuned models costing more, this new process reduced our input token-count by over 50%, saving us 30% on our projected operating costs"

### Multiplayer Infrastructure
"Set up multiplayer using websocket connections and Redis 'sessions', balancing lightning fast communication between players with a scalable backend and database."

### Deployment
"Set up multiple environments for development, testing, and live, with effortless deployment for each."

---

## Case Study 3: Claude Code Ecosystem (.claude + klaude + MCP Boilerplate)

### Narrative Arc & Philosophy

**The Genesis:**
"I'm an optimizer and I love making my own workflows faster, better, stronger, etc. I discovered Claude pretty early on and discovered how customizable it was especially with these subagents. These subagents really blew me away because I almost immediately realized that you could section off context in a subagent."

**Core Realizations:**
1. **Long-running tasks are critical:** "You want to be able to run the agent for a long, long time with high accuracy"
2. **Planning is paramount:** "Research 10 times, plan 5 times, execute once because fixing a bad execution of these agents is almost impossible"
3. **Context management is key:** Subagents and MCPs encapsulate logic in fewer tokens

**The Journey Through Tools:**

### Phase 1: Early MCP Experiments

**MCP App Builder (Early Work):**
- MCP tool that guided CLOD/CURSOR through building applications 0 to 1
- Allowed saving tasks to Supabase database
- Multiple CURSOR windows open (before multiple tabs existed)
- Each agent could claim tasks, add a lock to that row, and execute while other agents worked in parallel
- "All the agents could be working at the same time for all these independent tasks of like implementing API endpoints"

**Lessons Learned:**
"Tasks aren't necessarily all independent and there's a lot of nuance to this orchestration because you don't want agents running over each other. Despite even if they're working on completely separate tasks they'll each implement their own util file for example."

### Phase 2: Custom Agent Orchestration System (Pre-Claude Code)

**Chrysalis System:**
- Built before Claude Code existed
- Used Vercel AI SDK
- Project manager agent could create new subagents with custom system prompts and custom collections of tools
- Key feature: Agents could create other subagents (recursion)
- **Asynchronous tool calls** (hooks before hooks were a thing)

**Async Tool Call Architecture:**
Question: How did async tool calls work?
Answer: Tool calls were asynchronous. When they fired off, a receipt was returned with a tool ID. But the actual response from the tool could come back much later as a user message. I had a queue of messages that would get filled up as tool calls completed. Once the agent reached a pause, the queue of messages of all the tool call responses would come in and the main agent would have a reference of the tool ID so it could see that the tool it had called earlier had finally responded.

**Deep Research Use Case:**
- Orchestrating agent would create 1-3 researching subagents
- Those would each create 1-3 of their own researching subagents
- Would make requests to Perplexity API and other web search endpoints
- Because async, each search (taking ~20 seconds) could be fired rapidly without waiting
- **Result:** Deep research completed in ~2 minutes instead of 10+ minutes
- Summarization was also parallelized: Each section of outline written by different agent with access to all input research
- "Definitely probably more expensive. But in terms of speed and depth, it was unmatched."

### Phase 3: The Shift from MCPs to CLIs

**The Problem with MCPs:**
"The thing is, with every single message, all of the instructions for how to use those MCP servers are being included. Every single message. And for all of the MCP servers, that's like 5,000 to 10,000 tokens, which is burning through your credits and is making the output results from the agent slightly lower quality because it's being given irrelevant information and irrelevant instructions."

**The CLI Solution:**
- CLI with markdown instruction file that you tag in when you reference it
- Without the reference document, the LLM uses the help command
- "LLMs are used to using CLIs all the time"
- Only burns context the few times you use it rather than every conversation

**When MCPs Still Make Sense:**
Still uses MCP for SQL:
- Can make database reads and edits instantaneously
- No painful migrations
- Useful for analytics and making schema changes early in development cycle
- Makes debugging easier because it can read logs itself
- "It's a great way of closing the loop"

### Phase 4: Klaude - The Claude Code Wrapper

**The Core Problem:**
"I wanted asynchronous agents and I want recursive agents."

**Technical Architecture:**

Question: How does Klaude intercept commands?
Answer: Yes, this is happening via signal handling (SIGINT). Klaude does maintain a database state file - it has a SQLite database internally tracking all active agent sessions, all logs, everything. When things go wrong, Claude can also look at its internal state.

**Key Features:**

1. **Agent Checkout System:**
The big innovation - allows interactive subagents without burning parent context:
- "The requirements gathering phase needs to be interactive. It needs to ask you questions about how to build something and your preferences. But you want to be done by subagents, you're not burning context."
- Because Claude Code is a child process of the wrapper, it can be killed by parent process
- Parent process can run `claude code --resume` on a different session ID
- "From the user, your terminal user interface is being killed off and then suddenly a new one appears and it's the new Claude Code interface with the subagent"

2. **Recursion & Custom Subagents:**
Question: How do you route to different LLMs?
Answer: I use the cursor_agents CLI. It routes differently depending on what the name of the agent is. It uses all of the native agents in your agents directory. If you just put GPT-4o as one of your subagents, it just magically works because under the hood, it's routing to the cursor agent CLI instead.

**Why Different Models Matter:**
"GPT-5 is so much slower, but it's a better debugger and it's better equipped to handle complex problems. So Claude knows that if it needs to solve something really tough, it should hand it off to the senior engineer agent, which is just GPT-5 under the hood."

3. **Custom MCP Servers Per Agent:**
- Can have one subagent with access to specific MCP servers others don't have
- "Another great way of sectioning off logic"
- Example: Search subagent with access to powerful search tools for research papers, GitHub, etc.
- "Most of the time I don't have to do that. But if I ever do, I still want the subagent and that subagent, those MCPs are useful context"

4. **Observability & Traceability:**
- Adds observability and traceability that Claude Code doesn't natively have
- Parent agent can look at just system responses from subagent
- Can check out agents, look at logs, see everything happening
- All stored in SQLite database

**The Importance of Long-Running Tasks:**
"Speed is really important and long-running tasks is really important. I work on a bajillion projects all the time and getting them done quickly is paramount. If a task only runs for two minutes, that's enough time to get distracted on your phone or get into a conversation that lasts much longer than two minutes. However, if the task can run for 15 minutes straight, that's enough to get into the flow state and be productive on another project in the meantime."

### Phase 5: PDOCS CLI & Spec-Driven Development

**The Philosophy:**
"Spec-driven development is the future. These agents, if you give them enough planning and enough specs, they'll just execute perfectly."

"Measure three times, plan twice, execute once. Because all the inefficiency comes from debugging poor executions, which are a lot harder to debug than just a plan document."

**PDOCS Features:**
- CLI with commands for gathering templates and checking internal documentation
- Documentation in YAML (both readable and token efficient for LLM, but parseable)
- CLI can quickly assess which features are not done
- Can look at API contracts and gather all endpoints by looking at documentation

Question: What does a YAML spec look like?
Answer: It has a reference to the user story documents. It's got a reference to the API contract YAML file and it has then like bulleted out requirements. So it's got an array of strings of requirements and other things like that. So it contains a bundle of references and it contains notes on user requirements.

**Greenfield Development Workflow:**
"Much, much, much longer requirements gathering phase in the very beginning of the project, where it gathers all of the plans for pretty much everything. Then I can just start firing off execution commands and it will do entire features at a time with very little oversight."

### The Ecosystem Integration

**The Magic:**
"I've really just been working on building this ecosystem of /commands and workflow documents and subagents, custom subagents and CLIs that all reference each other. When I create a subagent that executes, it knows which CLI to use to gather the documentation, the correct documentation, and it knows which workflows to run. All my /commands reference these things specifically as well, and everything just seamlessly fits together, which creates a lot of efficiency and a lot of magic. When I run a command on my Claude code, it can do so much more than an uninitialized Claude code."

### .claude Repository (478 GitHub Stars)

**What It Contains:**
- Workflow orchestration system
- Agent definitions
- Custom slash commands
- File templates
- Git hooks integration
- MCP configurations

**Impact:**
478 GitHub stars demonstrates significant community adoption and validation of the approach.

### MCP Boilerplate (78 Stars)

Created to help others spin up Model Context Protocol servers more easily. "It'll make it a lot easier to spin up new MCPs, and it has all the commands for local installation."

---

## Case Study 4: Mercury Notes

### Basic Info
**Repository:** Mercury Notes (formerly CosmicNotes)
**URL:** mercury.cosmo.it.com
**Tech Stack:** Next.js 15, React 19, Redux Toolkit, RTK Query, Supabase, Anthropic Claude, OpenAI, Tailwind CSS 4, Radix UI, MDXEditor
**Primary User:** Myself (cost-sensitive design)

### Core Problem Statement
"The root issue I wanted to solve with Mercury Notes is that when recording notes, we want to just scribble it down. But when reading notes, we want things to be nicely structured."

### Technical Achievements

**1. Semantic Tagging System**

Question: What's the most technically interesting part?
Answer: Almost certainly the tagging system. When it looks at your note, it gets an embedding of that note and finds all the other notes with similar semantic content and looks at the tags on those notes. Then it uses a few other heuristics like how long it's been since those notes have been edited and comes up with its best guess of what tag you want to put on that note based off of the tags of the similar notes.

**Learning System:**
"When you first start using the tool, it doesn't really know what kind of subjects you tend to gravitate around. But as you use it more, it learns because you'll be mainly creating these tags and then now those are tags that get suggested for other notes that are similar."

**Key Innovation:**
"What's really important is that the tag's name doesn't have to have anything to do with the content of the note because again, it's using other semantically similar contents to figure out those tags rather than the actual tag itself. That was a big issue I discovered early on. If you just have it come up with its own tag, sometimes notes contain no references to the actual name of the content itself. So more crude methods don't really work as well."

**2. Automatic Collection/Todo Detection:**
"I was also really proud of the way it converted collections into to-do lists. If I mention like, 'Oh, here's a laundry list of things I need to do today,' it will do a detection of what type of note as well. If it detects that it's a collection or a to-do list, it will turn it into structured data and save it as such instead. Your to-do list suddenly becomes this actual to-do list rather than just a collection of random scribbled notes."

**3. Tag Summary System**

**The Problem:** Raw notes are messy, have duplicates, aren't formatted
**The Solution:** AI-generated summaries per tag/category combination

Process:
- Notes get tagged (e.g., "D&D" + "brainstorming")
- For each tag+category combination, LLM reads all notes with those properties
- Regenerates a summary document containing all component notes
- Summary is beautifully formatted and nicely synthesized
- Original notes are linked as references within the summary

Question: Does it automatically regenerate?
Answer: Not necessarily automatically. The summary page shows that it's "dirty" when new notes are added. User can manually regenerate. I was more cost sensitive since it's primarily used by me. In production, could have a batch job that regenerates any dirty summaries older than one day in the background.

**Summaries are cached:** When you come back, it's the exact same summary.

**The User Experience:**
"When I go to the tag page and look at that, I'm not looking at the individual notes which are just scribbles and have duplicates and are messy and aren't formatted. Instead I'm looking at this beautifully formatted, nicely synthesized version. And then if I want to see the actual raw inputs, I can click on any of the references that are linked inside that summary document back to my original note."

**Example Use Case:**
"On Mercury Notes, I have something for D&D ideas. All the things that are relevant to D&D ideas show up in one giant section with a whole bunch of tabs for like to-dos and brainstorming and research. When I want to focus on the subject, I'll open up that page. Now I have access to everything that's relevant because every note that has that tag will show up here. I can click and enter the full note or I can just see the summarizations that appear."

**4. RAG-Powered Chat Interface**

Question: What embedding model and storage?
Answer: I use whatever OpenAI's embedding model is - the medium sized one. I think at the time it was state of the art, like 1,500 parameters. I was storing the vectors in Supabase's pgvector extension. I've built enough embedding systems with Supabase - I've done this too many times, so that's kind of like the default for me now. I have some RPC function for doing vector search.

**Features:**
- Semantic search to find notes by content similarity
- Chat interface to ask questions about your notes
- Custom tools for LLMs to query notes using RAG
- "Incredibly, incredibly powerful AI native note-taking tool"

### Mercury Notes vs Co-GM

Question: How do they differ?
Answer: Co-GM is really specialized for GMs. It's got all these tools that are only useful for GMs - custom calendars, customizable random tables that are recursive and self-generated. It bundles them all together on one page with different panels for notes, scratch pad, wiki, random generators, dice, calendar timeline view. All these things are on one page and synthesized. "I've been a GM for a decade, over a decade now, and I really know exactly what's important and what's not important. I've just specialized the ever-living shit out of it for that use case."

**Co-GM's Speed Philosophy:**
"People are running a game, they don't want to be looking at their notes. They're happy to spend time taking notes in the beginning. But then during the game, it's really important to be able to take notes lightning fast and then have them get organized later."

**Mercury Notes' Target User:**
"Mercury Notes is really just like a more generic note taking tool for people who are really busy in their lives who notice that most of the time when they open their notes, it's in the middle of a conversation. They're like, 'Oh wait, let me note that down really quick.' And they can just scribble down a few things. And then when they try to find it later, it's much easier and it's organized with all the rest of their content."

---

## Case Study 5: CompozeLabs - AI Voice Sales Coaching

### Basic Info
**Company:** CompozeLabs, Minneapolis, MN
**Timeline:** Jan 2025 - Feb 2025 (2 months)
**Role:** AI Engineer (solo developer for this project)
**Delivery:** POV estimated 4-6 weeks, completed in 1 week
**Impact:** 25% improvement in sales representative pass-rates
**Tech Stack:** WebRTC, STT/TTS, LinkedIn API, Real-time AI coaching, NextJS

### The Challenge
Built a voice-interactive sales-coaching tool where users can practice real-time sales pitches against a voice AI modeled on real people. The AI can ask questions, respond to the user, and provide feedback on performance.

### Technical Innovation: The Observer Pattern

**The Problem:**
"Voice agents are not very good because they have to be so much lighter weight because voice is a more data intensive medium. The models under the hood aren't as smart. You can't have as specific system prompts and it's harder to get them to follow instructions well."

**The Solution - Observer Agents:**
Question: What was the breakthrough?
Answer: We got around this by having observer agents. Observer agents were looking at the transcript that was being generated in real time. These observer agents were using the latest reasoning models (GPT-5 series), which are really intelligent and we could put really large instructions into those. These observer agents would look at the transcript, look at what was being said and inject guidance.

**How It Works:**
- Guidance comes in form of additional user input wrapped in tags
- Tags indicate: "Hey, this is not actually the user speaking. This is kind of like the system instructions"
- Would say stuff like: "Oh, you need to object more to this part of what the user is saying" or "You need to wrap up the call now"
- "In this way, we actually got a more intelligent, better instruction following voice agent by having this dual system"

**Multiple Observers:**
- One observer in charge of one type of task
- Another observer in charge of knowing what to be angry about next
- Observers used latest reasoning models (GPT-5 series) for intelligent guidance
- Outputs from observers had to be really small (for latency)
- Got queued up and sent when user sent next response

### Technical Challenges Solved

**1. Getting Agent to Hang Up:**
"Voice mode by itself will never stop talking to the user. We had to give it a custom tool for hanging up. A tool that would essentially was like the 'end yourself' kind of tool that would make it so that the agent could end its own process and hang up the phone and close the connection."

**2. Latency Optimization:**
"It was difficult getting the latency down. The outputs from these observer agents had to be really fucking small because they just had to give guidance and we wanted it as quickly as possible."

**3. LinkedIn Integration:**
"It could do a search of a user's LinkedIn profile. You just plugged in their LinkedIn and it retrieved everything, it scraped the LinkedIn page for everything there was to know about that person. It created structured output - a profile representation of that user that included personality, job, all these personal details. It would also make up additional stuff if information wasn't available that we wanted. It then used that as part of the system prompt for the voice AI."

### Working with the Client

**Development Cycle:**
"I was brought on because they specifically wanted me to tackle this client's task. I was the point man for it. I essentially just worked one-on-one with this client. I would be emailing back and forth in the evening being like 'hey, check out an update. This is what I was working on.' This client was pre-seed, just building their MVP, so it could change fast. I just made a whole bunch of pushes to production and say 'hey, what do you think of this?' He would take a look and give immediate feedback and we could just iterate like that. It was a wildly fast development cycle."

**Timeline Achievement:**
"Despite the plan being MVP in four to six weeks, the hardest part - building that voice AI - was done in like two weeks or week and a half. Most of it was just tweaking based off of how it understood sales."

### The Term "Silas Velocity"
"Colleagues coined the term 'Silas velocity' referring to the speed at which I develop quality code. They talked about how they were going to have to ease me off the project so that the client didn't freak out when the development speed slowed down."

---

## Client Work Page Projects

### 1. CompozeLabs (Featured - see full case study above)
- 3-week delivery (67% faster than 9-week estimate)
- 25% improvement in sales rep pass-rates
- Novel observer pattern for voice AI
- Real-time coaching with rubric-based scoring

### 2. ODAPT (YC W25) - Frontend Architecture Overhaul

**Company:** Y Combinator Winter 2025 startup
**Role:** Founding Engineer
**Project:** Frontend migration from vanilla JavaScript to TypeScript + Next.js

**Results:**
- Refactored 10,000+ lines of production code
- 45% frontend performance improvement
- 60% increase in codebase maintainability
- 35% reduction in runtime defects

**Technical Challenge:**
AI-powered platform where AI can edit and re-render its own interface in real-time without human intervention. "Building a platform where AI generates code is difficult. Building a platform where the AI modifies its own running interface presents a category of challenges that few engineering teams have tackled."

**Key Innovation:**
Recursive iframe architecture where:
- AI generates UI components on the fly
- Components injected into iframes that can contain other AI-generated interfaces
- AI observes result and can modify its own output in real-time
- Changes hot-reload instantly without page refreshes
- Process recurses: AI-generated UIs can spawn additional AI-generated UIs

**Solutions Implemented:**
- Incremental TypeScript migration with zero downtime
- Modular abstraction layers for dynamic component injection
- Recursive iframe architecture with controlled communication
- Hot-reload optimization for AI iteration speed
- Runtime type validation pipeline using TypeScript Compiler API and Zod

### 3. Cancer Education Platform (C0)

**Project:** AI-Powered Cancer Education Platform
**Tech Stack:** React, TypeScript, FastAPI, Firecrawl, OpenAI API, JWT Auth, RBAC

**Core Innovation:**
Multi-source information aggregation comparing answers from three distinct sources:
1. Public web content (Google, Reddit, Quora via Firecrawl)
2. AI-generated responses (OpenAI API)
3. Clinician-reviewed information

**Features:**
- Intelligent web scraping with Firecrawl
- Role-based access control (Patient, Medical Reviewer, Administrator)
- JWT-based authentication with comprehensive security
- Unified UX design for healthcare trust
- Side-by-side comparison interface

**Impact:**
Addresses critical gap where 66% of cancer patients seek information online but only 30% discuss findings with clinicians.

### 4. Crypto Trading Analytics Dashboard

**Project:** Institutional-grade fintech platform
**Scale:** $20M+ in assets under management
**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Recharts, D3.js, DeBank API, Supabase, PostgreSQL, Redis

**Results:**
- 95% reduction in time-to-insight (5-8 hours → instant)
- 1,800 hours annual time savings per portfolio manager
- $2.3M additional yield captured annually
- 40+ institutional users within 6 months

**Technical Achievements:**
- Cross-chain price normalization engine (67 blockchains)
- Real-time yield & compounding returns model
- Server-Sent Events (SSE) for real-time data streaming (<200ms latency)
- Strategic KPI prioritization (5 mission-critical metrics)
- Multi-user access control with secure sharing links
- Row-Level Security in PostgreSQL

**Innovation:**
Volume-weighted average price (VWAP) across chains with outlier detection, token mapping for wrapped/bridged assets, and comprehensive DeFi protocol integration.

### 5. Humanity's Voice

**Project:** Crowd-sourced social media posting tool
**Company:** Rhyneer Consulting LLC
**Timeline:** 2025

**Description:**
Users vote on words to be added to a growing social media post that gets posted each day. Built as consulting project.

**Tech Stack:** React migration from raw HTML/JS

### 6. Mimetic - Video Generation Pipeline

**Company:** Mimetic (raised $1.5M)
**Status:** Ongoing client
**Focus:** Video generation and product design

**Technical Implementation:**
"Getting this video generation working, I wired it up to Replicate and have this entire pipeline where it has subagents for creating scripts. Turns those into structured output. Lots of parallelization steps where it turns a script into a bunch of pieces describing what's happening in the video as well as the text content."

**Pipeline Components:**
- Script generation with structured output
- Parallelization of script breakdown
- Wired to 11 Labs for audio
- Transcript with timestamps for precise cuts
- Replicate API for video generation (multiple models)
- FFMPEG for combining videos

**Key Challenges:**
1. **Speed and Accuracy:** Breaking into 4-second chunks, prompt tuning, parallelization
2. **Continuous Footage:** For 12+ second continuous shots, generate first 4 seconds, extract last frame with FFMPEG, use as start frame for next section
3. **Video Cloning:** Extract details and content from existing video, recreate using JSON file with same feel, color schemes, similar graphics

**Development Approach:**
"For iterating on this, I was using just Claude code which had the CLI and all these tools, so I could just prove concepts for these workflows. Then I've turned them into more concrete workflows that will do everything much more programmatically and algorithmically."

---

## Personal Background & Philosophy

### Origin Story

**Growing Up:**
Born and raised in Alaska (did not grow up in log cabin, but dad did). Father born and raised in Alaska, grew up in log cabin. Dad made sure childhood was "full of crazy camping experiences": flying around, fishing, hunting, skiing, hiking in mountains, backpacking, boating, halibut fishing, salmon fishing, backcountry skiing, crabbing, shrimping.

"I spent a good piece of my life on boats and planes and outdoors. I don't get to do that as much here in California in the city, but that's like a major part of who I am."

**Educational Path:**
- Boarding school for 2 years in Hawaii
- Carleton College, Minnesota (2018-2022)
- Computer Science major with focus on AI/ML
- Received distinction for exceptional work in capstone AI project

**Senior Capstone (Pre-LLM Era):**
Built Reddit chatbot using LLMs. "We trained our own LLM and we had a highway model that did pass through transformers where inputs from earlier layers would skip layers and get passed to later layers and also included metadata about the input besides the text data. So it's combining the text embedding plus a custom vector representing other information. This was just like a research project. We received recognition from the college for excellency in our major."

**Early AI Work:**
- Stock market predictors using recurrent neural networks (built 3 times)
- Machine learning at Clean Energy Associates (solar panel image processing)
- Computer vision algorithms for CEA internship

**The Disillusionment & Return:**
"I actually got disenchanted with them [LLMs] for a bit because I felt like they were taking away some of what made it special about being human and I saw them replacing my work. I kind of fell off the radar from 2022 to 2023."

**The Awakening:**
"GitHub Copilot released and I got it super early on and was using it. Holy cow, this is so, so impressive and so powerful. That kind of re-awoke me to these LLMs."

"I'm still really scared for the future. But I also understand that this is the future and I can either be part of it or I can just be scared of it. And so I'd much rather get involved than not use it out of protest because that's not doing anything."

### Career Journey

**Agency Work (2022-2024):**
- Software consultant at Concord USA (Aug 2022 - Dec 2024)
- Worked on old legacy codebases at Big Enterprise
- "I realized I wasn't learning enough at the job. The pace is pretty slow. I wanted something that was much more exciting."

**The SF Move (Feb 2025):**
Question: Why San Francisco?
Answer: "I moved out to San Francisco because a friend of mine asked if I wanted to be a co-founder at a startup. Although that didn't end up working out, I've stuck around because I love the energy in San Francisco, I love the startup energy. I want to build great things and amaze people."

"I quit my job beginning of this year because I wanted to work on projects and learn and explore the startup space. I've bounced between a few smaller startups this year, just testing the waters, building something and seeing if there's any product market fit. I don't want to be joining something that's pre-product market fit. I've played that game this year and it's not a game I want to play anymore."

### Current Status & Goals

**Availability:**
- Selectively taking on new clients
- Looking for full-time opportunities
- Open to co-founding (if working in dev tools and well-connected)

**Ideal Next Role:**
"Getting hired as a senior engineer or a tech lead in some capacity. I want a leadership position. I want to be responsible for either a really big, hard feature/product in terms of the technical completion of it. I'm capable and I want to do it."

### Philosophy & Values

**On "Impossible" Problems:**
"If the problem seems impossible, then that sounds like a fantastic opportunity. I think pretty much anything is doable with the right combination of tools and LLMs. It might be kind of brittle, but if there's a single task that needs to be done, it's doable."

**Examples of "Impossible" Problems Solved:**
1. Voice AI observer pattern when people thought low-latency + instruction-following was too hard
2. End-to-end LLM development: "People say you can't fucking do end-to-end LLM development and just trust LLM to execute well. I kind of disagree. With really good specs and really good plans, LLM is going to execute just at an incredibly high level."
3. Parallel execution: "People say it's better to have everything in series. There's no games to be had from parallel execution because you miss out on context. I think that's just closed-minded. If the subagent is observable and can report back the relevant information and is following a very specific plan, then the orchestrating agent actually does know what the subagent is doing."

**On Learning:**
"It's about both those things - learning new tech stacks, solving novel problems. I really like fast-paced situations where I have to be involved and use my brain. I like thinking. I really, really love thinking. I really love problem-solving. That's why I became a software developer. It's really just a career of endless problem-solving. I get into that flow state, and it's so fun. I love collaborating and trying to figure out problems. Coming up with crazy ideas for how to solve things and then combining them with other people's crazy ideas to come up with a final solution. That's fucking incredible."

**On "Silas Velocity":**
Question: Where does that speed come from?
Answer: "I don't think I'm an insanely talented developer in terms of... I don't have some perfect memory, and I haven't memorized the fucking manual and all the best practices for every single language. If you ask me to do some leetcode shit right now, I'll get there, but I'm not going to be the fastest person. But if you told me all I had to do was grind leetcode for the next month, by the end of that month, I'd be really fucking good at it because I'd have developed all these heuristics for getting it done quickly."

"I'm someone who really values my time, and I really value being able to get things done efficiently, so I'm kind of an obsessive optimizer in terms of how to figure out how to get as much work done as possible."

**Sources of Speed:**
1. Obsessive workflow optimization
2. Building internal tools
3. Memorizing keybinds for all devices
4. "Spending a lot of time with the logistics and setting things up so that when it's time to actually execute, I can go as efficiently as possible and waste as little time on dumb speed bumps"
5. Agent orchestration and parallelization
6. "Most of the speed gains are not from sharing my attention, but just from huge optimizations on my end"

**When Speed Backfires:**
"Moving fast does backfire sometimes. Usually it's in situations where the repercussions aren't very high. Sometimes you can just trust the LLM to get it done. Sometimes you can multitask with five different things without paying special attention to each one. But you have to kind of tighten up as you work on bigger projects that are more critical that everything is perfect."

Recent hackathon example: "I was running my own focus and my own attention, which is a limited resource, running it more and more thin. It didn't exactly backfire because we got it done in time, but it backfired in the sense of now we have a codebase that isn't so great."

"It's never backfired for an actual important project. I still play with it. I love moving fast, but I also have to remember some things require more attention than others."

**On Competitive Nature:**
Question: How does competitive drive show up professionally?
Answer: "I'm a people pleaser. If I can impress people by being the best they've ever seen at something, that feels good. I'm not someone who puts other people down. I don't want to do that. But I do want to come off as a brilliant shining star. That feels good."

"I want to impress people by doing stuff that people didn't think is possible. Like this Claude orchestration system and getting these agents working with recursion and all this other stuff. Telling people about it who are also in this space and seeing their eyes go wide and like a look of confusion - this shouldn't be possible. That feels wonderful to me. I love projects like that."

"I've got a pretty gnarly competitive streak. That's largely internal, but in my head, I want to feel like I am the best there is at whatever it is that I'm trying to optimize for. I'm relatively smart, but the way I play dirty is by building all the tools and heuristics for getting the rest of the way there."

**On Creating "Magic" Moments:**
"I get really excited by hard LLM problems. I love DevTools. I've been working on endless side projects, accelerating my own workflows as much as possible, and creating joy for users by surprising them with 'Oh my god, it just magically does it for me.' That's a lot of what I'm focusing on with LLMs."

"In Co-GM and Mercury Notes, those were both very 'Oh my goodness, it just magically has everything I need and it does it for me.' That gives me a lot of joy."

### Side Projects & Interests

**Programming as Hobby:**
"All I've been doing is coding recently. I wake up and I program until I sleep pretty much. Programming projects are a major hobby of mine. I feel like I owe a lot of what I learned to the fact that I spend so much of my time just programming for fun and building cool projects."

"I'll be working on my computer and I'm like, 'Oh, it's annoying that this doesn't happen. That this feature doesn't exist and I want it to exist.' So I'm like, 'Fine, I'm going to make it.' If you look at my GitHub repo, I've got over 150 repositories. Most of them are public. Most of those have just been to solve small problems I have. Many of them fade away and get replaced by official versions or whatever else. But that is a major fucking hobby of mine."

**Music:**
- Plays guitar and drums
- "Love playing music"

**Outdoors:**
- Camping, hiking
- Grew up with full Alaska outdoorsy experience
- Dad's activities: flying, fishing, hunting, skiing, backpacking, boating, halibut fishing, salmon fishing, backcountry skiing, crabbing, shrimping

**Maps (Weird Obsession):**
"I love maps. I love fantasy maps and making maps. I've spent five years working on a fantasy map. If you look up 'largest fantasy map on the internet,' the first Google image result is a map that I made. It's 20,000 pixels by 20,000 pixels."

**The Map Story:**
"I decided at 17 years old that if I wanted to have a truly deep lore for my world in D&D, it would help if I ran all of my games in the same place. In order to do that, I wanted to have a really cohesive map and a wiki for it."

Started at 2,000x2,000 pixels. Players left the edge. "I was like, fuck it. I'm just going to make the whole thing properly so there's no chance they ever leave the map. I made it literally a hundred times bigger by making it 10X the width and 10X the height. It took me five years to build. I hand drew all the mountains and everything else."

Question: What did building that teach you?
Answer: "Baby steps. I broke it into smaller things that I could feel proud about finishing, like finishing the mountains, which are all hand drawn. Those are major milestones. If I needed to, I could cut out sections and copy and paste them and flip them and modify them. There's even optimization in there - building stamps."

"You can't really cheat with art. At the end of the day, it was just getting through it."

**Alaria Wiki:**
"All the places on the map were labeled and my players would go to them and I needed to keep track of it all. It was too big to keep in my head. On this wiki (AlariaWiki.Online), it includes the entire freaking world and all of the lore that I've added to it over time. Pretty much every game I run has been inside this world."

**Heart Rush - Custom TTRPG:**
"I got fed up with the rules of D&D. For about three years (sophomore year through two and a half years afterwards), I built and then playtested my own TTRPG rulebook. It's published. You can find it online. It's called Heart Rush."

"I ran it for my players and now they run it for their friends instead because they prefer it over D&D. It's like D&D, but it's way more tactical and allows a lot more customization while also fixing some of the problems I saw with Dungeons & Dragons."

**Core Problems Fixed in Heart Rush:**
"Turns were super slow in D&D in the sense that you get bored in a game with five people. You take your turn, which is the same action every single turn, and then you wait for your turn to happen again. There's no decision making because after a certain point, you're just doing the same thing every time."

**Solution - Diplomacy-Inspired:**
"I took inspiration from a game called Diplomacy where everyone takes a turn at the same time and then actions are revealed and get carried out. That's much more interactive. There's a lot of planning where everyone is interacting, figuring out what their actions are. There's some secrecy involved as well because you can deceive. So there's a lot of social dynamics and interacting. People are talking and planning together. Then all the actual outcomes happen at the same time. Everyone's involved and invested in the turn."

"I created a type of rock-paper-scissors interaction that leads to a lot of hyped up results because a lot is resting on what the enemies are going to choose to do and whether your actions result in boom or bust."

**The Trinity of D&D Projects:**
"It's the map. It's the wiki. It's the rule set. It's kind of the trinity of D&D projects. Each of them having taken lifelong projects of mine."

Question: Does game design influence how you build software?
Answer: "I'm a huge game design aficionado. I thought a lot. I spent a lot of time. I just know a lot about what makes things fun. One of the key things is having right actions not be the same every time. One of the best ways you can do that is by having rock-paper-scissors mechanics that are dynamic."

**Board Games:**
"I love board games. And games in general. I don't let myself play them because they eat up all my time because they are satisfying for all the same reasons that programming is satisfying."

"For a while I wanted to be a game developer and I've developed tons of smaller games projects, many of them unfinished of course."

"I don't really play board games very often anymore because I get too competitive and won't stop playing until I've solved the game and can start winning. As a time sinker I get too competitive with board games. People don't like it."

**Foosball:**
"I'm a huge foosball player. Got really competitive. I think there's only been 5 people, maybe 7 people in the world who I've played so far who've ever beaten me. And only 2 of them who can do so consistently. And even then, it's close."

"I played in high school - I went to a boarding school for 2 years and I played foosball all the time because they had 2 foosball tables. Then at my job after college, they had a foosball table there and I played hours and hours of foosball after work. So I have a lot of foosball under my belt. Love it. And will play it endlessly."

---

## Summary Statistics

**GitHub:**
- 150+ public repositories
- 478 stars on .claude
- 78 stars on MCP Boilerplate

**Projects Built:**
- 5+ major case study projects
- 6+ significant client projects
- 150+ side projects and tools
- 3 major D&D projects (map, wiki, rule system)

**Quantifiable Impact:**
- Co-GM: 1,500+ users, 50+ paying subscribers
- CompozeLabs: 25% improvement in pass-rates, 67% faster delivery
- ODAPT: 45% performance gain, 60% maintainability increase, 35% fewer defects
- Crypto Dashboard: 95% time-to-insight reduction, $2.3M annual yield capture
- Mystica: 50% token reduction, 30% cost savings

**Skills & Specializations:**
- AI/LLM Integration & Optimization
- Agent Orchestration & Workflow Automation
- Full-Stack Development (React, Next.js, TypeScript, Python, FastAPI)
- DevTools & Developer Experience
- System Architecture & Performance Optimization
- Rapid Prototyping & MVP Development

**Personal Attributes:**
- Obsessive optimizer
- Competitive (but supportive)
- Fast learner and executor ("Silas velocity")
- Problem-solving driven
- People pleaser who wants to impress
- Loves creating "magic" moments for users
