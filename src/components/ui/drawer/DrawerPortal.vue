<script setup lang="ts">
import { DialogPortal as DrawerPortal } from 'radix-vue'
</script>

<template>
  <DrawerPortal data-slot="drawer-portal">
    <slot />
  </DrawerPortal>
</template>
