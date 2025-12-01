<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

const props = withDefaults(defineProps<{ class?: string }>(), {})

const classes = computed(() => cn('leading-none', props.class))
</script>

<template>
  <h4 data-slot="card-title" :class="classes">
    <slot />
  </h4>
</template>
