<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AspectRatio, type AspectRatioProps } from 'radix-vue'
import { cn } from './utils'

const props = defineProps<AspectRatioProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AspectRatio
    v-bind="delegatedProps"
    :class="cn(props.class)"
  >
    <slot />
  </AspectRatio>
</template>
