<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  activeSection: 'home' | 'about' | 'projects' | 'skills' | 'contact'
}>()

const isOpen = ref(false)

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
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div class="max-w-7xl mx-auto">
      <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl">
        <div class="flex items-center justify-between">
          <div class="text-xl tracking-wider">
            <span class="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              <!-- Logo / Marque -->
            </span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex gap-8">
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
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-orange-500"
              />
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Ouvrir/fermer le menu"
          >
            <span v-if="!isOpen">☰</span>
            <span v-else>✕</span>
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
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
