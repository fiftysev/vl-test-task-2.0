<script setup lang="ts">
type CheckboxProps = {
  label?: string;
};

defineProps<CheckboxProps>();

const inputModel = defineModel<string | string[]>()
</script>

<template>
  <div class="input-container">
    <input
      type="checkbox"
      name="checkbox"
      class="checkbox"
      v-bind="$attrs"
      v-model="inputModel"
    />
    <label v-if="label" for="checkbox"> {{ label }} </label>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .checkbox {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: $primaryColor;
  }
}
</style>
