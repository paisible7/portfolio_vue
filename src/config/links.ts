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
  'capslock',
  'analytics-dashboard',
  'social-app',
  'portfolio_vue',
  'task-management',
  'weather-dashboard',
]

const GITHUB_RAW_BASE = `https://raw.githubusercontent.com`

export const getRepoUrl = (repoPath: string) => {
  if (repoPath.includes('/')) return `https://github.com/${repoPath}`
  return `${SOCIAL_LINKS.GITHUB}/${repoPath}`
}

export const getRawReadmeUrl = (repoPath: string, branch = 'main') => {
  const path = repoPath.includes('/') ? repoPath : `${GITHUB_USERNAME}/${repoPath}`
  return `${GITHUB_RAW_BASE}/${path}/${branch}/README.md`
}

export const getGithubImageUrl = (repoPath: string, imagePath: string, branch = 'main') => {
  const path = repoPath.includes('/') ? repoPath : `${GITHUB_USERNAME}/${repoPath}`
  return `${GITHUB_RAW_BASE}/${path}/${branch}/${imagePath}`
}
