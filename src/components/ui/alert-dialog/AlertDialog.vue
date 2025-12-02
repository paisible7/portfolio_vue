<script setup lang="ts">
import { type AlertDialogRootEmits, type AlertDialogRootProps, AlertDialogRoot, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<AlertDialogRootProps>()
const emits = defineEmits<AlertDialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <AlertDialogRoot v-bind="forwarded">
    <slot />
  </AlertDialogRoot>
</template>
