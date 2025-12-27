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

export const PROJECT_REPOS = [
  'SPOTIFY_CLONE',
  'analytics-dashboard',
  'social-app',
  'portfolio_vue',
  'task-management',
  'weather-dashboard',
]

const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_USERNAME}`

export const getRepoUrl = (repoName: string) => {
  return `${SOCIAL_LINKS.GITHUB}/${repoName}`
}

export const getRawReadmeUrl = (repoName: string, branch = 'main') => {
  return `${GITHUB_RAW_BASE}/${repoName}/${branch}/README.md`
}

export const getGithubImageUrl = (repoName: string, imagePath: string, branch = 'main') => {
  return `${GITHUB_RAW_BASE}/${repoName}/${branch}/${imagePath}`
}
