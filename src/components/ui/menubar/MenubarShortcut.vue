<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <span data-slot="menubar-shortcut" :class="['ml-auto text-xs tracking-widest text-muted-foreground', props.class]">
    <slot />
  </span>
</template>
