<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface TableProps extends HTMLAttributes {}

const props = defineProps<TableProps>()

const tableClass = computed(() =>
  cn('w-full caption-bottom text-sm', props.class),
)
</script>

<template>
  <div
    data-slot="table-container"
    class="relative w-full overflow-x-auto"
  >
    <table
      data-slot="table"
      :class="tableClass"
    >
      <slot />
    </table>
  </div>
</template>
