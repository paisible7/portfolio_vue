<script setup lang="ts">
const highlights = [
  {
    icon: '🧱',
    title: 'Code Propre',
    description: "Architecture modulaire et maintenable",
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: "Optimisation et rapidité d'exécution",
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Technologies de pointe et créativité',
  },
  {
    icon: '🚀',
    title: 'Livraison',
    description: 'Projets livrés dans les délais',
  },
] as const
</script>

<template>
  <section id="about" class="min-h-screen flex items-center justify-center px-6 py-20">
    <div class="max-w-6xl w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
          À Propos
        </h2>
        <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full" />
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h3 class="text-2xl text-blue-400 mb-4">Mon Parcours</h3>
          <p class="text-white/80 leading-relaxed mb-4">
            Développeur frontend passionné avec plus de 5 ans d'expérience dans la création
            d'applications web modernes et performantes. Je transforme des idées en expériences
            utilisateur exceptionnelles.
          </p>
          <p class="text-white/80 leading-relaxed">
            Toujours à l'affût des dernières technologies, j'aime relever de nouveaux défis
            et créer des solutions innovantes qui font la différence.
          </p>
        </div>

        <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h3 class="text-2xl text-blue-400 mb-4">Ma Vision</h3>
          <p class="text-white/80 leading-relaxed mb-4">
            Créer des interfaces qui ne sont pas seulement belles, mais aussi intuitives,
            accessibles et performantes. Chaque ligne de code doit avoir un but et apporter
            de la valeur.
          </p>
          <p class="text-white/80 leading-relaxed">
            Je crois en l'importance du détail, de la qualité du code et de l'expérience
            utilisateur pour construire des produits numériques qui durent.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in highlights"
          :key="index"
          class="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-orange-500/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span class="text-2xl">{{ item.icon }}</span>
          </div>
          <h4 class="text-lg text-white mb-2">{{ item.title }}</h4>
          <p class="text-white/60 text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
