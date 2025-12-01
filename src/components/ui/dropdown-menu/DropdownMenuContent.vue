<script setup lang="ts">
import { DropdownMenuPortal, DropdownMenuContent } from 'radix-vue'
const props = withDefaults(defineProps<{ sideOffset?: number; class?: string }>(), { sideOffset: 4 })
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      data-slot="dropdown-menu-content"
      :side-offset="props.sideOffset"
      :class="[
        'bg-popover text-popover-foreground z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
        'origin-[--radix-dropdown-menu-content-transform-origin] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        props.class,
      ]"
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
