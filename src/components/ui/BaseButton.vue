<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';


export interface ButtonProps extends ButtonHTMLAttributes {
  variant: 'primary' | 'success' | 'error';
};

defineProps<ButtonProps>();
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

  color: $backgroundColor;
  font-weight: bold;

  padding: .5rem 1rem;

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
