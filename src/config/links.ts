const GITHUB_USERNAME = 'paisible7'
const LINKEDIN_USERNAME = 'kalonji-mwinshi-augustin-73721727a'

export const SOCIAL_LINKS = {
  GITHUB: `https://github.com/${GITHUB_USERNAME}`,
  LINKEDIN: `https://www.linkedin.com/in/${LINKEDIN_USERNAME}`,
  WHATSAPP: 'https://wa.me/243992142932',
  EMAIL: 'mailto:m.paisible7@gmail.com',
  PHONE: 'tel:+243992142932'
}

export const GITHUB_ROUTES = {
  REPOSITORIES: `${SOCIAL_LINKS.GITHUB}?tab=repositories`,
}

export const PROJECT_REPOS = {
  SPOTIFY_CLONE: {
    name: 'SPOTIFY_CLONE',
    url: `${SOCIAL_LINKS.GITHUB}/SPOTIFY_CLONE`,
    demo: 'https://spotify.paisible.tech',
    type: 'web' as const,
  },
  DASHBOARD: {
    name: 'analytics-dashboard',
    url: `${SOCIAL_LINKS.GITHUB}/analytics-dashboard`,
    demo: 'https://dashboard.paisible.tech',
    type: 'web' as const,
  },
  SOCIAL_MEDIA: {
    name: 'social-app',
    url: `${SOCIAL_LINKS.GITHUB}/social-app`,
    demo: '',
    type: 'mobile' as const,
  },
  PORTFOLIO: {
    name: 'portfolio_vue',
    url: `${SOCIAL_LINKS.GITHUB}/portfolio_vue`,
    demo: 'https://paisible.tech',
    type: 'web' as const,
  },
  TASK_MANAGER: {
    name: 'task-management',
    url: `${SOCIAL_LINKS.GITHUB}/task-management`,
    demo: 'https://tasks.paisible.tech',
    type: 'web' as const,
  },
  WEATHER: {
    name: 'weather-dashboard',
    url: `${SOCIAL_LINKS.GITHUB}/weather-dashboard`,
    demo: 'https://weather.paisible.tech',
    type: 'web' as const,
  },
}

const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_USERNAME}`

export const getRawReadmeUrl = (repoName: string, branch = 'main') => {
  return `${GITHUB_RAW_BASE}/${repoName}/${branch}/README.md`
}

export const getGithubImageUrl = (repoName: string, imagePath: string, branch = 'main') => {
  return `${GITHUB_RAW_BASE}/${repoName}/${branch}/${imagePath}`
}
