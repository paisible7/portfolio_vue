<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CodeBackground from '@/views/CodeBackground.vue'
import Navigation from '@/views/Navigation.vue'
import Hero from '@/views/Hero.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'
import Contact from '@/views/Contact.vue'

// État actif de la section
const activeSection = ref<'home' | 'about' | 'projects' | 'skills' | 'contact'>('home')

const handleScroll = () => {
  const sections = ['home', 'about', 'projects', 'skills', 'contact'] as const
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="relative min-h-screen text-white overflow-hidden">
    <CodeBackground />
    <Navigation :active-section="activeSection" />

    <main class="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  </div>
</template>

<style scoped>
</style>
