<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';

export interface InputProps extends InputHTMLAttributes {
  label?: string;
  modelValue?: unknown;
}

const emit = defineEmits<{
  (e: 'update:modelValue', payload: unknown): void;
}>();

defineProps<InputProps>();

const handleInput = (e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value);
</script>

<template>
  <div class="input-container">
    <label v-if="label" :for="label">{{ label }}</label>
    <input
      class="input"
      :name="label ?? 'input'"
      v-bind="$attrs"
      @input="handleInput"
      :value="modelValue"
    />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  width: 100%;
  .input {
    min-height: 2.5rem;
    border: 1px solid lighten($color: $textColor, $amount: 50%);
    border-radius: 0.25rem;
    color: $textColor;
    width: 100%;
  }
}
</style>
