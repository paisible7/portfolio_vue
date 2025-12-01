<script setup lang="ts">
import { SelectLabel } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <SelectLabel data-slot="select-label" :class="['text-muted-foreground px-2 py-1.5 text-xs', props.class]">
    <slot />
  </SelectLabel>
</template>
