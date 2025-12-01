<script setup lang="ts">
import { MenubarMenu } from 'radix-vue'
</script>

<template>
  <MenubarMenu data-slot="menubar-menu">
    <slot />
  </MenubarMenu>
</template>
