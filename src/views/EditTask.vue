<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useVModel } from 'effector-vue/composition';

import { formModel } from '@/stores/task-form.store';

import TaskForm from '@/components/task/TaskForm.vue';

const task = useVModel(formModel.$form);

const { uid } = useRoute().params;
</script>

<template>
  <task-form :on-submit="() => formModel.submitUpdate(uid as string)" :task="task" />
</template>

<style scoped lang="scss"></style>
