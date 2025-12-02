<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '@/components/ui/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      props.class,
    )"
  >
    <slot />
  </ol>
</template>
