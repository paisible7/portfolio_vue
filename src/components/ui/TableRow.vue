<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface TableRowProps extends HTMLAttributes {}

const props = defineProps<TableRowProps>()

const rowClass = computed(() =>
  cn(
    'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
    props.class,
  ),
)
</script>

<template>
  <tr
    data-slot="table-row"
    :class="rowClass"
  >
    <slot />
  </tr>
</template>
