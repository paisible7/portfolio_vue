<script setup lang="ts">
import { DialogPortal } from 'radix-vue'
</script>

<template>
  <DialogPortal data-slot="dialog-portal">
    <slot />
  </DialogPortal>
</template>
