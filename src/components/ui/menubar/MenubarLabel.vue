<script setup lang="ts">
import { MenubarLabel } from 'radix-vue'
const props = withDefaults(defineProps<{ class?: string; inset?: boolean }>(), { inset: false })
</script>

<template>
  <MenubarLabel data-slot="menubar-label" :data-inset="props.inset" :class="['px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', props.class]">
    <slot />
  </MenubarLabel>
</template>
