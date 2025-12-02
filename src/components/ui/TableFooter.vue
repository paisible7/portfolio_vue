<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface TableFooterProps extends HTMLAttributes {}

const props = defineProps<TableFooterProps>()

const footerClass = computed(() =>
  cn(
    'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
    props.class,
  ),
)
</script>

<template>
  <tfoot
    data-slot="table-footer"
    :class="footerClass"
  >
    <slot />
  </tfoot>
</template>
