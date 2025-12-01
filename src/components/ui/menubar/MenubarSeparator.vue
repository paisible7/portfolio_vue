<script setup lang="ts">
import { MenubarSeparator } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <MenubarSeparator data-slot="menubar-separator" :class="['bg-border -mx-1 my-1 h-px', props.class]" />
</template>
