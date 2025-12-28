<script setup lang="ts">
import { ref, onMounted } from 'vue'
import logoMP from '@/assets/images/logoMP.png'

const progress = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.random() * 15
    } else {
      progress.value = 100
      clearInterval(interval)
    }
  }, 100)
})
</script>

<template>
  <div class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <!-- Background Elements to match design system -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-blue-950"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>

      <div class="relative z-10 flex flex-col items-center">
        <!-- Logo with Glow -->
        <div class="relative mb-8 group">
          <div class="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-500 animate-pulse"></div>
          <img 
            :src="logoMP" 
            alt="Logo" 
            class="w-24 h-24 object-contain relative transition-transform duration-700 animate-float"
          />
        </div>

        <!-- Progress Bar -->
        <div class="w-48 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
          <div 
            class="h-full bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 ease-out"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
        
        <span class="mt-4 text-xs font-medium tracking-[0.2em] text-white/40 uppercase animate-pulse">
          Chargement de l'expérience...
        </span>
      </div>
    </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.05); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
