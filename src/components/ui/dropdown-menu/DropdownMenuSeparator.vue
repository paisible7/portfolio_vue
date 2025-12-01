<script setup lang="ts">
import { DropdownMenuSeparator } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <DropdownMenuSeparator data-slot="dropdown-menu-separator" :class="['bg-border -mx-1 my-1 h-px', props.class]" />
</template>
