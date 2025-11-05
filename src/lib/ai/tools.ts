import { tool } from 'ai';
import { z } from 'zod';

export const tools = {
  getProjectDetails: tool({
    description: 'Get detailed information about a specific project by its slug or title. Use this when the user asks about a particular project.',
    parameters: z.object({
      projectSlug: z.string().describe('The slug or identifier of the project (e.g., "ai-code-review-bot")'),
    }),
    execute: async ({ projectSlug }) => {
      // V1: Mock responses for demonstration
      // TODO: Replace with actual markdown parsing from content/projects

      const mockProjects: Record<string, unknown> = {
        'ai-code-review-bot': {
          title: 'AI Code Review Bot',
          subtitle: 'Machine Learning',
          description: 'Automated code review system using advanced language models to analyze pull requests and provide intelligent feedback on code quality, security vulnerabilities, and best practices.',
          tech: ['Node.js', 'OpenAI API', 'GitHub API', 'Express', 'React', 'WebSockets', 'AWS'],
          year: '2024',
          highlights: [
            'Reviewed over 10,000 pull requests',
            'Caught critical security bugs before production',
            'Reduced code review time by 40%',
            'Custom prompt engineering for code analysis'
          ],
        },
        'realtime-collab-platform': {
          title: 'Real-Time Collaboration Platform',
          subtitle: 'Full-Stack Development',
          description: 'Built a Figma-like collaborative design tool with real-time multiplayer editing, vector manipulation, and WebSocket-based synchronization.',
          tech: ['React', 'WebSockets', 'Canvas API', 'Node.js', 'Redis', 'PostgreSQL'],
          year: '2023',
          highlights: [
            'Supports 100+ concurrent users per room',
            'Sub-100ms latency for collaborative editing',
            'Operational transformation for conflict resolution',
            'Vector graphics engine from scratch'
          ],
        },
        'kubernetes-auto-scaler': {
          title: 'Kubernetes Auto-Scaler',
          subtitle: 'DevOps & Infrastructure',
          description: 'Custom Kubernetes controller that intelligently scales pods based on business metrics, reducing cloud costs by 40% while maintaining performance SLAs.',
          tech: ['Go', 'Kubernetes', 'Prometheus', 'Docker', 'Grafana'],
          year: '2023',
          highlights: [
            'Reduced cloud costs by 40%',
            'Maintained 99.9% uptime SLA',
            'Custom metrics integration',
            'Predictive scaling algorithms'
          ],
        },
      };

      const project = mockProjects[projectSlug];

      if (!project) {
        return {
          error: `Project "${projectSlug}" not found. Available projects: ai-code-review-bot, realtime-collab-platform, kubernetes-auto-scaler`,
        };
      }

      return project;
    },
  }),

  getGitHubInfo: tool({
    description: 'Get GitHub repository information including stars, languages, and recent activity. Use this when the user asks about GitHub metrics or repository details.',
    parameters: z.object({
      repoName: z.string().describe('The GitHub repository name (e.g., "username/repo-name")'),
    }),
    execute: async ({ repoName }) => {
      // V1: Mock responses for demonstration
      // TODO: Replace with actual GitHub API calls using GITHUB_TOKEN

      const mockRepos: Record<string, unknown> = {
        'ai-code-review-bot': {
          name: 'ai-code-review-bot',
          stars: 1247,
          forks: 89,
          language: 'TypeScript',
          languages: {
            'TypeScript': 65,
            'JavaScript': 25,
            'Python': 10,
          },
          description: 'AI-powered code review bot using gpt-4.1-mini',
          lastUpdated: '2024-11-01',
          isPublic: true,
        },
        'realtime-collab': {
          name: 'realtime-collab',
          stars: 834,
          forks: 52,
          language: 'TypeScript',
          languages: {
            'TypeScript': 70,
            'JavaScript': 20,
            'CSS': 10,
          },
          description: 'Real-time collaborative design tool',
          lastUpdated: '2023-12-15',
          isPublic: true,
        },
        'k8s-autoscaler': {
          name: 'k8s-autoscaler',
          stars: 523,
          forks: 38,
          language: 'Go',
          languages: {
            'Go': 95,
            'Shell': 5,
          },
          description: 'Custom Kubernetes controller for intelligent pod scaling',
          lastUpdated: '2023-10-20',
          isPublic: false,
        },
      };

      const repo = mockRepos[repoName];

      if (!repo) {
        return {
          error: `Repository "${repoName}" not found in portfolio.`,
        };
      }

      return repo;
    },
  }),
};
