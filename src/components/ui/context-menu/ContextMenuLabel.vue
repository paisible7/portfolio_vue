<script setup lang="ts">
import { ContextMenuLabel } from 'radix-vue'
const props = withDefaults(defineProps<{ class?: string; inset?: boolean }>(), { inset: false })
</script>

<template>
  <ContextMenuLabel data-slot="context-menu-label" :data-inset="props.inset" :class="['text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', props.class]">
    <slot />
  </ContextMenuLabel>
</template>
