<script setup lang="ts">
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TabsContentProps & { class?: string }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TabsContent v-bind="delegatedProps" data-slot="tabs-content" :class="['flex-1 outline-none', props.class]">
    <slot />
  </TabsContent>
</template>
