<script setup lang="ts">
import { DialogContent, DialogClose } from 'radix-vue'
import { X } from 'lucide-vue-next'
</script>

<template>
  <DialogContent
    data-slot="dialog-content"
    class="bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
  >
    <slot />
    <DialogClose
      class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
      aria-label="Close"
    >
      <X class="size-4" aria-hidden="true" />
      <span class="sr-only">Close</span>
    </DialogClose>
  </DialogContent>
</template>
