<script setup lang="ts">
import TaskForm from '@/components/task/TaskForm.vue';
import { formModel } from '@/stores/task-form.store';
import { useVModel } from 'effector-vue/composition';

const task = useVModel(formModel.$form);
</script>

<template>
  <task-form :task="task" :on-submit="formModel.submitCreate" />
</template>

<style scoped lang="scss"></style>
