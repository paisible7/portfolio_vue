<script setup lang="ts">
import { ContextMenuRadioGroup } from 'radix-vue'
</script>

<template>
  <ContextMenuRadioGroup data-slot="context-menu-radio-group">
    <slot />
  </ContextMenuRadioGroup>
</template>
