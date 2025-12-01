<script setup lang="ts">
// Utility wrapper to mirror React's DialogHeader (not a radix primitive)
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div data-slot="dialog-header" :class="['flex flex-col gap-2 text-center sm:text-left', props.class]">
    <slot />
  </div>
</template>
