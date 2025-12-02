<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AvatarRoot, type AvatarRootEmits, type AvatarRootProps, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/components/ui/utils'

const props = defineProps<AvatarRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<AvatarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <AvatarRoot
    v-bind="forwarded"
    :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', props.class)"
  >
    <slot />
  </AvatarRoot>
</template>
