<script setup lang="ts">
import { MenubarCheckboxItem, MenubarItemIndicator } from 'radix-vue'
import { Check } from 'lucide-vue-next'
const props = defineProps<{ class?: string; checked?: boolean }>()
</script>

<template>
  <MenubarCheckboxItem
    data-slot="menubar-checkbox-item"
    :checked="props.checked"
    :class="[
      'relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
      props.class,
    ]"
  >
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <Check class="size-4" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarCheckboxItem>
</template>
