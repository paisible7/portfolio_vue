<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface TableHeadProps extends HTMLAttributes {}

const props = defineProps<TableHeadProps>()

const headClass = computed(() =>
  cn(
    'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    props.class,
  ),
)
</script>

<template>
  <th
    data-slot="table-head"
    :class="headClass"
  >
    <slot />
  </th>
</template>
