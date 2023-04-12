<script setup lang="ts">
</script>

<template>
  <div class="not-found">
    <h1 class="heading">404</h1>
    <router-link to="/">На главную</router-link>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  @include stack;
  align-items: center;
  justify-content: center;
  .heading {
    font-size: 10rem;
    font-weight: bold;
  }

}
</style>