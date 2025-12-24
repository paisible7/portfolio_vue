<script setup lang="ts">
import { DialogDescription } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <DialogDescription data-slot="drawer-description" :class="['text-sm text-muted-foreground', props.class]">
    <slot />
  </DialogDescription>
</template>
