<script setup lang="ts">
import { SelectSeparator } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <SelectSeparator data-slot="select-separator" :class="['bg-border pointer-events-none -mx-1 my-1 h-px', props.class]" />
</template>
