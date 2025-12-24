<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<AccordionItemProps & { class?: string }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AccordionItem v-bind="delegatedProps" data-slot="accordion-item" :class="['border-b last:border-b-0', props.class]">
    <slot />
  </AccordionItem>
</template>
