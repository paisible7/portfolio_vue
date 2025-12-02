<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface TableCaptionProps extends HTMLAttributes {}

const props = defineProps<TableCaptionProps>()

const captionClass = computed(() =>
  cn('text-muted-foreground mt-4 text-sm', props.class),
)
</script>

<template>
  <caption
    data-slot="table-caption"
    :class="captionClass"
  >
    <slot />
  </caption>
</template>
