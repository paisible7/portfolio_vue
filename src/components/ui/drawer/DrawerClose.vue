<script setup lang="ts">
import { DialogClose as DrawerClose } from 'radix-vue'
</script>

<template>
  <DrawerClose data-slot="drawer-close">
    <slot />
  </DrawerClose>
</template>
