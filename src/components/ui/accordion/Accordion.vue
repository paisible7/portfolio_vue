<script setup lang="ts">
import { AccordionRoot } from 'radix-vue'
</script>

<template>
  <AccordionRoot data-slot="accordion">
    <slot />
  </AccordionRoot>
</template>
