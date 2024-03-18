<script setup lang="ts">
type RadioProps = {
  label?: string;
};

defineProps<RadioProps>();

const inputModel = defineModel<number | string>();
</script>
<template>
  <div class="input-container">
    <input type="radio" class="radio-btn" name="radio" v-bind="$attrs" v-model="inputModel" />
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
