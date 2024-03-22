<script setup lang="ts">
import TaskForm from '@/components/task/TaskForm.vue';
import { formModel } from '@/stores/task-form.store';
import { useVModel } from 'effector-vue/composition';
import { useRoute } from 'vue-router';

const task = useVModel(formModel.$form);

const { uid } = useRoute().params;
</script>

<template>
  <task-form :on-submit="() => formModel.submitUpdate(uid as string)" :task="task" />
</template>

<style scoped lang="scss"></style>
