<script setup lang="ts">
import { SelectPortal, SelectContent, SelectViewport, SelectScrollUpButton, SelectScrollDownButton } from 'radix-vue'
const props = withDefaults(defineProps<{ class?: string; position?: 'item-aligned' | 'popper' }>(), { position: 'popper' })
</script>

<template>
  <SelectPortal>
    <SelectContent
      data-slot="select-content"
      :position="props.position"
      :class="[
        'relative z-50 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
        'bg-popover text-popover-foreground',
        'origin-[--radix-select-content-transform-origin] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        props.position === 'popper' ? 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1' : '',
        props.class,
      ]"
    >
      <SelectScrollUpButton class="flex cursor-default items-center justify-center py-1">
        <span class="size-4">▴</span>
      </SelectScrollUpButton>
      <SelectViewport :class="['p-1', props.position === 'popper' ? 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1' : '']">
        <slot />
      </SelectViewport>
      <SelectScrollDownButton class="flex cursor-default items-center justify-center py-1">
        <span class="size-4">▾</span>
      </SelectScrollDownButton>
    </SelectContent>
  </SelectPortal>
</template>
