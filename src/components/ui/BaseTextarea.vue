<script setup lang="ts">
import type { TextareaHTMLAttributes } from 'vue';

export interface TextAreaProps extends TextareaHTMLAttributes {
  modelValue?: unknown;
}

const emit = defineEmits<{
  (e: 'update:modelValue', payload: unknown): void;
}>();

defineProps<TextAreaProps>();

const handleInput = (e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value);
</script>

<template>
  <textarea class="textarea" @input="handleInput" :value="modelValue as string" />
</template>

<style scoped lang="scss">
.textarea {
  width: 100%;
  min-width: 320px;
  padding: 1rem;

  border: 1px solid lighten($color: $textColor, $amount: 50%);
  border-radius: 0.25rem;

  background-color: $lightBackgroundColor;
  color: $textColor;
}
</style>
