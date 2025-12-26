<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageSquare, Loader2 } from 'lucide-vue-next'
import { SOCIAL_LINKS } from '@/config/links'
import { sendEmail } from '@/services/emailService'

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const isLoading = ref(false)

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  if (isLoading.value) return

  isLoading.value = true
  
  const result = await sendEmail({
    name: formData.name,
    email: formData.email,
    message: formData.message
  })

  alert(result.message)
  
  if (result.success) {
    formData.name = ''
    formData.email = ''
    formData.message = ''
  }
  
  isLoading.value = false
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'm.paisible7@gmail.com', link: SOCIAL_LINKS.EMAIL },
  { icon: Phone, label: 'Téléphone', value: '+243 992 142 932', link: SOCIAL_LINKS.PHONE },
  { icon: MessageSquare, label: 'WhatsApp', value: '+243 992 142 932', link: SOCIAL_LINKS.WHATSAPP },
  { icon: Github, label: 'GitHub', value: 'Augustin_Kalonji', link: SOCIAL_LINKS.GITHUB },
  { icon: Linkedin, label: 'LinkedIn', value: 'Augustin Kalonji', link: SOCIAL_LINKS.LINKEDIN },
  { icon: MapPin, label: 'Localisation', value: 'Lubumbashi, RDCongo', link: undefined },
] as const
</script>

<template>
  <section id="contact" class="min-h-screen flex items-center justify-center px-6 py-20">
    <div class="max-w-6xl w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl text-blue-400 mb-4">
          Contact
        </h2>
        <div class="h-1 w-24 bg-blue-500 mx-auto rounded-full" />
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 class="text-2xl text-blue-400 mb-6">Restons en contact</h3>
            <p class="text-white/70 mb-8 leading-relaxed">
              Vous avez un projet en tête ? N'hésitez pas à me contacter.
              Je suis toujours ouvert à discuter de nouvelles opportunités et collaborations.
            </p>

            <div class="space-y-4">
              <component
                :is="item.link ? 'a' : 'div'"
                v-for="(item, index) in contactInfo"
                :key="index"
                :href="item.link"
                :target="item.link?.startsWith('http') ? '_blank' : undefined"
                :rel="item.link?.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-orange-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <component :is="item.icon" class="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div class="text-white/60 text-sm">{{ item.label }}</div>
                  <div class="text-white">{{ item.value }}</div>
                </div>
              </component>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h3 class="text-2xl text-blue-400 mb-6">Envoyez un message</h3>
          <form @submit="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-white/80 mb-2">Nom</label>
              <input
                type="text"
                required
                v-model="formData.name"
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label class="block text-white/80 mb-2">Email</label>
              <input
                type="email"
                required
                v-model="formData.email"
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label class="block text-white/80 mb-2">Message</label>
              <textarea
                required
                v-model="formData.message"
                rows="5"
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="w-full relative px-8 py-4 bg-blue-600 rounded-xl overflow-hidden transition-transform hover:scale-105 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                <Loader2 v-if="isLoading" class="w-5 h-5 animate-spin" />
                <Send v-else class="w-5 h-5" />
                {{ isLoading ? 'Envoi en cours...' : 'Envoyer le message' }}
              </span>
              <div class="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-16 text-white/50">
        <p>© 2025 M. Paisible. Tous droits réservés.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
