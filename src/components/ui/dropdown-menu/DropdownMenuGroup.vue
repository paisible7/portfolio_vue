<script setup lang="ts">
import { DropdownMenuGroup } from 'radix-vue'
</script>

<template>
  <DropdownMenuGroup data-slot="dropdown-menu-group">
    <slot />
  </DropdownMenuGroup>
</template>
