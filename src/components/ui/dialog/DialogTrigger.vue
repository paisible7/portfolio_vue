<script setup lang="ts">
import { DialogTrigger } from 'radix-vue'
</script>

<template>
  <DialogTrigger data-slot="dialog-trigger">
    <slot />
  </DialogTrigger>
</template>
