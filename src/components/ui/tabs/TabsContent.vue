<script setup lang="ts">
import { TabsContent } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <TabsContent data-slot="tabs-content" :class="['flex-1 outline-none', props.class]">
    <slot />
  </TabsContent>
</template>
