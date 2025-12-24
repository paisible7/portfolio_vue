<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div data-slot="drawer-header" :class="['flex flex-col gap-1.5 p-4', props.class]">
    <slot />
  </div>
</template>
