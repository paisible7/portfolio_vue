<script setup lang="ts">
import { ContextMenuGroup } from 'radix-vue'
</script>

<template>
  <ContextMenuGroup data-slot="context-menu-group">
    <slot />
  </ContextMenuGroup>
</template>
