<script setup lang="ts">
import { NavigationMenuIndicator } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <NavigationMenuIndicator
    data-slot="navigation-menu-indicator"
    :class="['top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in', props.class]"
  >
    <div class="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
  </NavigationMenuIndicator>
</template>
