<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from './utils'

interface TableHeaderProps extends HTMLAttributes {}

const props = defineProps<TableHeaderProps>()

const headerClass = computed(() =>
  cn('[&_tr]:border-b', props.class),
)
</script>

<template>
  <thead
    data-slot="table-header"
    :class="headerClass"
  >
    <slot />
  </thead>
</template>
