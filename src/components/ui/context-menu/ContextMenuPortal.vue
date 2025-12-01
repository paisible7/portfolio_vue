<script setup lang="ts">
import { ContextMenuPortal } from 'radix-vue'
</script>

<template>
  <ContextMenuPortal data-slot="context-menu-portal">
    <slot />
  </ContextMenuPortal>
</template>
