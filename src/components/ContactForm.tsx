"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented later
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const inputStyles = {
    width: "100%",
    padding: "var(--space-md)",
    fontSize: "var(--font-size-md)",
    border: "var(--border-width) solid var(--color-black)",
    background: "var(--color-background)",
    color: "var(--color-white)",
    fontFamily: "inherit",
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <div style={{ marginBottom: "var(--space-lg)" }}>
        <label
          htmlFor="name"
          className="uppercase font-bold"
          style={{
            display: "block",
            marginBottom: "var(--space-sm)",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-white)",
            letterSpacing: "0.05em",
          }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyles}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--color-primary)"
            e.currentTarget.style.outline = "none"
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--color-black)"
          }}
        />
      </div>

      {/* Email Field */}
      <div style={{ marginBottom: "var(--space-lg)" }}>
        <label
          htmlFor="email"
          className="uppercase font-bold"
          style={{
            display: "block",
            marginBottom: "var(--space-sm)",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-white)",
            letterSpacing: "0.05em",
          }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyles}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--color-primary)"
            e.currentTarget.style.outline = "none"
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--color-black)"
          }}
        />
      </div>

      {/* Message Field */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <label
          htmlFor="message"
          className="uppercase font-bold"
          style={{
            display: "block",
            marginBottom: "var(--space-sm)",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-white)",
            letterSpacing: "0.05em",
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          style={{
            ...inputStyles,
            resize: "vertical",
            minHeight: "150px",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--color-primary)"
            e.currentTarget.style.outline = "none"
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--color-black)"
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="uppercase font-bold transition-all duration-150"
        style={{
          padding: "var(--space-md) var(--space-xl)",
          fontSize: "var(--font-size-md)",
          background: "var(--color-primary)",
          color: "var(--color-black)",
          border: "var(--border-width) solid var(--color-black)",
          boxShadow: "6px 6px 0 var(--color-black)",
          cursor: "pointer",
          letterSpacing: "0.05em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(3px, 3px)"
          e.currentTarget.style.boxShadow = "3px 3px 0 var(--color-black)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(0, 0)"
          e.currentTarget.style.boxShadow = "6px 6px 0 var(--color-black)"
        }}
      >
        Send Message
      </button>
    </form>
  )
}
