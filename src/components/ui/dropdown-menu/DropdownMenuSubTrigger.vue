<script setup lang="ts">
import { DropdownMenuSubTrigger } from 'radix-vue'
const props = withDefaults(defineProps<{ class?: string; inset?: boolean }>(), { inset: false })
</script>

<template>
  <DropdownMenuSubTrigger
    data-slot="dropdown-menu-sub-trigger"
    :data-inset="props.inset"
    :class="[
      'flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
      'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      'data-[inset]:pl-8',
      props.class,
    ]"
  >
    <slot />
    <span class="ml-auto">›</span>
  </DropdownMenuSubTrigger>
</template>
