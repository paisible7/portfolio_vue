<script setup lang="ts">
import { PopoverRoot } from 'radix-vue'
</script>

<template>
  <PopoverRoot data-slot="popover">
    <slot />
  </PopoverRoot>
</template>
