<script setup lang="ts">
import TaskForm from '@/components/task/TaskForm.vue';
import type { Task } from '@/model/task';
import { useTasksStore } from '@/stores/tasks';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const store = useTasksStore();

const { uid } = useRoute().params;
let task: Task;

onBeforeMount(() => {
  try {
    task = store.getTaskByUid(uid as string);
  } catch (e: unknown) {
    console.error((e as Error).message)
  }
});
</script>

<template>
  <task-form :on-submit="store.editTask" :task="task" />
</template>

<style scoped lang="scss"></style>
