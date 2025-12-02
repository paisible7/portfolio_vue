<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '@/components/ui/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <li :class="cn('', props.class)">
    <slot />
  </li>
</template>
