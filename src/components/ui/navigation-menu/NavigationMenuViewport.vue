<script setup lang="ts">
import { NavigationMenuViewport } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div class="absolute top-full left-0 isolate z-50 flex justify-center">
    <NavigationMenuViewport
      data-slot="navigation-menu-viewport"
      :class="[
        'relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]',
        'origin-top-center bg-popover text-popover-foreground',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
        props.class,
      ]"
    />
  </div>
</template>
