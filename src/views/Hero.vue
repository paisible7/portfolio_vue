<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

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
  <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-20">
    <div class="max-w-6xl w-full">
      <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
        <div class="text-center space-y-6">
          <div class="inline-block">
            <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-orange-500 p-1 mb-6">
              <div class="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span class="text-5xl"></span>
              </div>
            </div>
          </div>

          <h1
            class="text-6xl md:text-8xl bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400 bg-clip-text p-4 text-transparent animate-pulse"
            style="animation-duration: 3s"
          >
            Augustin KALONJI
          </h1>

          <div class="h-12 flex items-center justify-center">
            <h2 class="text-2xl md:text-3xl text-blue-300">
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
              class="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full overflow-hidden transition-transform hover:scale-105 group"
            >
              <span class="relative z-10 flex items-center gap-2">
                <span aria-hidden="true">✉</span>
                Me contacter
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div class="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <span class="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <span class="text-sm">in</span>
              </a>
            </div>
          </div>

          <div class="pt-12 animate-bounce">
            <div class="w-8 h-8 mx-auto text-blue-400 text-center">↓</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
