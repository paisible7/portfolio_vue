<script setup lang="ts">
import { DropdownMenuRadioItem, DropdownMenuItemIndicator, type DropdownMenuRadioItemProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DropdownMenuRadioItemProps & { class?: string }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="delegatedProps"
    data-slot="dropdown-menu-radio-item"
    :class="[
      'relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      `[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
      props.class,
    ]"
  >
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <span class="inline-block size-2 rounded-full bg-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
