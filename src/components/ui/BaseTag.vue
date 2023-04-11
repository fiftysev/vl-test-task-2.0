<script setup lang="ts">
type TagProps = {
  content: string | number;
  variant: 'primary' | 'secondary' | 'success' | 'error';
};

defineProps<TagProps>();
</script>

<template>
  <span class="tag" :class="variant">{{ content }}</span>
</template>

<style scoped lang="scss">
.tag {
  color: white;
  width: fit-content;

  font-weight: bold;
  font-size: 0.8rem;

  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  &.primary {
    background-color: $primaryColor;
  }
  &.success {
    background-color: $successColor;
  }
  &.error {
    background-color: $errorColor;
  }
  &.secondary {
    background-color: $secondaryColor;
  }
}
</style>
