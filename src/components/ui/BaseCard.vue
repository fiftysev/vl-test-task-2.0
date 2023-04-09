<script setup lang="ts"></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  @include stack;

  background-color: $lightBackgroundColor;
  padding: 1rem;
  border: 1px solid lighten($color: $textColor, $amount: 60%);
}
</style>
