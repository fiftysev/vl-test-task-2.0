<script setup lang="ts">
import TaskForm from '@/components/task/TaskForm.vue';
import { useTasksStore } from '@/stores/tasks';
import { useRoute } from 'vue-router';

const store = useTasksStore();

const { uid } = useRoute().params;
const task = store.getTaskByUid(uid as string);
</script>

<template>
  <task-form :on-submit="store.editTask" :task="task" />
</template>

<style scoped lang="scss"></style>
