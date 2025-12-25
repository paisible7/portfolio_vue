<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Download, Loader2 } from 'lucide-vue-next'
import cvFile from '@/assets/docs/CV.pdf'

const props = defineProps<{
  activeSection: 'home' | 'about' | 'projects' | 'skills' | 'contact'
}>()

const isOpen = ref(false)
const isDownloading = ref(false)

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
] as const

const isActive = (id: typeof navItems[number]['id']) => props.activeSection === id

const scrollToSection = (id: typeof navItems[number]['id']) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    isOpen.value = false
  }
}

const handleDownload = async () => {
  if (isDownloading.value) return
  
  isDownloading.value = true
  
  // Simulation du délai de 3 secondes
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  // Déclenchement du téléchargement
  const link = document.createElement('a')
  link.href = cvFile
  link.download = 'CV_Augustin_Kalonji.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  isDownloading.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div class="max-w-7xl mx-auto">
      <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl">
        <div class="flex items-center justify-between">
          <div class="text-xl tracking-wider">
            <span class="">
              <!-- Logo / Marque -->
              <img src="/logoMP.png" class="w-10"/>
            </span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6 flex-1 justify-center">
            <button
              v-for="item in navItems"
              :key="item.id"
              @click="scrollToSection(item.id)"
              class="relative px-4 py-2 transition-all duration-300"
              :class="isActive(item.id) ? 'text-blue-400' : 'text-white/70 hover:text-white'"
            >
              {{ item.label }}
              <span
                v-if="isActive(item.id)"
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-500 rounded-full"
              />
            </button>
          </div>

          <!-- CV Download Button -->
          <button
            @click="handleDownload"
            :disabled="isDownloading"
            class="hidden md:flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg text-white text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Loader2 v-if="isDownloading" class="w-4 h-4 animate-spin" />
            <Download v-else class="w-4 h-4" />
            <span>{{ isDownloading ? 'Téléchargement...' : 'Télécharger CV' }}</span>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Ouvrir/fermer le menu"
          >
            <Menu v-if="!isOpen" class="w-6 h-6 text-white" />
            <X v-else class="w-6 h-6 text-white" />
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isOpen" class="md:hidden mt-4 pt-4 border-t border-white/20 flex flex-col gap-2">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="px-4 py-2 text-left rounded-lg transition-all"
            :class="isActive(item.id) ? 'bg-white/10 text-blue-400' : 'text-white/70 hover:bg-white/5 hover:text-white'"
          >
            {{ item.label }}
          </button>
          <button
            @click="handleDownload"
            :disabled="isDownloading"
            class="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg text-white text-sm transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Loader2 v-if="isDownloading" class="w-4 h-4 animate-spin" />
            <Download v-else class="w-4 h-4" />
            <span>{{ isDownloading ? 'Téléchargement...' : 'Télécharger CV' }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
