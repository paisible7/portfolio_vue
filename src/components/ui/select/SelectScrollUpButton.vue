<script setup lang="ts">
import { SelectScrollUpButton } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <SelectScrollUpButton
    data-slot="select-scroll-up-button"
    :class="['flex cursor-default items-center justify-center py-1', props.class]"
  >
    <span class="size-4">▴</span>
  </SelectScrollUpButton>
</template>
