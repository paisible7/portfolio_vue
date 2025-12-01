<script setup lang="ts">
import { DialogClose as SheetClose } from 'radix-vue'
</script>

<template>
  <SheetClose data-slot="sheet-close">
    <slot />
  </SheetClose>
</template>
