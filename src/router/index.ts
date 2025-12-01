import { createRouter, createWebHistory } from 'vue-router'
import Hero from '@/views/Hero.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'hero',
      component: Hero,
      path: '/'
    },
    {
      name: 'about',
      component: About,
      path: '/about'
    },
    {
      name: 'projets',
      component: Projects,
      path: '/projects'
    }
  ],
})

export default router
