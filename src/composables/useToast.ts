import { ref } from 'vue'

export type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: number
  message: string
  type: ToastType
  duration?: number
}

const toasts = ref<Toast[]>([])
let nextId = 0

export const useToast = () => {
  const addToast = (message: string, type: ToastType = 'info', duration = 5000) => {
    const id = nextId++
    toasts.value.push({ id, message, type, duration })

    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  const removeToast = (id: number) => {
    const index = toasts.value.findIndex((t) => t.id === id)
    if (index !== -1) {
      toasts.value.splice(index, 1)
    }
  }

  return {
    toasts,
    addToast,
    removeToast,
  }
}
