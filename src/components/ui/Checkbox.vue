<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator } from 'radix-vue'
import { Check } from 'lucide-vue-next'
const props = defineProps<{ class?: string }>()
</script>

<template>
  <CheckboxRoot
    data-slot="checkbox"
    :class="[
      'peer size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none',
      'border-input bg-input-background dark:bg-input/30',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    ]"
  >
    <CheckboxIndicator data-slot="checkbox-indicator" class="flex items-center justify-center text-current transition-none">
      <Check class="size-3.5" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
