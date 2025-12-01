<script setup lang="ts">
import { ContextMenuSubTrigger } from 'radix-vue'
import { ChevronRight } from 'lucide-vue-next'
const props = withDefaults(defineProps<{ class?: string; inset?: boolean }>(), { inset: false })
</script>

<template>
  <ContextMenuSubTrigger
    data-slot="context-menu-sub-trigger"
    :data-inset="props.inset"
    :class="[
      'flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none',
      'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      'data-[inset]:pl-8',
      props.class,
    ]"
  >
    <slot />
    <ChevronRight class="ml-auto size-4" />
  </ContextMenuSubTrigger>
</template>
