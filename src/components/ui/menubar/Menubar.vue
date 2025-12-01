<script setup lang="ts">
import { MenubarRoot } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <MenubarRoot data-slot="menubar" :class="['bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs', props.class]">
    <slot />
  </MenubarRoot>
</template>
