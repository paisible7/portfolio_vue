<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PaginationListItem, type PaginationListItemProps } from 'radix-vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/components/ui/utils'

interface Props extends PaginationListItemProps {
  class?: HTMLAttributes['class']
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  asChild: true,
  isActive: false,
})

const delegatedProps = computed(() => {
  const { class: _, isActive, ...delegated } = props
  return delegated
})
</script>

<template>
  <PaginationListItem v-bind="delegatedProps">
    <Button
      :class="cn('h-9 w-9 p-0', props.class)"
      :variant="isActive ? 'outline' : 'ghost'"
    >
      <slot />
    </Button>
  </PaginationListItem>
</template>
