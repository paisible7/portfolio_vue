<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ExternalLink, Github, Loader2, Download } from 'lucide-vue-next'
import { PROJECT_REPOS, GITHUB_ROUTES, getRawReadmeUrl, getRepoUrl } from '@/config/links'

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  type: 'web' | 'mobile'
  repoName: string
  githubUrl: string
  demoUrl: string
  isLoading: boolean
  hasError: boolean
}

const projects = ref<Project[]>([])

const GRADIENTS = [
  'from-green-600 to-green-800',
  'from-orange-600 to-orange-800',
  'from-blue-500 to-orange-500',
  'from-slate-700 to-blue-900',
  'from-blue-700 to-slate-900',
  'from-orange-500 to-yellow-600',
  'from-purple-600 to-purple-800',
  'from-pink-500 to-rose-500',
]

const getGradient = (index: number) => GRADIENTS[index % GRADIENTS.length]

const extractTitle = (readme: string): string => {
  const match = readme.match(/^#\s*(.+)/m)
  return match && match[1] ? match[1].trim() : ''
}

const extractImage = (readme: string, repoPath: string): string => {
  // Special case for capslock as requested by user
  if (repoPath.toLowerCase().includes('capslock')) {
    return 'https://capslock.site/assets/IMG-20250329-WA0008-C1xQH2Qj.jpg'
  }

  const imgTagMatch = readme.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
  if (imgTagMatch && imgTagMatch[1]) {
    const src = imgTagMatch[1]
    if (src.startsWith('./') || src.startsWith('../') || !src.startsWith('http')) {
      const path = repoPath.includes('/') ? repoPath : `paisible7/${repoPath}`
      return `https://raw.githubusercontent.com/${path}/main/${src.replace(/^\.\//, '')}`
    }
    return src
  }

  const markdownMatch = readme.match(/!\[[^\]]*\]\(([^)]+)\)/i)
  if (markdownMatch && markdownMatch[1]) {
    const src = markdownMatch[1]
    if (src.startsWith('./') || src.startsWith('../') || !src.startsWith('http')) {
      const path = repoPath.includes('/') ? repoPath : `paisible7/${repoPath}`
      return `https://raw.githubusercontent.com/${path}/main/${src.replace(/^\.\//, '')}`
    }
    return src
  }

  return ''
}

const extractDescription = (readme: string): string => {
  const match = readme.match(/##\s*Description\s*\n+>\s*([^\n]+)/i)
  return match && match[1] ? match[1].trim() : ''
}

const extractType = (readme: string): 'web' | 'mobile' => {
  const match = readme.match(/Type:\*\*\s*(web|mobile)/i)
  return match && match[1] ? (match[1].toLowerCase() as 'web' | 'mobile') : 'web'
}

const extractDemo = (readme: string): string => {
  const match = readme.match(/Demo:\*\*\s*(https?:\/\/[^\s\n]+)/i)
  return match && match[1] ? match[1].trim() : ''
}

const extractTags = (readme: string): string[] => {
  const stackMatch = readme.match(/##\s*Stack Technique\s*\n([\s\S]*?)(?=\n##|\n---|\n$)/i)
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

const loadProject = async (repoName: string, index: number): Promise<Project> => {
  const project: Project = {
    title: repoName,
    description: '',
    tags: [],
    image: '',
    type: 'web',
    repoName,
    githubUrl: getRepoUrl(repoName),
    demoUrl: '',
    isLoading: true,
    hasError: false,
  }

  try {
    const response = await fetch(getRawReadmeUrl(repoName))
    if (!response.ok) {
      project.hasError = true
      project.isLoading = false
      return project
    }

    const readme = await response.text()

    const title = extractTitle(readme)
    if (title) project.title = title

    project.image = extractImage(readme, repoName)
    
    const description = extractDescription(readme)
    if (description) project.description = description

    project.type = extractType(readme)
    project.demoUrl = extractDemo(readme)

    const tags = extractTags(readme)
    if (tags.length > 0) project.tags = tags

  } catch (error) {
    console.error(`Failed to load README for ${repoName}:`, error)
    project.hasError = true
  } finally {
    project.isLoading = false
  }

  return project
}

const extractReposFromMainReadme = (readme: string): string[] => {
  const sectionMatch = readme.match(/##\s*Projets\s*\n([\s\S]*?)(?=\n##|\n---|\n$)/i)
  if (sectionMatch && sectionMatch[1]) {
    const repos: string[] = []
    const lines = sectionMatch[1].split('\n')
    for (const line of lines) {
      // Capture the part after github.com/ (e.g., owner/repo)
      const match = line.match(/\[([^\]]+)\]\(https:\/\/github\.com\/([^/)]+\/[^/)]+)\)/i)
      if (match && match[2]) {
        const repoPath = match[2].trim()
        // Filter out organization repos (not starting with paisible7/)
        // except if they are just the repo name (which will default to paisible7)
        if (repoPath.includes('/') && !repoPath.startsWith('paisible7/')) {
          continue
        }
        repos.push(repoPath)
      }
    }
    return repos
  }
  return []
}

const isGlobalLoading = ref(true)

onMounted(async () => {
  try {
    // 1. Fetch main portfolio README to get the list of repos
    const response = await fetch(getRawReadmeUrl('portfolio_vue'))
    
    let repoNames: string[] = []
    
    if (response.ok) {
      const mainReadme = await response.text()
      repoNames = extractReposFromMainReadme(mainReadme)
    }

    // 2. Fallback to constant if no repos found or fetch failed
    if (repoNames.length === 0) {
      console.warn('Using static project list fallback')
      repoNames = PROJECT_REPOS
    }
    
    // 3. Load each project's data
    const loadedProjects = await Promise.all(
      repoNames.map((repoName, index) => loadProject(repoName, index))
    )
    
    projects.value = loadedProjects.filter(p => !p.hasError || p.title)
  } catch (error) {
    console.error('Error in onMounted:', error)
    // Emergency fallback
    const loadedProjects = await Promise.all(
      PROJECT_REPOS.map((repoName, index) => loadProject(repoName, index))
    )
    projects.value = loadedProjects.filter(p => !p.hasError || p.title)
  } finally {
    isGlobalLoading.value = false
  }
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

      <div v-if="projects.length === 0" class="flex justify-center">
        <Loader2 class="w-12 h-12 text-blue-400 animate-spin" />
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.repoName"
          class="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
        >
          <div 
            class="h-48 relative overflow-hidden flex items-center justify-center"
            :class="project.image ? 'bg-slate-900' : `bg-gradient-to-br ${getGradient(index)}`"
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
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Voir sur GitHub"
              >
                <Github class="w-6 h-6" />
              </a>
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
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
            <p v-if="project.description" class="text-white/70 mb-4 text-sm leading-relaxed line-clamp-2">
              {{ project.description }}
            </p>
            <div v-if="project.tags.length" class="flex flex-wrap gap-2">
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
