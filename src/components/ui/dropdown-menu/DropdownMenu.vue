<script setup lang="ts">
import { DropdownMenuRoot } from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot data-slot="dropdown-menu">
    <slot />
  </DropdownMenuRoot>
</template>
