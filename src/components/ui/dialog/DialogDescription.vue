<script setup lang="ts">
import { DialogDescription } from 'radix-vue'
</script>

<template>
  <DialogDescription data-slot="dialog-description" class="text-muted-foreground text-sm">
    <slot />
  </DialogDescription>
</template>
