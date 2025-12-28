<script setup lang="ts">
import { useToast } from '@/composables/useToast'
import { CheckCircle2, XCircle, Info, X } from 'lucide-vue-next'

const { toasts, removeToast } = useToast()

const getIcon = (type: string) => {
  switch (type) {
    case 'success': return CheckCircle2
    case 'error': return XCircle
    default: return Info
  }
}

const getTypeClass = (type: string) => {
  switch (type) {
    case 'success': return 'border-green-500/30 bg-green-500/10 shadow-green-500/10'
    case 'error': return 'border-red-500/30 bg-red-500/10 shadow-red-500/10'
    default: return 'border-blue-500/30 bg-blue-500/10 shadow-blue-500/10'
  }
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
    <TransitionGroup
      name="toast"
      tag="div"
      class="flex flex-col gap-3"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="pointer-events-auto min-w-[320px] max-w-md p-4 rounded-2xl backdrop-blur-md border shadow-xl flex items-center gap-4 transition-all duration-300"
        :class="getTypeClass(toast.type)"
      >
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
          <component :is="getIcon(toast.type)" class="w-5 h-5" />
        </div>
        
        <div class="flex-grow">
          <p class="text-sm font-semibold text-white">
            {{ toast.type === 'success' ? 'Succès' : toast.type === 'error' ? 'Erreur' : 'Information' }}
          </p>
          <p class="text-xs text-white/70 leading-tight mt-0.5">
            {{ toast.message }}
          </p>
        </div>

        <button
          @click="removeToast(toast.id)"
          class="p-1 hover:bg-white/10 rounded-lg transition-colors text-white/40 hover:text-white"
        >
          <X class="w-4 h-4" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-from {
  opacity: 0;
  transform: translateX(100px) scale(0.9);
}
.toast-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
