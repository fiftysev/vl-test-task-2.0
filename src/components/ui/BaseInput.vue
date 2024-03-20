<script setup lang="ts">
type InputProps = {
  label?: string;
};

defineProps<InputProps>();

const inputModel = defineModel<string>();
</script>

<template>
  <div class="input-container">
    <label v-if="label" :for="label">{{ label }}</label>
    <input class="input" :name="label ?? 'input'" v-bind="$attrs" v-model="inputModel" />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  width: 100%;
  .input {
    padding: 0.5rem;
    min-height: 2.5rem;
    border: 1px solid lighten($color: $textColor, $amount: 50%);
    border-radius: 0.25rem;
    color: $textColor;
    width: 100%;
  }
}
</style>
