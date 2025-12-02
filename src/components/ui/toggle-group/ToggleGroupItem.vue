<script setup lang="ts">
import { type HTMLAttributes, computed, inject } from 'vue'
import { ToggleGroupItem, type ToggleGroupItemProps } from 'radix-vue'
import { cn } from '@/components/ui/utils'
import { toggleVariants } from '@/components/ui/toggle'

type ToggleGroupVariants = NonNullable<Parameters<typeof toggleVariants>[0]>

const context = inject<ToggleGroupVariants>('toggleGroup')

const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes['class']
  variant?: ToggleGroupVariants['variant']
  size?: ToggleGroupVariants['size']
}>()

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props
  return delegated
})
</script>

<template>
  <ToggleGroupItem
    v-bind="delegatedProps"
    :class="cn(toggleVariants({
      variant: context?.variant || variant,
      size: context?.size || size,
    }), props.class)"
  >
    <slot />
  </ToggleGroupItem>
</template>
