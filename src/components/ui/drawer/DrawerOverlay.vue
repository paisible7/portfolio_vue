<script setup lang="ts">
import { DialogOverlay as DrawerOverlay } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <DrawerOverlay
    data-slot="drawer-overlay"
    :class="['fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', props.class]"
  />
</template>
