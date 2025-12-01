<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

const props = withDefaults(defineProps<{ class?: string }>(), {})

const classes = computed(() => cn('flex items-center px-6 pb-6 [.border-t]:pt-6', props.class))
</script>

<template>
  <div data-slot="card-footer" :class="classes">
    <slot />
  </div>
</template>
