import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
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
          GET IN TOUCH
        </h1>
        <p
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-gray-light)",
            lineHeight: "1.6",
          }}
        >
          Let's build something incredible together
        </p>
      </div>

      {/* Contact Methods */}
      <div
        style={{
          marginBottom: "var(--space-3xl)",
        }}
      >
        <h2
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-xl)",
            color: "var(--color-white)",
            marginBottom: "var(--space-lg)",
            letterSpacing: "0.05em",
            textAlign: "center",
          }}
        >
          WAYS TO REACH ME
        </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-lg)" }}>
            {/* Email */}
            <div
              style={{
                border: "var(--border-width) solid var(--color-black)",
                boxShadow: "4px 4px 0 var(--color-black)",
                padding: "var(--space-lg)",
                background: "var(--color-surface)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-md)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                <Mail size={24} style={{ color: "var(--color-primary)" }} />
                <h3
                  className="uppercase font-bold"
                  style={{
                    fontSize: "var(--font-size-md)",
                    color: "var(--color-white)",
                  }}
                >
                  Email
                </h3>
              </div>
              <p
                style={{
                  fontSize: "var(--font-size-md)",
                  color: "var(--color-gray-light)",
                  marginBottom: "var(--space-md)",
                }}
              >
                rhyneer.silas@gmail.com
              </p>
              <a
                href="mailto:rhyneer.silas@gmail.com"
                className="uppercase font-bold transition-all duration-150 inline-block"
                style={{
                  fontSize: "var(--font-size-sm)",
                  padding: "var(--space-sm) var(--space-md)",
                  background: "var(--color-white)",
                  color: "var(--color-black)",
                  border: "2px solid var(--color-black)",
                  textDecoration: "none",
                }}
              >
                Email Me →
              </a>
            </div>

            {/* LinkedIn */}
            <div
              style={{
                border: "var(--border-width) solid var(--color-black)",
                boxShadow: "4px 4px 0 var(--color-black)",
                padding: "var(--space-lg)",
                background: "var(--color-surface)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-md)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                <Linkedin size={24} style={{ color: "var(--color-primary)" }} />
                <h3
                  className="uppercase font-bold"
                  style={{
                    fontSize: "var(--font-size-md)",
                    color: "var(--color-white)",
                  }}
                >
                  LinkedIn
                </h3>
              </div>
              <p
                style={{
                  fontSize: "var(--font-size-md)",
                  color: "var(--color-gray-light)",
                  marginBottom: "var(--space-md)",
                }}
              >
                linkedin.com/in/silas-rhyneer
              </p>
              <a
                href="https://linkedin.com/in/silas-rhyneer"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase font-bold transition-all duration-150 inline-block"
                style={{
                  fontSize: "var(--font-size-sm)",
                  padding: "var(--space-sm) var(--space-md)",
                  background: "var(--color-white)",
                  color: "var(--color-black)",
                  border: "2px solid var(--color-black)",
                  textDecoration: "none",
                }}
              >
                Visit Profile →
              </a>
            </div>

            {/* GitHub */}
            <div
              style={{
                border: "var(--border-width) solid var(--color-black)",
                boxShadow: "4px 4px 0 var(--color-black)",
                padding: "var(--space-lg)",
                background: "var(--color-surface)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-md)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                <Github size={24} style={{ color: "var(--color-primary)" }} />
                <h3
                  className="uppercase font-bold"
                  style={{
                    fontSize: "var(--font-size-md)",
                    color: "var(--color-white)",
                  }}
                >
                  GitHub
                </h3>
              </div>
              <p
                style={{
                  fontSize: "var(--font-size-md)",
                  color: "var(--color-gray-light)",
                  marginBottom: "var(--space-md)",
                }}
              >
                github.com/CaptainCrouton89
              </p>
              <a
                href="https://github.com/CaptainCrouton89"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase font-bold transition-all duration-150 inline-block"
                style={{
                  fontSize: "var(--font-size-sm)",
                  padding: "var(--space-sm) var(--space-md)",
                  background: "var(--color-white)",
                  color: "var(--color-black)",
                  border: "2px solid var(--color-black)",
                  textDecoration: "none",
                }}
              >
                View Repos →
              </a>
            </div>
          </div>
      </div>

      {/* Availability Section */}
      <div
        style={{
          border: "var(--border-width) solid var(--color-black)",
          boxShadow: "6px 6px 0 var(--color-black)",
          padding: "var(--space-xl)",
          background: "var(--color-surface)",
        }}
      >
        <h2
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-xl)",
            color: "var(--color-white)",
            marginBottom: "var(--space-md)",
            letterSpacing: "0.05em",
          }}
        >
          AVAILABILITY
        </h2>
        <p
          style={{
            fontSize: "var(--font-size-md)",
            color: "var(--color-white)",
            lineHeight: "1.6",
            marginBottom: "var(--space-md)",
          }}
        >
          I'm currently seeking:
        </p>
        <ul
          style={{
            fontSize: "var(--font-size-md)",
            color: "var(--color-white)",
            lineHeight: "1.8",
            listStyle: "none",
            padding: 0,
            marginBottom: "var(--space-md)",
          }}
        >
          <li style={{ paddingLeft: "var(--space-md)", position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "var(--color-primary)",
              }}
            >
              •
            </span>
            Full-time senior engineering or tech lead roles
          </li>
          <li style={{ paddingLeft: "var(--space-md)", position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "var(--color-primary)",
              }}
            >
              •
            </span>
            Selective consulting projects (AI/LLM focused)
          </li>
        </ul>
        <p
          style={{
            fontSize: "var(--font-size-sm)",
            color: "var(--color-gray-mid)",
          }}
        >
          Response time: Usually within 48 hours
        </p>
      </div>
    </main>
  )
}
