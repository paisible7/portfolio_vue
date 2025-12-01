<script setup lang="ts">
import { DialogDescription as SheetDescription } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <SheetDescription data-slot="sheet-description" :class="['text-muted-foreground text-sm', props.class]">
    <slot />
  </SheetDescription>
</template>
