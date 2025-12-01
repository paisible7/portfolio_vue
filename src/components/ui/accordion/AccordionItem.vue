<script setup lang="ts">
import { AccordionItem } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <AccordionItem data-slot="accordion-item" :class="['border-b last:border-b-0', props.class]">
    <slot />
  </AccordionItem>
</template>
