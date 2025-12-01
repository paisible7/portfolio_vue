<script setup lang="ts">
import { ContextMenuRoot } from 'radix-vue'
</script>

<template>
  <ContextMenuRoot data-slot="context-menu">
    <slot />
  </ContextMenuRoot>
</template>
