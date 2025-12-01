<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  type?: string
  class?: string
  modelValue?: string | number
}>(), {
  type: 'text',
})

const emit = defineEmits<{ (e: 'update:modelValue', value: string | number): void }>()

const classes = computed(() => cn(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  props.class,
))

function onInput(e: Event) {
  const t = e.target as HTMLInputElement
  emit('update:modelValue', props.type === 'number' ? Number(t.value) : t.value)
}
</script>

<template>
  <input
    :type="type"
    data-slot="input"
    :class="classes"
    :value="modelValue as any"
    v-bind="$attrs"
    @input="onInput"
  />
</template>
