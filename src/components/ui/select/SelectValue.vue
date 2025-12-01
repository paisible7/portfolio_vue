<script setup lang="ts">
import { SelectValue } from 'radix-vue'
</script>

<template>
  <SelectValue data-slot="select-value">
    <slot />
  </SelectValue>
</template>
