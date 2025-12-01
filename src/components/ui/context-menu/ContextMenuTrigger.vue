<script setup lang="ts">
import { ContextMenuTrigger } from 'radix-vue'
</script>

<template>
  <ContextMenuTrigger data-slot="context-menu-trigger">
    <slot />
  </ContextMenuTrigger>
</template>
