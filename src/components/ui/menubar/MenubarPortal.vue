<script setup lang="ts">
import { MenubarPortal } from 'radix-vue'
</script>

<template>
  <MenubarPortal data-slot="menubar-portal">
    <slot />
  </MenubarPortal>
</template>
