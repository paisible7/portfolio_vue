<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface AlertTitleProps extends HTMLAttributes {}

const props = defineProps<AlertTitleProps>()

const titleClass = computed(() =>
  cn(
    'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
    props.class,
  ),
)
</script>

<template>
  <div
    data-slot="alert-title"
    :class="titleClass"
  >
    <slot />
  </div>
</template>
