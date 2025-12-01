<script setup lang="ts">
import { DialogTrigger as SheetTrigger } from 'radix-vue'
</script>

<template>
  <SheetTrigger data-slot="sheet-trigger">
    <slot />
  </SheetTrigger>
</template>
