<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

const props = withDefaults(defineProps<{ class?: string }>(), {})

const classes = computed(() => cn('text-muted-foreground', props.class))
</script>

<template>
  <p data-slot="card-description" :class="classes">
    <slot />
  </p>
</template>
