<script setup lang="ts">
import { MenubarRadioGroup } from 'radix-vue'
</script>

<template>
  <MenubarRadioGroup data-slot="menubar-radio-group">
    <slot />
  </MenubarRadioGroup>
</template>
