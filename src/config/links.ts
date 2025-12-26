/**
 * Configuration centralisée des liens externes du portfolio
 * ============================================================
 * Ce fichier centralise tous les liens vers vos réseaux sociaux,
 * vos projets GitHub et les utilitaires de génération d'URLs.
 */

// ============================================================
// CONFIGURATION DE BASE
// ============================================================

const GITHUB_USERNAME = 'paisible7'
const LINKEDIN_USERNAME = 'kalonji-mwinshi-augustin-73721727a'

// ============================================================
// LIENS SOCIAUX
// ============================================================

export const SOCIAL_LINKS = {
  GITHUB: `https://github.com/${GITHUB_USERNAME}`,
  LINKEDIN: `https://www.linkedin.com/in/${LINKEDIN_USERNAME}`,
  WHATSAPP: 'https://wa.me/243992142932',
  EMAIL: 'mailto:m.paisible7@gmail.com',
  PHONE: 'tel:+243992142932'
}

// ============================================================
// ROUTES GITHUB
// ============================================================

export const GITHUB_ROUTES = {
  REPOSITORIES: `${SOCIAL_LINKS.GITHUB}?tab=repositories`,
}

// ============================================================
// PROJETS GITHUB
// Chaque clé correspond à un projet avec son nom de dépôt
// ============================================================

export const PROJECT_REPOS = {
  ECOMMERCE: {
    name: 'ecommerce-platform',
    url: `${SOCIAL_LINKS.GITHUB}/ecommerce-platform`,
  },
  DASHBOARD: {
    name: 'analytics-dashboard',
    url: `${SOCIAL_LINKS.GITHUB}/analytics-dashboard`,
  },
  SOCIAL_MEDIA: {
    name: 'social-app',
    url: `${SOCIAL_LINKS.GITHUB}/social-app`,
  },
  PORTFOLIO: {
    name: 'portfolio_vue',
    url: `${SOCIAL_LINKS.GITHUB}/portfolio_vue`,
  },
  TASK_MANAGER: {
    name: 'task-management',
    url: `${SOCIAL_LINKS.GITHUB}/task-management`,
  },
  WEATHER: {
    name: 'weather-dashboard',
    url: `${SOCIAL_LINKS.GITHUB}/weather-dashboard`,
  },
}

// ============================================================
// UTILITAIRES GITHUB (Pour récupération dynamique des README)
// ============================================================

const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_USERNAME}`

/**
 * Génère l'URL du fichier README brut d'un dépôt
 * @param repoName - Nom du dépôt (ex: 'portfolio_vue')
 * @param branch - Branche (par défaut: 'main')
 */
export const getRawReadmeUrl = (repoName: string, branch = 'main') => {
  return `${GITHUB_RAW_BASE}/${repoName}/${branch}/README.md`
}

/**
 * Génère l'URL d'une image dans un dépôt GitHub
 * @param repoName - Nom du dépôt
 * @param imagePath - Chemin vers l'image (ex: 'screenshots/main.png')
 * @param branch - Branche (par défaut: 'main')
 */
export const getGithubImageUrl = (repoName: string, imagePath: string, branch = 'main') => {
  return `${GITHUB_RAW_BASE}/${repoName}/${branch}/${imagePath}`
}
