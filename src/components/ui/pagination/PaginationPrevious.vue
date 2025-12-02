<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PaginationPrev, type PaginationPrevProps } from 'radix-vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/components/ui/utils'

const props = withDefaults(defineProps<PaginationPrevProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button
      :class="cn('gap-1 pl-2.5', props.class)"
      variant="ghost"
      size="default"
    >
      <slot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left h-4 w-4"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span>Previous</span>
      </slot>
    </Button>
  </PaginationPrev>
</template>
