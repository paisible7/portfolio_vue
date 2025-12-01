<script setup lang="ts">
import { AccordionContent } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <AccordionContent data-slot="accordion-content" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm">
    <div :class="['pt-0 pb-4', props.class]">
      <slot />
    </div>
  </AccordionContent>
</template>
