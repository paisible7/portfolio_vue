<script setup lang="ts">
import { MenubarTrigger } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <MenubarTrigger
    data-slot="menubar-trigger"
    :class="[
      'flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none',
      'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      props.class,
    ]"
  >
    <slot />
  </MenubarTrigger>
</template>
