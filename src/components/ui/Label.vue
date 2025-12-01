<script setup lang="ts">
import { computed } from 'vue'
import { cn } from './utils'

const props = withDefaults(defineProps<{ class?: string; forId?: string }>(), {})

const classes = computed(() => cn(
  'flex items-center gap-2 text-sm leading-none font-medium select-none',
  'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  props.class,
))
</script>

<template>
  <label :for="forId" data-slot="label" :class="classes">
    <slot />
  </label>
</template>
