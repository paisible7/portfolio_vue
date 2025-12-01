<script setup lang="ts">
import { NavigationMenuItem } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <NavigationMenuItem data-slot="navigation-menu-item" :class="['relative', props.class]">
    <slot />
  </NavigationMenuItem>
</template>
