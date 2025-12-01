<script setup lang="ts">
import { TabsRoot } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <TabsRoot data-slot="tabs" :class="['flex flex-col gap-2', props.class]">
    <slot />
  </TabsRoot>
</template>
