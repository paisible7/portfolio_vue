<script setup lang="ts">
import { DialogPortal as SheetPortal } from 'radix-vue'
</script>

<template>
  <SheetPortal data-slot="sheet-portal">
    <slot />
  </SheetPortal>
</template>
