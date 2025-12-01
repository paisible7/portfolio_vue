<script setup lang="ts">
import { DialogTrigger as DrawerTrigger } from 'radix-vue'
</script>

<template>
  <DrawerTrigger data-slot="drawer-trigger">
    <slot />
  </DrawerTrigger>
</template>
