<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface TableBodyProps extends HTMLAttributes {}

const props = defineProps<TableBodyProps>()

const bodyClass = computed(() =>
  cn('[&_tr:last-child]:border-0', props.class),
)
</script>

<template>
  <tbody
    data-slot="table-body"
    :class="bodyClass"
  >
    <slot />
  </tbody>
</template>
