<script setup lang="ts">
import type { SelectHTMLAttributes } from 'vue';

export interface SelectProps extends SelectHTMLAttributes {
  modelValue?: unknown;
}

const emit = defineEmits<{
  (e: 'update:modelValue', payload: unknown): void;
}>();

defineProps<SelectProps>();

const handleInput = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  if (target.multiple) {
    const values = Array.from(target.selectedOptions).map((opt) => opt.value);
    return emit('update:modelValue', values);
  }
  return emit('update:modelValue', target.value);
};
</script>

<template>
  <select class="select" @change="handleInput" :selected="modelValue">
    <slot />
  </select>
</template>

<style lang="scss">
.select {
  min-height: 2.5rem;
  min-width: 40%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  border: 1px solid lighten($color: $textColor, $amount: 50%);
  border-radius: 0.25rem;

  background-color: $lightBackgroundColor;
  color: $textColor;
}
</style>
