<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-vue-next'
import { SOCIAL_LINKS } from '@/config/links'
import moiImg from '@/assets/images/perso/moi.png'

const displayText = ref('')
const fullText = 'Développeur Frontend'
let intervalId: number | null = null

onMounted(() => {
  let index = 0
  intervalId = window.setInterval(() => {
    if (index <= fullText.length) {
      displayText.value = fullText.slice(0, index)
      index++
    } else if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }, 100)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
    <div class="max-w-6xl w-full">
      <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl pt-10 pb-6 px-4 sm:pt-12 sm:pb-8 sm:px-6 md:pt-16 md:pb-10 md:px-8 shadow-2xl">
        <div class="text-center space-y-4">
          <div class="inline-block">
            <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full mt-4 mb-4 animate-float">
              <img :src="moiImg" alt="Photo de profil" class="w-full h-full rounded-full object-cover profile-shadow" />
            </div>
          </div>

          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 animate-pulse pb-1"
            style="animation-duration: 3s"
          >
            Augustin KALONJI
          </h1>

          <div class="h-10 flex items-center justify-center">
            <h2 class="text-xl md:text-2xl text-blue-300">
              {{ displayText }}
              <span class="animate-pulse">|</span>
            </h2>
          </div>

          <p class="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Passionné par la création d'expériences web innovantes et performantes.
          </p>

          <div class="flex gap-4 justify-center pt-6">
            <a
              href="#contact"
              class="relative inline-flex items-center justify-center w-14 h-14 md:w-auto md:h-auto md:px-8 md:py-4 bg-blue-600 rounded-full md:rounded-lg overflow-hidden transition-transform hover:scale-105 group"
            >
              <span class="relative z-10 flex items-center gap-2 font-medium text-white">
                <Mail class="w-6 h-6 md:w-5 md:h-5" />
                <span class="hidden md:inline whitespace-nowrap">Me contacter</span>
              </span>
              <div class="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div class="flex gap-3">
              <a
                :href="SOCIAL_LINKS.GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Github class="w-6 h-6" />
              </a>
              <a
                :href="SOCIAL_LINKS.LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Linkedin class="w-6 h-6" />
              </a>
            </div>
          </div>

          <a 
            href="#about" 
            class="pt-12 block animate-bounce cursor-pointer hover:text-blue-300 transition-colors"
            aria-label="Défiler vers la section À propos"
          >
            <ArrowDown class="w-8 h-8 mx-auto text-blue-400" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-shadow {
  box-shadow: 0 0 40px 10px rgba(59, 130, 246, 0.4);
  animation: float-shadow 6s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-shadow {
  0%, 100% {
    box-shadow: 0 0 40px 10px rgba(59, 130, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 60px 15px rgba(59, 130, 246, 0.2);
  }
}
</style>
