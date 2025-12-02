<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface SkeletonProps extends HTMLAttributes {}

const props = defineProps<SkeletonProps>()

const skeletonClass = computed(() =>
  cn('bg-accent animate-pulse rounded-md', props.class),
)
</script>

<template>
  <div
    data-slot="skeleton"
    :class="skeletonClass"
  />
</template>
