<script setup lang="ts">
import { DialogRoot as SheetRoot } from 'radix-vue'
</script>

<template>
  <SheetRoot data-slot="sheet">
    <slot />
  </SheetRoot>
</template>
