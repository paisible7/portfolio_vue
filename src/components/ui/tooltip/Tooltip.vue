<script setup lang="ts">
import { TooltipProvider, TooltipRoot } from 'radix-vue'
</script>

<template>
  <TooltipProvider :delay-duration="0" data-slot="tooltip-provider">
    <TooltipRoot data-slot="tooltip">
      <slot />
    </TooltipRoot>
  </TooltipProvider>
</template>
