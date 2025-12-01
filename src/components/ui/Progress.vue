<script setup lang="ts">
import { computed } from 'vue'
import { ProgressRoot, ProgressIndicator } from 'radix-vue'

const props = withDefaults(defineProps<{ class?: string; value?: number }>(), { value: 0 })
const translate = computed(() => `translateX(-${Math.max(0, Math.min(100, props.value))}%)`)
</script>

<template>
  <ProgressRoot data-slot="progress" :class="['bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', props.class]">
    <ProgressIndicator data-slot="progress-indicator" class="bg-primary h-full w-full flex-1 transition-all" :style="{ transform: translate }" />
  </ProgressRoot>
</template>
