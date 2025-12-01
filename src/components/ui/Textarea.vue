<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  class?: string
  modelValue?: string
  rows?: number | string
}>(), {
  rows: 4,
})

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const classes = computed(() => cn(
  'resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  props.class,
))

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLTextAreaElement).value)
}
</script>

<template>
  <textarea
    data-slot="textarea"
    :class="classes"
    :rows="rows as any"
    :value="modelValue"
    v-bind="$attrs"
    @input="onInput"
  />
</template>
