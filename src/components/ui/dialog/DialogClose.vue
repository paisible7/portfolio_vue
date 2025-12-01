<script setup lang="ts">
import { DialogClose } from 'radix-vue'
</script>

<template>
  <DialogClose data-slot="dialog-close">
    <slot />
  </DialogClose>
</template>
