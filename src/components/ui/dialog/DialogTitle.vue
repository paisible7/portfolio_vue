<script setup lang="ts">
import { DialogTitle } from 'radix-vue'
</script>

<template>
  <DialogTitle data-slot="dialog-title" class="text-lg leading-none font-semibold">
    <slot />
  </DialogTitle>
</template>
