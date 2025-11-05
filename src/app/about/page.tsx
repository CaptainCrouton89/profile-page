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
        <p
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-gray-light)",
            lineHeight: "1.6",
          }}
        >
          Click any section to explore
        </p>
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: "grid",
          gap: "var(--space-xl)",
          gridTemplateColumns: "1fr",
        }}
        className="md:grid-cols-2"
      >
        {/* Profile Card - Always Visible, Full Width */}
        <div
          style={{
            gridColumn: "1 / -1",
            border: "var(--border-width) solid var(--color-black)",
            boxShadow: "6px 6px 0 var(--color-black)",
            padding: "var(--space-xl)",
            background: "var(--color-background)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-xl)",
            }}
            className="md:flex-row md:items-start"
          >
            {/* Profile Photo Placeholder */}
            <div
              style={{
                width: "200px",
                height: "200px",
                flexShrink: 0,
                border: "var(--border-width) solid var(--color-black)",
                background: "var(--color-gray-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "var(--font-size-2xl)", color: "var(--color-gray-mid)" }}>
                200x200
              </span>
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
                I build intelligent systems that scale, solve impossible problems, and create magic
                moments for users.
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
                  href="https://github.com/yourusername"
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
                  href="https://linkedin.com/in/yourprofile"
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
                  href="mailto:your.email@example.com"
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
                <a
                  href="tel:+15551234567"
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
                  <Phone size={20} />
                  Phone
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
                Alaska → Hawaii → Carleton → San Francisco
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Born and raised in Alaska. My dad grew up in a log cabin, made sure my childhood was full of crazy camping experiences...
              </p>
            </div>
          }
          fullContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                Born and raised in Alaska, where my dad grew up in a log cabin and made sure my childhood was full of camping, fishing, skiing, and flying in bush planes. These experiences taught me resourcefulness and problem-solving from an early age.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                Spent two years at boarding school in Hawaii, where I became obsessed with foosball—playing hours every day until I reached competitive level.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                Attended Carleton College where I majored in Computer Science with a focus on AI/ML. Graduated with distinction in my senior capstone project. Founded and led the CS Mentorship Program.
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Moved to San Francisco in February 2025 to be at the heart of the startup scene, where I'm seeking senior engineering roles and selective consulting projects.
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
              <p style={{ color: "var(--color-primary)", fontSize: "var(--font-size-lg)", fontWeight: "bold", marginBottom: "var(--space-md)" }}>
                "If it's impossible, that's an opportunity"
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Three pillars: Speed • Optimization • Creating Magic
              </p>
            </div>
          }
          fullContent={
            <div>
              <p style={{ color: "var(--color-primary)", fontSize: "var(--font-size-xl)", fontWeight: "bold", marginBottom: "var(--space-lg)" }}>
                "If it's impossible, that's an opportunity"
              </p>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-lg)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                SPEED ("Silas Velocity")
              </h4>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-lg)" }}>
                Obsessed with workflow optimization. I build internal tools, memorize keybinds, and remove speed bumps before execution. Colleagues coined the term "Silas velocity" after seeing me deliver projects in a fraction of estimated time.
              </p>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-lg)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                OPTIMIZATION
              </h4>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-lg)" }}>
                Making things faster, better, stronger. Whether it's personal workflows or system performance, I'm always seeking the next 10x improvement. Example: Fine-tuning in Mystica saved 30% in AI costs.
              </p>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-lg)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                CREATING MAGIC
              </h4>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Building tools that make users say "Oh my god, it just magically does it for me." Those surprise-and-delight moments are what drive my work—like Co-GM's auto-linking or CosmicNotes' intelligent tagging.
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
                AI/LLM Integration • Full-Stack Development • DevTools & Automation • Cloud Infrastructure
              </p>
            </div>
          }
          fullContent={
            <div>
              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-md)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                AI & LLM Integration
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
                <TechBadge tech="GPT-4.1" />
                <TechBadge tech="Claude" />
                <TechBadge tech="Fine-tuning" />
                <TechBadge tech="RAG" />
                <TechBadge tech="Embeddings" />
                <TechBadge tech="Prompt Engineering" />
                <TechBadge tech="Agent Orchestration" />
              </div>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-md)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                Full-Stack Development
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
                <TechBadge tech="TypeScript" />
                <TechBadge tech="React" />
                <TechBadge tech="Next.js" />
                <TechBadge tech="Node.js" />
                <TechBadge tech="Python" />
                <TechBadge tech="FastAPI" />
                <TechBadge tech="PostgreSQL" />
                <TechBadge tech="MongoDB" />
                <TechBadge tech="Redis" />
                <TechBadge tech="Supabase" />
              </div>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-md)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                DevTools & Automation
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
                <TechBadge tech="Claude Code" />
                <TechBadge tech="Agent Orchestration" />
                <TechBadge tech="Git Hooks" />
                <TechBadge tech="Custom CLIs" />
                <TechBadge tech="Workflow Optimization" />
                <TechBadge tech="MCP Servers" />
              </div>

              <h4 style={{ color: "var(--color-white)", fontSize: "var(--font-size-md)", fontWeight: "bold", marginBottom: "var(--space-sm)" }}>
                Infrastructure & Cloud
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-sm)" }}>
                <TechBadge tech="Docker" />
                <TechBadge tech="Kubernetes" />
                <TechBadge tech="AWS" />
                <TechBadge tech="Vercel" />
                <TechBadge tech="Azure" />
                <TechBadge tech="WebSockets" />
                <TechBadge tech="Real-time Systems" />
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
                D&D GM for 10+ years • 20k×20k pixel fantasy map
                <br />
                Heart Rush TTRPG • Foosball champion • Music (guitar/drums)
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                GM for 10+ years. Built the largest fantasy map on the internet...
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
                    GM for 10+ years. Run all campaigns in my world "Alaria"
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
                    20k × 20k pixel fantasy map. Took 5 years. First Google result!
                  </p>
                </div>

                {/* Foosball */}
                <div
                  style={{
                    border: "2px solid var(--color-gray-mid)",
                    padding: "var(--space-md)",
                  }}
                >
                  <h5 style={{ color: "var(--color-white)", fontWeight: "bold", marginBottom: "var(--space-xs)" }}>
                    Foosball
                  </h5>
                  <p style={{ color: "var(--color-gray-light)", fontSize: "var(--font-size-sm)", lineHeight: "1.5" }}>
                    Only 2-7 people in the world can beat me consistently. Played obsessively in HS
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
                    Custom TTRPG rulebook. Fixed D&D's problems with tactical combat system
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
          className="md:col-span-2"
          previewContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6" }}>
                Seeking senior engineering or tech lead roles in DevTools, AI infrastructure, or high-growth startups where speed & innovation are valued
              </p>
            </div>
          }
          fullContent={
            <div>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                <strong>What I want:</strong> Senior engineering or tech lead role where I can take ownership of complex technical challenges
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                <strong>What I build:</strong> Things that seem impossible, systems that create magic for users, tools that developers love using
              </p>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
                <strong>Ideal environment:</strong>
              </p>
              <ul style={{ color: "var(--color-white)", lineHeight: "1.8", marginBottom: "var(--space-lg)", paddingLeft: "var(--space-lg)" }}>
                <li>DevTools companies building the future of software development</li>
                <li>AI infrastructure companies pushing the boundaries of what's possible</li>
                <li>High-growth startups where speed and innovation are valued</li>
              </ul>
              <p style={{ color: "var(--color-white)", lineHeight: "1.6", marginBottom: "var(--space-lg)" }}>
                <strong>What I bring:</strong> "Silas velocity", obsessive optimization, full-stack AI expertise, and a track record of shipping impossible features
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
