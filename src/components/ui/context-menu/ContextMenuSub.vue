<script setup lang="ts">
import { ContextMenuSub } from 'radix-vue'
</script>

<template>
  <ContextMenuSub data-slot="context-menu-sub">
    <slot />
  </ContextMenuSub>
</template>
