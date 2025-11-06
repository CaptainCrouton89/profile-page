"use client"

import { useState } from "react"
import { AboutCard } from "@/components/AboutCard"
import { TechBadge } from "@/components/TechBadge"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function AboutPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

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
          ABOUT ME
        </h1>
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: "grid",
          gap: "var(--space-xl)",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {/* Profile Card - Always Visible, Full Width */}
        <div
          style={{
            gridColumn: "1 / -1",
            border: "var(--border-width) solid var(--color-black)",
            boxShadow: "6px 6px 0 var(--color-black)",
            padding: "var(--space-xl)",
            background: "var(--color-surface)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "var(--space-xl)",
              alignItems: "center",
            }}
          >
            {/* Profile Photo */}
            <div
              style={{
                width: "200px",
                height: "200px",
                flexShrink: 0,
                border: "var(--border-width) solid var(--color-black)",
                overflow: "hidden",
              }}
            >
              <img
                src="/profile.png"
                alt="Silas Rhyneer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Profile Info */}
            <div style={{ flex: 1 }}>
              <h2
                className="uppercase font-black"
                style={{
                  fontSize: "var(--font-size-3xl)",
                  color: "var(--color-white)",
                  marginBottom: "var(--space-xs)",
                }}
              >
                SILAS RHYNEER
              </h2>
              <p
                className="uppercase"
                style={{
                  fontSize: "var(--font-size-lg)",
                  color: "var(--color-primary)",
                  marginBottom: "var(--space-md)",
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                }}
              >
                Software Engineer & AI Specialist
              </p>
              <p
                style={{
                  fontSize: "var(--font-size-md)",
                  color: "var(--color-white)",
                  lineHeight: "1.6",
                  marginBottom: "var(--space-lg)",
                }}
              >
                I build tools that make people say "Oh my god, it just does that for me." The impossible part is usually the point.
              </p>

              {/* Social Links */}
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-md)",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://github.com/CaptainCrouton89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-xs)",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    fontSize: "var(--font-size-sm)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-white)"
                  }}
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/silas-rhyneer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-xs)",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    fontSize: "var(--font-size-sm)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-white)"
                  }}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="mailto:rhyneer.silas@gmail.com"
                  className="transition-colors duration-150"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-xs)",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    fontSize: "var(--font-size-sm)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-white)"
                  }}
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Who I Am Card */}
        <AboutCard
          id="who-i-am"
          icon=""
          title="WHO I AM"
          isExpanded={expandedCard === "who-i-am"}
          onToggle={() => toggleCard("who-i-am")}
          previewContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-sm)" }}>
                Started DMing D&D campaigns young—spent 5 years hand-drawing a 20k×20k pixel fantasy map (first Google result).
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Built 150+ programming projects, most to solve problems I had. Graduated Carleton with CS distinction. Moved to SF in Feb 2025 for the startup energy.
              </p>
            </div>
          }
          fullContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                Born in Alaska. Grew up camping, fishing, skiing, flying—the kind of childhood that teaches you to solve problems with what you have. Started DMing D&D at 13, which led to a weird obsession: building the largest fantasy map on the internet. 20,000 pixels by 20,000 pixels. Took 5 years. Every mountain hand-drawn.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                When I commit to something, I go all in. Spent 3 years building a custom TTRPG rulebook because D&D's combat felt broken. My players now run it for their friends instead—they prefer it.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                At Carleton I focused on AI/ML, graduated with distinction for my senior capstone (custom LLM with highway model architecture, pre-GPT era). Built stock market predictors, computer vision algorithms, whatever seemed interesting. 150+ programming projects—most of them experiments, some still running.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Now I'm in SF working with startups like Mimetic ($1.5M raised) and building tools in the Claude Code ecosystem. Looking for senior engineering or tech lead roles where complex problems and fast execution matter.
              </p>
            </div>
          }
        />

        {/* Philosophy Card */}
        <AboutCard
          id="philosophy"
          icon=""
          title="PHILOSOPHY"
          isExpanded={expandedCard === "philosophy"}
          onToggle={() => toggleCard("philosophy")}
          previewContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-sm)" }}>
                If a problem seems impossible, that sounds like a good place to start.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                I'm obsessed with making things faster—both my own workflows and the systems I build. I care about creating those moments where users realize the tool just handles it for them.
              </p>
            </div>
          }
          fullContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-lg)" }}>
                I think pretty much anything is doable with the right combination of tools and thinking. If a problem seems impossible, that usually means no one's tried the right approach yet.
              </p>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-lg)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                Speed
              </h4>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-lg)" }}>
                I build internal tools, memorize keybinds, automate the annoying parts. Most of the speed comes from removing friction before I start working. Agent orchestration and parallelization do the rest. I delivered CompozeLabs' voice AI MVP in 1 week—estimate was 4-6 weeks.
              </p>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-lg)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                Optimization
              </h4>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-lg)" }}>
                I'm obsessed with removing friction from my workflow. Custom keybinds, CLI tools, agent orchestration setups—anything that saves 10 seconds gets automated. I've built slash commands that turn 5-step processes into one command. The time I invest in tooling pays back every single day.
              </p>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-lg)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                Creating Magic
              </h4>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                The best tools surprise you. Co-GM's @-linking system automatically updates all references when you rename something. Mercury Notes learns which tags you use based on semantic similarity to past notes. Those "oh wow, it just works" moments are what I'm after.
              </p>
            </div>
          }
        />

        {/* Skills Card */}
        <AboutCard
          id="skills"
          icon=""
          title="TECHNICAL SKILLS"
          isExpanded={expandedCard === "skills"}
          onToggle={() => toggleCard("skills")}
          previewContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-sm)" }}>
                AI/ML • Frontend (React, TypeScript, Next.js) • Backend (Node, Python, Java, C#) • Infrastructure (AWS, Azure, Docker)
              </p>
            </div>
          }
          fullContent={
            <div>
              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-md)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                Frontend
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
                <TechBadge tech="JavaScript" />
                <TechBadge tech="TypeScript" />
                <TechBadge tech="React" />
                <TechBadge tech="Next.js" />
                <TechBadge tech="Jest" />
              </div>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-md)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                Backend
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
                <TechBadge tech="Node.js" />
                <TechBadge tech="Express" />
                <TechBadge tech="Python" />
                <TechBadge tech="Java" />
                <TechBadge tech="Spring" />
                <TechBadge tech="C#" />
                <TechBadge tech=".NET" />
              </div>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-md)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                Data & Infrastructure
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
                <TechBadge tech="SQL" />
                <TechBadge tech="PostgreSQL" />
                <TechBadge tech="MongoDB" />
                <TechBadge tech="Redis" />
                <TechBadge tech="Docker" />
                <TechBadge tech="AWS" />
                <TechBadge tech="Azure" />
                <TechBadge tech="Vercel" />
              </div>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-md)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                AI & ML
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)" }}>
                <TechBadge tech="Fine-tuning" />
                <TechBadge tech="RAG" />
                <TechBadge tech="Embeddings" />
                <TechBadge tech="Prompt Engineering" />
                <TechBadge tech="Agent Workflows" />
                <TechBadge tech="MCP" />
                <TechBadge tech="PyTorch" />
              </div>
            </div>
          }
        />

        {/* Interests Card */}
        <AboutCard
          id="interests"
          icon=""
          title="INTERESTS & HOBBIES"
          isExpanded={expandedCard === "interests"}
          onToggle={() => toggleCard("interests")}
          previewContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-sm)" }}>
                D&D GM for 10+ years. Built a 20k×20k pixel fantasy map and a custom TTRPG rulebook.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Also: board games, music (guitar/drums), outdoors, making maps for no good reason.
              </p>
            </div>
          }
          fullContent={
            <div>
              <div style={{ display: "grid", gap: "var(--space-md)", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                {/* D&D */}
                <div
                  style={{
                    border: "2px solid var(--color-gray-mid)",
                    padding: "var(--space-md)",
                  }}
                >
                  <h5 style={{ color: "var(--color-white)", fontWeight: "bold", marginBottom: "var(--space-xs)" }}>
                    D&D
                  </h5>
                  <p style={{ color: "var(--color-gray-light)", fontSize: "var(--font-size-sm)", lineHeight: "1.5" }}>
                    GMing for 10+ years. All campaigns set in Alaria—my world with its own wiki (AlariaWiki.Online)
                  </p>
                </div>

                {/* Map Making */}
                <div
                  style={{
                    border: "2px solid var(--color-gray-mid)",
                    padding: "var(--space-md)",
                  }}
                >
                  <h5 style={{ color: "var(--color-white)", fontWeight: "bold", marginBottom: "var(--space-xs)" }}>
                    Map Making
                  </h5>
                  <p style={{ color: "var(--color-gray-light)", fontSize: "var(--font-size-sm)", lineHeight: "1.5" }}>
                    Built the largest fantasy map on the internet (20k×20k pixels, hand-drawn mountains). Took 5 years. Worth it.
                  </p>
                </div>

                {/* Board Games */}
                <div
                  style={{
                    border: "2px solid var(--color-gray-mid)",
                    padding: "var(--space-md)",
                  }}
                >
                  <h5 style={{ color: "var(--color-white)", fontWeight: "bold", marginBottom: "var(--space-xs)" }}>
                    Board Games
                  </h5>
                  <p style={{ color: "var(--color-gray-light)", fontSize: "var(--font-size-sm)", lineHeight: "1.5" }}>
                    Game design aficionado. Don't play much anymore—too competitive, won't stop until I've solved the game
                  </p>
                </div>

                {/* Music */}
                <div
                  style={{
                    border: "2px solid var(--color-gray-mid)",
                    padding: "var(--space-md)",
                  }}
                >
                  <h5 style={{ color: "var(--color-white)", fontWeight: "bold", marginBottom: "var(--space-xs)" }}>
                    Music
                  </h5>
                  <p style={{ color: "var(--color-gray-light)", fontSize: "var(--font-size-sm)", lineHeight: "1.5" }}>
                    Guitar & drums. Love playing music with friends
                  </p>
                </div>

                {/* Heart Rush */}
                <div
                  style={{
                    border: "2px solid var(--color-gray-mid)",
                    padding: "var(--space-md)",
                  }}
                >
                  <h5 style={{ color: "var(--color-white)", fontWeight: "bold", marginBottom: "var(--space-xs)" }}>
                    Heart Rush
                  </h5>
                  <p style={{ color: "var(--color-gray-light)", fontSize: "var(--font-size-sm)", lineHeight: "1.5" }}>
                    Custom TTRPG I built over 3 years. Fixes D&D's combat pacing—simultaneous turns, more tactical decisions
                  </p>
                </div>

                {/* Outdoors */}
                <div
                  style={{
                    border: "2px solid var(--color-gray-mid)",
                    padding: "var(--space-md)",
                  }}
                >
                  <h5 style={{ color: "var(--color-white)", fontWeight: "bold", marginBottom: "var(--space-xs)" }}>
                    Outdoors
                  </h5>
                  <p style={{ color: "var(--color-gray-light)", fontSize: "var(--font-size-sm)", lineHeight: "1.5" }}>
                    Alaska camping, fishing, skiing, flying, hiking. Grew up on boats & planes
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Goals Card - Full Width */}
        <AboutCard
          id="goals"
          icon=""
          title="WHAT I'M LOOKING FOR"
          isExpanded={expandedCard === "goals"}
          onToggle={() => toggleCard("goals")}
          style={{ gridColumn: "1 / -1" }}
          previewContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Looking for senior engineering or tech lead roles where I can own hard technical problems—DevTools, AI infrastructure, or high-growth startups that move fast.
              </p>
            </div>
          }
          fullContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                I want a senior engineering or tech lead role where I can own complex technical problems end-to-end. Not just implement—architect, optimize, and ship.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                I build things that seem impossible at first. Systems that create those magic moments for users. Tools that developers actually want to use.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                <strong>Environments I thrive in:</strong>
              </p>
              <ul style={{ color: "var(--color-white)", lineHeight: "1.8", marginBottom: "var(--space-lg)", paddingLeft: "var(--space-lg)", listStyleType: "disc" }}>
                <li>DevTools companies building the future of software development</li>
                <li>Early-stage startups tackling hard technical problems with AI</li>
                <li>High-growth companies where fast execution and innovation matter</li>
              </ul>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-lg)" }}>
                What I bring: fast execution, obsessive optimization, full-stack AI expertise, and a track record of solving hard problems.
              </p>
              <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
                <a
                  href="/timeline"
                  className="uppercase font-bold transition-all duration-150 inline-block"
                  style={{
                    fontSize: "var(--font-size-sm)",
                    padding: "var(--space-sm) var(--space-md)",
                    background: "var(--color-white)",
                    color: "var(--color-black)",
                    border: "2px solid var(--color-black)",
                    textDecoration: "none",
                    boxShadow: "4px 4px 0 var(--color-black)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(2px, 2px)"
                    e.currentTarget.style.boxShadow = "2px 2px 0 var(--color-black)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0, 0)"
                    e.currentTarget.style.boxShadow = "4px 4px 0 var(--color-black)"
                  }}
                >
                  View My Timeline →
                </a>
                <a
                  href="/contact"
                  className="uppercase font-bold transition-all duration-150 inline-block"
                  style={{
                    fontSize: "var(--font-size-sm)",
                    padding: "var(--space-sm) var(--space-md)",
                    background: "var(--color-primary)",
                    color: "var(--color-black)",
                    border: "2px solid var(--color-black)",
                    textDecoration: "none",
                    boxShadow: "4px 4px 0 var(--color-black)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(2px, 2px)"
                    e.currentTarget.style.boxShadow = "2px 2px 0 var(--color-black)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0, 0)"
                    e.currentTarget.style.boxShadow = "4px 4px 0 var(--color-black)"
                  }}
                >
                  Contact Me →
                </a>
              </div>
            </div>
          }
        />
      </div>
    </main>
  )
}
