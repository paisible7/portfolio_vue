<script setup lang="ts">
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 85 },
    ],
  },
  {
    category: 'Outils & Build',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vite / Webpack', level: 85 },
      { name: 'Jest / Testing Library', level: 80 },
      { name: 'Docker', level: 75 },
    ],
  },
  {
    category: 'Design & UX',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Animations CSS/JS', level: 90 },
      { name: 'Accessibilité', level: 85 },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js / Express', level: 80 },
      { name: 'REST / GraphQL', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
] as const
</script>

<template>
  <section id="skills" class="min-h-screen flex items-center justify-center px-6 py-20">
    <div class="max-w-6xl w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
          Compétences
        </h2>
        <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full" />
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(category, categoryIndex) in skillCategories"
          :key="categoryIndex"
          class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300"
        >
          <h3 class="text-2xl text-blue-400 mb-6">{{ category.category }}</h3>
          <div class="space-y-6">
            <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
              <div class="flex justify-between mb-2">
                <span class="text-white/90">{{ skill.name }}</span>
                <span class="text-orange-400">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full progress-bar"
                  :style="{ width: skill.level + '%', animationDelay: (skillIndex * 0.1) + 's' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.progress-bar {
  width: 0%;
  animation: slideIn 1s ease-out both;
}

@keyframes slideIn {
  from { 
    width: 0%; 
  }
}
</style>
