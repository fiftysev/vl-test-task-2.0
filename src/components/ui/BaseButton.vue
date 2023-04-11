<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

export interface ButtonProps extends ButtonHTMLAttributes {
  variant: 'ghost' | 'primary' | 'success' | 'error';
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'ghost'
});
</script>

<template>
  <button class="btn" :class="variant">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  border: none;
  min-width: 5rem;
  min-height: 2rem;
  cursor: pointer;

  color: #fff;
  font-weight: bold;

  padding: 1rem;

  border-radius: 0.25rem;

  &.ghost {
    background-color: $lightBackgroundColor;
    color: $textColor;
    border: 1px solid lighten($color: $textColor, $amount: 50%);
  }

  &.primary {
    background-color: $primaryColor;
  }

  &.success {
    background-color: $successColor;
  }

  &.error {
    background-color: $errorColor;
  }
}
</style>
