<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import CodeBackground from '@/views/CodeBackground.vue'
import Navigation from '@/views/Navigation.vue'
import Hero from '@/views/Hero.vue' // Hero is kept for LCP (Largest Contentful Paint)
import Preloader from '@/components/ui/Preloader.vue'
import ToastContainer from '@/components/ui/ToastContainer.vue'

// Lazy Loading for non-critical sections
const About = defineAsyncComponent(() => import('@/views/About.vue'))
const Projects = defineAsyncComponent(() => import('@/views/Projects.vue'))
const Skills = defineAsyncComponent(() => import('@/views/Skills.vue'))
const Contact = defineAsyncComponent(() => import('@/views/Contact.vue'))

const activeSection = ref<'home' | 'about' | 'projects' | 'skills' | 'contact'>('home')
const isLoading = ref(true)

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
  
  // Simulate page load for smooth transition
  setTimeout(() => {
    isLoading.value = false
  }, 2500)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="relative min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white overflow-hidden font-sans selection:bg-blue-500/30">
    <Transition name="fade">
      <Preloader v-if="isLoading" />
    </Transition>

    <div :class="{ 'opacity-0 scale-95': isLoading, 'opacity-100 scale-100': !isLoading }" class="transition-all duration-1000 ease-out-expo">
      <CodeBackground />
      <Navigation :active-section="activeSection" />

      <main class="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <div class="fixed top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" style="animation-duration: 4s"></div>
      <div class="fixed bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse" style="animation-duration: 6s"></div>
    </div>

    <ToastContainer />
  </div>
</template>

<style>
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-leave-to {
  opacity: 0;
}

.ease-out-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

/* Custom Selection style */
::selection {
  background: rgba(59, 130, 246, 0.3);
  color: white;
}
</style>

<style scoped>
</style>
