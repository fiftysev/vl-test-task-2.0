<script setup lang="ts">
const inputModel = defineModel<unknown>();
</script>

<template>
  <select class="select" v-model="inputModel">
    <slot />
  </select>
</template>

<style lang="scss">
.select {
  padding: 0.5rem;
  -webkit-appearance: none;
  appearance: none;
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
