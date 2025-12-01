<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <span data-slot="dropdown-menu-shortcut" :class="['text-muted-foreground ml-auto text-xs tracking-widest', props.class]">
    <slot />
  </span>
</template>
