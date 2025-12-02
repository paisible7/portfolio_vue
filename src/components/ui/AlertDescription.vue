<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface AlertDescriptionProps extends HTMLAttributes {}

const props = defineProps<AlertDescriptionProps>()

const descriptionClass = computed(() =>
  cn(
    'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
    props.class,
  ),
)
</script>

<template>
  <div
    data-slot="alert-description"
    :class="descriptionClass"
  >
    <slot />
  </div>
</template>
