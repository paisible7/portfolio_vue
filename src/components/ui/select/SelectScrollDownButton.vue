<script setup lang="ts">
import { SelectScrollDownButton } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down-button"
    :class="['flex cursor-default items-center justify-center py-1', props.class]"
  >
    <span class="size-4">▾</span>
  </SelectScrollDownButton>
</template>
