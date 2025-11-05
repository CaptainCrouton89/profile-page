"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Chat" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-[1000]"
      style={{
        background: "var(--color-background)",
        borderBottom: "var(--border-width) solid var(--color-black)",
        padding: "var(--space-md) var(--space-xl)",
      }}
    >
      <nav className="flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="uppercase font-black"
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-white)",
            letterSpacing: "-0.03em",
          }}
        >
          SILAS RHYNEER
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden md:flex list-none"
          style={{ gap: "var(--space-lg)" }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="uppercase font-bold transition-colors duration-150"
                style={{
                  color: "var(--color-white)",
                  fontSize: "var(--font-size-sm)",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-white)"
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden p-0 bg-transparent border-0 cursor-pointer"
            aria-label="Toggle menu"
            style={{
              color: "var(--color-white)",
            }}
          >
            <Menu className="h-6 w-6" style={{ fontSize: "var(--font-size-xl)" }} />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full rounded-none p-0 border-0"
            style={{
              background: "var(--color-background)",
              borderBottom: "3px solid var(--color-black)",
            }}
          >
            <div
              className="flex flex-col"
              style={{
                padding: "var(--space-xl)",
                gap: "var(--space-lg)",
              }}
            >
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="uppercase font-bold transition-colors duration-150"
                    style={{
                      color: "var(--color-white)",
                      fontSize: "var(--font-size-sm)",
                      letterSpacing: "0.05em",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-primary)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-white)"
                    }}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
