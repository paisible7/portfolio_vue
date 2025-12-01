<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  as?: 'span' | 'a' | 'div'
  href?: string
  class?: string
}>(), {
  variant: 'default',
  as: 'span',
})

const variantClasses: Record<string, string> = {
  default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90',
  destructive: 'border-transparent bg-destructive text-white hover:bg-destructive/90',
  outline: 'text-foreground hover:bg-accent hover:text-accent-foreground',
}

const base = 'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'

const classes = computed(() => cn(base, variantClasses[props.variant!], props.class))
</script>

<template>
  <component :is="as" :href="as === 'a' ? href : undefined" data-slot="badge" :class="classes">
    <slot />
  </component>
</template>
