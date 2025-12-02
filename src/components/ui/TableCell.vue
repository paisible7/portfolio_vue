<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface TableCellProps extends HTMLAttributes {}

const props = defineProps<TableCellProps>()

const cellClass = computed(() =>
  cn(
    'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    props.class,
  ),
)
</script>

<template>
  <td
    data-slot="table-cell"
    :class="cellClass"
  >
    <slot />
  </td>
</template>
