<script setup lang="ts">
import { DropdownMenuPortal } from 'radix-vue'
</script>

<template>
  <DropdownMenuPortal data-slot="dropdown-menu-portal">
    <slot />
  </DropdownMenuPortal>
</template>
