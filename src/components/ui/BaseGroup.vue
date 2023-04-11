<script setup lang="ts">
type GroupProps = {
  heading?: string;
};

defineProps<GroupProps>();
</script>
<template>
  <div class="group">
    <h4 class="heading" v-if="heading">{{ heading }}</h4>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.group {
  @include stack;
  align-items: start;
  gap: 0.5rem;

  .heading {
    text-transform: uppercase;
    font-weight: bold;
    color: lighten($color: $textColor, $amount: 20%);
  }
}
</style>
