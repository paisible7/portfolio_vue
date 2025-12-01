<script setup lang="ts">
import { NavigationMenuList } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <NavigationMenuList data-slot="navigation-menu-list" :class="['group flex flex-1 list-none items-center justify-center gap-1', props.class]">
    <slot />
  </NavigationMenuList>
</template>
