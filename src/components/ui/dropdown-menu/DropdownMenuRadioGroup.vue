<script setup lang="ts">
import { DropdownMenuRadioGroup } from 'radix-vue'
</script>

<template>
  <DropdownMenuRadioGroup data-slot="dropdown-menu-radio-group">
    <slot />
  </DropdownMenuRadioGroup>
</template>
