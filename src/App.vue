<script setup lang="ts">
import { useStore } from 'effector-vue/composition';
import { messageHandler } from './stores/message-handler';

const message = useStore(messageHandler.$messages);
</script>

<template>
  <div class="messages-container">
    <transition name="list">
      <div class="message" v-if="message">{{ message }}</div>
    </transition>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.messages-container {
  position: relative;

  .message {
    z-index: 100;
    position: fixed;
    background-color: $errorColor;
    color: white;
    border-radius: 0.5rem;
    font-weight: bold;
    right: 1rem;
    bottom: 1rem;
    padding: 20px;
    text-align: center;
  }
}
</style>
@/stores/message-handler
