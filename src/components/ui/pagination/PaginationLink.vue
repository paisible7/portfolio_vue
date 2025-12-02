<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PaginationListItem, type PaginationListItemProps } from 'radix-vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/components/ui/utils'

const props = withDefaults(defineProps<PaginationListItemProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <PaginationListItem v-bind="delegatedProps">
    <Button
      :class="cn('h-9 w-9 p-0', props.class)"
      :variant="isSelected ? 'outline' : 'ghost'"
    >
      <slot />
    </Button>
  </PaginationListItem>
</template>
