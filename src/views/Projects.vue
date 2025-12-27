<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ExternalLink, Github, Loader2, Download } from 'lucide-vue-next'
import { PROJECT_REPOS, GITHUB_ROUTES, getRawReadmeUrl } from '@/config/links'

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  gradient: string
  repoName: string
  type: 'web' | 'mobile'
  links: { github: string; demo: string }
  isLoading: boolean
}

const projects = ref<Project[]>([
  {
    title: 'Spotify Clone',
    description: 'Clone fonctionnel de Spotify développé avec Vue.js 3.',
    tags: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    image: '',
    gradient: 'from-green-600 to-green-800',
    repoName: PROJECT_REPOS.SPOTIFY_CLONE.name,
    type: PROJECT_REPOS.SPOTIFY_CLONE.type,
    links: { github: PROJECT_REPOS.SPOTIFY_CLONE.url, demo: PROJECT_REPOS.SPOTIFY_CLONE.demo },
    isLoading: true,
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique avec graphiques interactifs.',
    tags: ['Next.js', 'D3.js', 'WebSocket', 'Node.js'],
    image: '',
    gradient: 'from-orange-600 to-orange-800',
    repoName: PROJECT_REPOS.DASHBOARD.name,
    type: PROJECT_REPOS.DASHBOARD.type,
    links: { github: PROJECT_REPOS.DASHBOARD.url, demo: PROJECT_REPOS.DASHBOARD.demo },
    isLoading: true,
  },
  {
    title: 'Social Media App',
    description: 'Application sociale avec système de posts et notifications.',
    tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    image: '',
    gradient: 'from-blue-500 to-orange-500',
    repoName: PROJECT_REPOS.SOCIAL_MEDIA.name,
    type: PROJECT_REPOS.SOCIAL_MEDIA.type,
    links: { github: PROJECT_REPOS.SOCIAL_MEDIA.url, demo: PROJECT_REPOS.SOCIAL_MEDIA.demo },
    isLoading: true,
  },
  {
    title: 'Portfolio Builder',
    description: 'Outil de création de portfolios avec éditeur drag-and-drop.',
    tags: ['Vue.js', 'Tailwind', 'Vite', 'Pinia'],
    image: '',
    gradient: 'from-slate-700 to-blue-900',
    repoName: PROJECT_REPOS.PORTFOLIO.name,
    type: PROJECT_REPOS.PORTFOLIO.type,
    links: { github: PROJECT_REPOS.PORTFOLIO.url, demo: PROJECT_REPOS.PORTFOLIO.demo },
    isLoading: true,
  },
  {
    title: 'Task Management',
    description: 'Application de gestion de tâches collaborative.',
    tags: ['React', 'GraphQL', 'Apollo', 'Material-UI'],
    image: '',
    gradient: 'from-blue-700 to-slate-900',
    repoName: PROJECT_REPOS.TASK_MANAGER.name,
    type: PROJECT_REPOS.TASK_MANAGER.type,
    links: { github: PROJECT_REPOS.TASK_MANAGER.url, demo: PROJECT_REPOS.TASK_MANAGER.demo },
    isLoading: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard météo avec prévisions détaillées.',
    tags: ['React', 'OpenWeather API', 'Recharts', 'Motion'],
    image: '',
    gradient: 'from-orange-500 to-yellow-600',
    repoName: PROJECT_REPOS.WEATHER.name,
    type: PROJECT_REPOS.WEATHER.type,
    links: { github: PROJECT_REPOS.WEATHER.url, demo: PROJECT_REPOS.WEATHER.demo },
    isLoading: true,
  },
])

const extractImageFromReadme = (readme: string, repoName: string): string => {
  const imgTagMatch = readme.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
  if (imgTagMatch && imgTagMatch[1]) {
    const src = imgTagMatch[1]
    if (src.startsWith('./') || src.startsWith('../') || !src.startsWith('http')) {
      return `https://raw.githubusercontent.com/paisible7/${repoName}/main/${src.replace(/^\.\//, '')}`
    }
    return src
  }

  const markdownMatch = readme.match(/!\[(?:Banner|banner|Logo|logo|Screenshot|screenshot)[^\]]*\]\(([^)]+)\)/i)
  if (markdownMatch && markdownMatch[1]) {
    const src = markdownMatch[1]
    if (src.startsWith('./') || src.startsWith('../') || !src.startsWith('http')) {
      return `https://raw.githubusercontent.com/paisible7/${repoName}/main/${src.replace(/^\.\//, '')}`
    }
    return src
  }

  const anyImageMatch = readme.match(/!\[[^\]]*\]\(([^)]+)\)/i)
  if (anyImageMatch && anyImageMatch[1]) {
    const src = anyImageMatch[1]
    if (src.startsWith('./') || src.startsWith('../') || !src.startsWith('http')) {
      return `https://raw.githubusercontent.com/paisible7/${repoName}/main/${src.replace(/^\.\//, '')}`
    }
    return src
  }

  return ''
}

const extractDescriptionFromReadme = (readme: string): string => {
  const descMatch = readme.match(/##\s*(?:📝\s*)?Description\s*\n+>\s*([^\n]+)/i)
  if (descMatch && descMatch[1]) {
    return descMatch[1].trim()
  }
  return ''
}

const extractTagsFromReadme = (readme: string): string[] => {
  const stackMatch = readme.match(/##\s*(?:🛠\s*)?Stack Technique\s*\n([\s\S]*?)(?=\n##|\n---|\n$)/i)
  if (stackMatch && stackMatch[1]) {
    const tags: string[] = []
    const lines = stackMatch[1].split('\n')
    for (const line of lines) {
      const match = line.match(/\*\*[^:]+:\*\*\s*(.+)/i)
      if (match && match[1]) {
        tags.push(match[1].trim())
      }
    }
    return tags.slice(0, 4)
  }
  return []
}

const loadProjectData = async (project: Project) => {
  try {
    const response = await fetch(getRawReadmeUrl(project.repoName))
    if (!response.ok) {
      project.isLoading = false
      return
    }
    const readme = await response.text()

    const image = extractImageFromReadme(readme, project.repoName)
    if (image) project.image = image

    const description = extractDescriptionFromReadme(readme)
    if (description) project.description = description

    const tags = extractTagsFromReadme(readme)
    if (tags.length > 0) project.tags = tags
  } catch (error) {
    console.error(`Failed to load README for ${project.repoName}:`, error)
  } finally {
    project.isLoading = false
  }
}

onMounted(() => {
  projects.value.forEach(project => loadProjectData(project))
})
</script>

<template>
  <section id="projects" class="min-h-screen flex items-center justify-center px-6 py-20">
    <div class="max-w-7xl w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl text-blue-400 mb-4">
          Mes Projets
        </h2>
        <div class="h-1 w-24 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
        >
          <div 
            class="h-48 relative overflow-hidden flex items-center justify-center"
            :class="project.image ? 'bg-slate-900' : `bg-gradient-to-br ${project.gradient}`"
          >
            <Loader2 v-if="project.isLoading" class="w-8 h-8 text-white/50 animate-spin" />
            <img 
              v-else-if="project.image" 
              :src="project.image" 
              :alt="project.title"
              class="absolute inset-0 w-full h-full object-contain p-4"
            />
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div class="absolute inset-0 backdrop-blur-sm bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Github class="w-6 h-6" />
              </a>
              <a
                v-if="project.links.demo"
                :href="project.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                :title="project.type === 'mobile' ? 'Télécharger' : 'Voir la démo'"
              >
                <Download v-if="project.type === 'mobile'" class="w-6 h-6" />
                <ExternalLink v-else class="w-6 h-6" />
              </a>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl text-white mb-3">{{ project.title }}</h3>
            <p class="text-white/70 mb-4 text-sm leading-relaxed line-clamp-2">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tag, tagIndex) in project.tags"
                :key="tagIndex"
                class="px-3 py-1 text-xs backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-blue-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a
          :href="GITHUB_ROUTES.REPOSITORIES"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 rounded-xl text-white transition-all hover:scale-105 group"
        >
          <Github class="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Voir plus sur GitHub</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
