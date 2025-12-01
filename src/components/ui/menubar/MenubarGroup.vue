<script setup lang="ts">
import { MenubarGroup } from 'radix-vue'
</script>

<template>
  <MenubarGroup data-slot="menubar-group">
    <slot />
  </MenubarGroup>
</template>
