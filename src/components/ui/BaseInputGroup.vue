<script setup lang="ts">
type InputGroupProps = {
  heading?: string;
};

defineProps<InputGroupProps>();
</script>
<template>
  <div class="input-group">
    <h4 class="heading" v-if="heading">{{ heading }}</h4>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.input-group {
  @include stack;
  align-items: start;

  .heading {
    text-transform: uppercase;
    font-weight: bold;
    color: lighten($color: $textColor, $amount: 20%);
  }
}
</style>
