<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '@/components/ui/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <nav
    aria-label="breadcrumb"
    :class="cn(props.class)"
  >
    <slot />
  </nav>
</template>
