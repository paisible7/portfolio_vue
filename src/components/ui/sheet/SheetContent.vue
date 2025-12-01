<script setup lang="ts">
import { DialogContent as SheetContent, DialogClose as SheetClose } from 'radix-vue'
import { X } from 'lucide-vue-next'
const props = withDefaults(defineProps<{ class?: string; side?: 'top' | 'right' | 'bottom' | 'left' }>(), { side: 'right' })
</script>

<template>
  <SheetContent
    data-slot="sheet-content"
    :class="[
      'bg-background fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      props.side === 'right' ? 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right' : '',
      props.side === 'left' ? 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left' : '',
      props.side === 'top' ? 'inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top' : '',
      props.side === 'bottom' ? 'inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom' : '',
      props.class,
    ]"
  >
    <slot />
    <SheetClose class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
      <X class="size-4" />
      <span class="sr-only">Close</span>
    </SheetClose>
  </SheetContent>
</template>
