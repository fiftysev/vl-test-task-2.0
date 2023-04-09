<script setup lang="ts">
type RadioProps = {
  label?: string;
  modelValue?: unknown;
};

const emit = defineEmits<{
  (e: 'update:modelValue', payload: unknown): void;
}>();

defineProps<RadioProps>();

const handleInput = (e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value);
</script>
<template>
  <div class="input-container">
    <input type="radio" class="radio-btn" name="radio" v-bind="$attrs" @input="handleInput" :checked="modelValue === $attrs.value"/>
    <label v-if="label" for="radio">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .radio-btn {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: $primaryColor;
  }
}
</style>
