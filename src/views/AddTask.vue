<script setup lang="ts">
import TaskForm from '@/components/task/TaskForm.vue';
import { useTasksStore } from '@/stores/tasks';
const store = useTasksStore();
</script>

<template>
  <task-form :on-submit="store.addNewTask" />
</template>

<style scoped lang="scss"></style>
