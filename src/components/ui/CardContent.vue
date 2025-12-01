<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

const props = withDefaults(defineProps<{ class?: string }>(), {})

const classes = computed(() => cn('px-6 [&:last-child]:pb-6', props.class))
</script>

<template>
  <div data-slot="card-content" :class="classes">
    <slot />
  </div>
</template>
