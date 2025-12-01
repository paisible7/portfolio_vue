<script setup lang="ts">
import { DialogTitle as SheetTitle } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <SheetTitle data-slot="sheet-title" :class="['text-foreground font-semibold', props.class]">
    <slot />
  </SheetTitle>
</template>
