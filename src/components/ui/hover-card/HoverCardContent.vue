<script setup lang="ts">
import { HoverCardPortal, HoverCardContent } from 'radix-vue'
const props = withDefaults(defineProps<{ class?: string; align?: 'start' | 'center' | 'end'; sideOffset?: number }>(), { align: 'center', sideOffset: 4 })
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      data-slot="hover-card-content"
      :align="props.align"
      :side-offset="props.sideOffset"
      :class="[
        'bg-popover text-popover-foreground z-50 w-64 rounded-md border p-4 shadow-md outline-hidden',
        'origin-[--radix-hover-card-content-transform-origin] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        props.class,
      ]"
    >
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>
