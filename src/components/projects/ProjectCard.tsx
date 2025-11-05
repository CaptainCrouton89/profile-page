'use client'

import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  tags: string[]
  year: string
  slug: string
  image?: string
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  year,
  slug,
  image,
}: ProjectCardProps) {
  return (
    <Card>
      {image ? (
        <div
          style={{
            width: "100%",
            height: "250px",
            position: "relative",
            borderBottom: "3px solid var(--color-black)",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "250px",
            background: "linear-gradient(135deg, #FF6B00 0%, #CC5500 100%)",
            borderBottom: "3px solid var(--color-black)",
          }}
        />
      )}
      <CardHeader>
        <CardDescription>{subtitle}</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 leading-[1.5]" style={{ color: "var(--color-white)" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <span style={{ color: "var(--color-gray-light)", fontSize: "var(--font-size-sm)" }}>
          {year}
        </span>
        <Button asChild size="sm">
          <Link href={`/projects/${slug}`}>View Project →</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
