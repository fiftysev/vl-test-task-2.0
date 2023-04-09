<script setup lang="ts">
import type { Task } from '@/model/task';
import TaskListItem from './TaskListItem.vue';
type TaskListProps = {
  listData: Task[];
};

defineProps<TaskListProps>();
</script>

<template>
  <div class="task-list">
    <task-list-item v-for="task in listData" :task="task" :key="task.uid" />
  </div>
</template>

<style scoped lang="scss"></style>
