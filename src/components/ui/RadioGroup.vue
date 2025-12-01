<script setup lang="ts">
import { RadioGroupRoot } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <RadioGroupRoot data-slot="radio-group" :class="['grid gap-3', props.class]">
    <slot />
  </RadioGroupRoot>
</template>
