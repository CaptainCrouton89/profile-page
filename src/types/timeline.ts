export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  company?: string;
  skills?: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
}
