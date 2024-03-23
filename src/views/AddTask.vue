<script setup lang="ts">
import { useVModel } from 'effector-vue/composition';
import { formModel } from '@/stores/task-form.store';

import TaskForm from '@/components/task/TaskForm.vue';

const task = useVModel(formModel.$form);
</script>

<template>
  <task-form :task="task" :on-submit="formModel.submitCreate" />
</template>

<style scoped lang="scss"></style>
