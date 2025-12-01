<script setup lang="ts">
// Utility wrapper to mirror React's DialogFooter (not a radix primitive)
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div data-slot="dialog-footer" :class="['flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', props.class]">
    <slot />
  </div>
</template>
