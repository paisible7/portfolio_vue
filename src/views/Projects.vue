<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
    gradient: 'from-blue-600 to-blue-800',
    links: { github: 'https://github.com/paisible7', demo: 'https://demo.com' },
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique avec graphiques interactifs et données en temps réel.',
    tags: ['Next.js', 'D3.js', 'WebSocket', 'Node.js'],
    gradient: 'from-orange-600 to-orange-800',
    links: { github: 'https://github.com/paisible7', demo: 'https://demo.com' },
  },
  {
    title: 'Social Media App',
    description: 'Application sociale avec système de posts, commentaires et notifications.',
    tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    gradient: 'from-blue-500 to-orange-500',
    links: { github: 'https://github.com/paisible7', demo: 'https://demo.com' },
  },
  {
    title: 'Portfolio Builder',
    description: 'Outil de création de portfolios avec éditeur drag-and-drop et templates.',
    tags: ['React', 'Tailwind', 'Vite', 'Zustand'],
    gradient: 'from-slate-700 to-blue-900',
    links: { github: 'https://github.com/paisible7', demo: 'https://demo.com' },
  },
  {
    title: 'Task Management',
    description: 'Application de gestion de tâches collaborative avec système de notifications.',
    tags: ['React', 'GraphQL', 'Apollo', 'Material-UI'],
    gradient: 'from-blue-700 to-slate-900',
    links: { github: 'https://github.com/paisible7', demo: 'https://demo.com' },
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard météo avec prévisions détaillées et visualisations interactives.',
    tags: ['React', 'OpenWeather API', 'Recharts', 'Motion'],
    gradient: 'from-orange-500 to-yellow-600',
    links: { github: 'https://github.com/paisible7', demo: 'https://demo.com' },
  },
] as const
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
          <div class="h-48 relative overflow-hidden" :class="`bg-gradient-to-br ${project.gradient}`">
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
                :href="project.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ExternalLink class="w-6 h-6" />
              </a>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl text-white mb-3">{{ project.title }}</h3>
            <p class="text-white/70 mb-4 text-sm leading-relaxed">
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
          href="https://github.com/paisible7"
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
</style>
