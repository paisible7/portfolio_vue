<script setup lang="ts">
import { DialogRoot } from 'radix-vue'
</script>

<template>
  <DialogRoot data-slot="dialog">
    <slot />
  </DialogRoot>
</template>
