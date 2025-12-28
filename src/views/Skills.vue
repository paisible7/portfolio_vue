<script setup lang="ts">
import vuejsImg from '@/assets/images/skill/vuejs.png'
import tailwindImg from '@/assets/images/skill/tailwind.png'
import javascriptImg from '@/assets/images/skill/javascript.png'
import bootstrapImg from '@/assets/images/skill/bootstrap.png'
import githubImg from '@/assets/images/skill/github.png'
import figmaImg from '@/assets/images/skill/figma.png'
import flutterImg from '@/assets/images/skill/flutter.png'
import kotlinImg from '@/assets/images/skill/kotlin.png'
import firebaseImg from '@/assets/images/skill/firebase.png'
import supabaseImg from '@/assets/images/skill/supabase.png'
import djangoImg from '@/assets/images/skill/django.png'
import postgresqlImg from '@/assets/images/skill/postgresql.png'


import adobePSImg from '@/assets/images/skill/adobePS.png'
import canvaImg from '@/assets/images/skill/canva.png'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Vue.js', icon: vuejsImg },
      { name: 'JavaScript', icon: javascriptImg },
      { name: 'Tailwind CSS', icon: tailwindImg },
      { name: 'Bootstrap', icon: bootstrapImg },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'Flutter', icon: flutterImg },
      { name: 'Kotlin', icon: kotlinImg },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Firebase', icon: firebaseImg },
      { name: 'Supabase', icon: supabaseImg },
      { name: 'Django', icon: djangoImg },
      { name: 'PostgreSQL', icon: postgresqlImg },


    ],
  },
  {
    category: 'Outils & Design',
    skills: [
      { name: 'GitHub', icon: githubImg },
      { name: 'Figma', icon: figmaImg },
      { name: 'Photoshop', icon: adobePSImg },
      { name: 'Canva', icon: canvaImg },
    ],
  },
] as const
</script>

<template>
  <section id="skills" class="min-h-screen flex items-center justify-center px-6 py-20">
    <div class="max-w-6xl w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl text-blue-400 mb-4">
          Compétences
        </h2>
        <div class="h-1 w-24 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(category, categoryIndex) in skillCategories"
          :key="categoryIndex"
          class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300"
        >
          <h3 class="text-2xl text-blue-400 mb-6">{{ category.category }}</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              class="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 object-contain mb-3" />
              <span class="text-white/90 text-sm text-center">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
