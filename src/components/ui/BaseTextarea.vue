<script setup lang="ts">
const inputModel = defineModel<string>();
</script>

<template>
  <textarea class="textarea" v-model="inputModel" />
</template>

<style scoped lang="scss">
.textarea {
  width: 100%;
  min-width: 40%;
  padding: 0.5rem;
  font-family: inherit;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  border: 1px solid lighten($color: $textColor, $amount: 50%);
  border-radius: 0.25rem;

  background-color: $lightBackgroundColor;
  color: $textColor;
}
</style>
