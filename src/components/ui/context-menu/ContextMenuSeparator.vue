<script setup lang="ts">
import { ContextMenuSeparator } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <ContextMenuSeparator data-slot="context-menu-separator" :class="['bg-border -mx-1 my-1 h-px', props.class]" />
</template>
