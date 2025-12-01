<script setup lang="ts">
import { DropdownMenuTrigger } from 'radix-vue'
</script>

<template>
  <DropdownMenuTrigger data-slot="dropdown-menu-trigger">
    <slot />
  </DropdownMenuTrigger>
</template>
