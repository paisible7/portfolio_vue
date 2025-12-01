<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

const props = withDefaults(defineProps<{ class?: string }>(), {})

const classes = computed(() => cn(
  'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border',
  props.class,
))
</script>

<template>
  <div data-slot="card" :class="classes">
    <slot />
  </div>
</template>
