/**
 * Configuration des liens externes du portfolio
 */

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
  // On peut ajouter des routes spécifiques ici si besoin
}

export const PROJECT_REPOS = {
  ECOMMERCE: `${SOCIAL_LINKS.GITHUB}/ecommerce-platform`,
  DASHBOARD: `${SOCIAL_LINKS.GITHUB}/analytics-dashboard`,
  SOCIAL_MEDIA: `${SOCIAL_LINKS.GITHUB}/social-app`,
  PORTFOLIO: `${SOCIAL_LINKS.GITHUB}/portfolio_vue`,
  TASK_MANAGER: `${SOCIAL_LINKS.GITHUB}/task-management`,
  WEATHER: `${SOCIAL_LINKS.GITHUB}/weather-dashboard`,
}
