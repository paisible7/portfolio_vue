<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div data-slot="drawer-footer" :class="['flex flex-col-reverse gap-2 sm:flex-row sm:justify-end p-4', props.class]">
    <slot />
  </div>
</template>
