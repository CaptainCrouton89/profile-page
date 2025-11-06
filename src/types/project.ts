export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics?: string[];
  year?: string;
  image?: string;
  github?: string;
  demo?: string;
}
