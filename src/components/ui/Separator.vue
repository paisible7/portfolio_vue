<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

const props = withDefaults(defineProps<{
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
  class?: string
}>(), {
  orientation: 'horizontal',
  decorative: true,
})

const classes = computed(() => cn(
  'bg-border shrink-0',
  props.orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
  props.class,
))
</script>

<template>
  <div :role="decorative ? 'none' : 'separator'" :aria-orientation="orientation" :class="classes" />
</template>
