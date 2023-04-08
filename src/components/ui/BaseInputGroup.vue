<script setup lang="ts">
type InputGroupProps = {
  heading?: string;
};

defineProps<InputGroupProps>();
</script>
<template>
  <div class="input-group">
    <h3 class="heading" v-if="heading">{{ heading }}</h3>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.input-group {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  .heading {
    text-transform: uppercase;
    font-weight: bold;
    color: lighten($color: $textColor, $amount: 20%);
  }
}
</style>
