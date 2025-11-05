import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  content: string;
  image?: string;
  github?: string;
  demo?: string;
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  company?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export interface AboutContent {
  name: string;
  title: string;
  bio: string;
  content: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(contentDirectory, 'projects');

  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const htmlContent = await markdownToHtml(content);

        return {
          slug,
          title: data.title || '',
          subtitle: data.subtitle || '',
          description: data.description || '',
          tags: data.tags || [],
          year: data.year || '',
          content: htmlContent,
          image: data.image,
          github: data.github,
          demo: data.demo,
        };
      })
  );

  return allProjects.sort((a, b) => (a.year > b.year ? -1 : 1));
}
