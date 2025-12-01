<script setup lang="ts">
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'radix-vue'
const props = defineProps<{
  class?: string
  defaultValue?: number[]
  value?: number[]
  min?: number
  max?: number
  orientation?: 'horizontal' | 'vertical'
  disabled?: boolean
}>()
</script>

<template>
  <SliderRoot
    data-slot="slider"
    :default-value="defaultValue"
    :value="value"
    :min="min"
    :max="max"
    :orientation="orientation"
    :disabled="disabled"
    :class="[
      'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50',
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
      props.class,
    ]"
  >
    <SliderTrack
      data-slot="slider-track"
      :class="[
        'bg-muted relative grow overflow-hidden rounded-full',
        'data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
      ]"
    >
      <SliderRange
        data-slot="slider-range"
        :class="[
          'bg-primary absolute',
          'data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
        ]"
      />
    </SliderTrack>
    <SliderThumb
      v-for="(_, i) in (value ?? defaultValue ?? [min, max])"
      :key="i"
      data-slot="slider-thumb"
      class="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderRoot>
</template>
