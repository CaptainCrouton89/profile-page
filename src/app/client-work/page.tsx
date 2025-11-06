import { ClientWorkCard } from "@/components/ClientWorkCard"

export default function ClientWorkPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--space-3xl) var(--space-xl)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "var(--space-3xl)" }}>
        <h1
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-4xl)",
            color: "var(--color-white)",
            marginBottom: "var(--space-md)",
          }}
        >
          CLIENT WORK
        </h1>
        <p
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-gray-light)",
            lineHeight: "1.6",
          }}
        >
          Consulting & agency projects that showcase versatility across AI, fintech, healthcare, and more
        </p>
      </div>

      {/* Featured Project */}
      <section style={{ marginBottom: "var(--space-3xl)" }}>
        <h2
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-xl)",
            color: "var(--color-white)",
            marginBottom: "var(--space-lg)",
            letterSpacing: "0.05em",
          }}
        >
          FEATURED PROJECT
        </h2>
        <ClientWorkCard
          title="CompozeLabs"
          subtitle="AI Voice Sales Coaching"
          timeline="Jan 2025 - Feb 2025"
          location="Minneapolis, MN"
          description="Built voice-interactive sales coaching tool with novel observer pattern architecture. Delivered in 1 week (67% faster than 4-6 week estimate)."
          metrics={[
            "25% improvement in sales rep pass-rates",
            "Colleagues coined term 'Silas velocity'",
          ]}
          techStack={["Next.js", "WebRTC", "OpenAI Voice API"]}
          link={{
            href: "/projects/compozelabs",
            label: "View Full Case Study",
          }}
          featured
        />
      </section>

      {/* Consulting Clients */}
      <section style={{ marginBottom: "var(--space-3xl)" }}>
        <h2
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-xl)",
            color: "var(--color-white)",
            marginBottom: "var(--space-lg)",
            letterSpacing: "0.05em",
          }}
        >
          CONSULTING CLIENTS
        </h2>
        <p
          style={{
            fontSize: "var(--font-size-md)",
            color: "var(--color-gray-light)",
            marginBottom: "var(--space-xl)",
          }}
        >
          Rhyneer Consulting LLC
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
          <ClientWorkCard
            title="ODAPT"
            subtitle="YC W25 - AI Application Builder"
            timeline="~1 Month (2025)"
            description="Frontend architecture overhaul for AI-powered application builder (Lovable competitor). Migrated 10,000+ lines from vanilla JavaScript to TypeScript + Next.js with recursive iframe architecture where AI generates and modifies its own running interface in real-time."
            metrics={[
              "45% frontend performance improvement",
              "60% increase in codebase maintainability",
              "35% reduction in runtime defects",
              "Recursive iframe architecture with hot-reload stability",
            ]}
            techStack={["TypeScript", "Next.js 14", "React 18", "Dynamic Component Injection"]}
          />

          <ClientWorkCard
            title="Crypto Trading Analytics"
            subtitle="DeFi Investment Firm"
            timeline="2025 (Ongoing)"
            description="Real-time yield tracking dashboard for $20M crypto portfolio. Built cross-chain price normalization engine (67 blockchains). Reduced time-to-insight by 95% (5-8 hours → instant)."
            metrics={[
              "$20M+ in assets under management",
              "95% reduction in time-to-insight",
            ]}
            techStack={["Next.js", "TypeScript", "DeBank API", "Supabase", "PostgreSQL"]}
          />

          <ClientWorkCard
            title="Cancer Education Platform"
            subtitle="Healthcare Startup (C0)"
            timeline="~1 Month (2025)"
            description="AI-powered cancer education platform aggregating information from three sources: public web content (Google, Reddit, Quora via Firecrawl), AI-generated responses (OpenAI), and clinician-reviewed content. Addresses critical gap where 66% of cancer patients seek information online but only 30% discuss findings with clinicians."
            metrics={[
              "Multi-source comparison interface",
              "Role-based access control (Patient, Medical Reviewer, Admin)",
              "Healthcare-grade security with JWT authentication",
              "Intelligent web scraping with Firecrawl",
            ]}
            techStack={["React", "TypeScript", "FastAPI", "Firecrawl", "OpenAI", "JWT Auth"]}
          />

          <ClientWorkCard
            title="Mimetic"
            subtitle="Video Generation Pipeline"
            timeline="2025 (Ongoing)"
            description="Automated video generation pipeline for seed-stage startup (raised $1.5M). Subagent-based script generation with structured output, parallelized 4-second chunks, continuous footage using last-frame seeding, and video cloning capability to recreate existing videos with same feel/color schemes."
            metrics={[
              "Parallelized video generation for speed",
              "Continuous footage via frame extraction",
              "Transcript-based precise cutting with timestamps",
              "Video cloning with style preservation",
            ]}
            techStack={["Claude Code", "Agent Coordination", "Replicate API", "11 Labs", "FFMPEG"]}
          />
        </div>
      </section>

      {/* Agency Work */}
      <section>
        <h2
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-xl)",
            color: "var(--color-white)",
            marginBottom: "var(--space-lg)",
            letterSpacing: "0.05em",
          }}
        >
          AGENCY WORK
        </h2>
        <p
          style={{
            fontSize: "var(--font-size-md)",
            color: "var(--color-gray-light)",
            marginBottom: "var(--space-xl)",
          }}
        >
          Concord USA
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
          <ClientWorkCard
            title="International Health Tech Company"
            subtitle="E-Commerce Platform"
            timeline="Jun 2023 - Dec 2024"
            description="Full-stack developer for e-commerce web application at 5,000+ employee hearing aid company. Navigated peak enterprise complexity across React, Knockout.js, and Blazor frontends with C# .NET microservices backend."
            metrics={[
              "Optimized page loading by seconds",
              "Reduced technical debt across massive codebase",
              "Architected features across multiple applications & 3rd-party APIs",
              "Fixed critical authentication & authorization vulnerabilities",
            ]}
            techStack={["React", "Knockout.js", "Blazor", "C# .NET", "Microservices"]}
          />

          <ClientWorkCard
            title="Internal Timesheet Platform"
            subtitle="Consulting Agency Tool"
            timeline="Aug 2022 - Apr 2023"
            description="Primary developer on timesheet submission and review platform for consulting agency. Employees submit timesheets via web app, agencies review and approve with notes. Integrated with Salesforce API for data synchronization. Quote from team: '2x commits and 5x code vs any other developer'"
            metrics={[
              "500 active users",
              "2,000 timesheets processed monthly",
              "Salesforce integration for seamless data sync",
            ]}
            techStack={["React", "PostgreSQL", "Spring Boot", "Salesforce API"]}
          />
        </div>
      </section>
    </main>
  )
}
