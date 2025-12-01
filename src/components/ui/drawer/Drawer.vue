<script setup lang="ts">
import { DialogRoot as DrawerRoot } from 'radix-vue'
</script>

<template>
  <DrawerRoot data-slot="drawer">
    <slot />
  </DrawerRoot>
</template>
