<script setup lang="ts">
import { DialogTitle } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <DialogTitle data-slot="drawer-title" :class="['text-lg font-semibold', props.class]">
    <slot />
  </DialogTitle>
</template>
