<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <SwitchRoot
    data-slot="switch"
    :class="[
      'inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none',
      'data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background dark:data-[state=unchecked]:bg-input/80',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    ]"
  >
    <SwitchThumb
      data-slot="switch-thumb"
      :class="[
        'pointer-events-none block size-4 rounded-full ring-0 transition-transform',
        'bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground',
        'data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
      ]"
    />
  </SwitchRoot>
</template>
