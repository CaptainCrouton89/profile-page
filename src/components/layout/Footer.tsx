import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "3px solid var(--color-black)",
        padding: "var(--space-xl)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-md)",
        }}
        className="md:flex-row md:justify-between md:items-center"
      >
        <nav
          style={{
            display: "flex",
            gap: "var(--space-lg)",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/CaptainCrouton89"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-primary)",
              fontWeight: "var(--font-weight-bold)",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/silas-rhyneer"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-primary)",
              fontWeight: "var(--font-weight-bold)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:rhyneer.silas@gmail.com"
            style={{
              color: "var(--color-primary)",
              fontWeight: "var(--font-weight-bold)",
              textDecoration: "none",
            }}
          >
            Email
          </a>
        </nav>
        <div
          style={{
            color: "var(--color-gray-light)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          © {currentYear} Silas Rhyneer. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
