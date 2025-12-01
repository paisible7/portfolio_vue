<script setup lang="ts">
import { NavigationMenuRoot } from 'radix-vue'
const props = withDefaults(defineProps<{ class?: string; viewport?: boolean }>(), { viewport: true })
</script>

<template>
  <NavigationMenuRoot
    data-slot="navigation-menu"
    :data-viewport="props.viewport"
    :class="['group/navigation-menu relative flex max-w-max flex-1 items-center justify-center', props.class]"
  >
    <slot />
  </NavigationMenuRoot>
</template>
