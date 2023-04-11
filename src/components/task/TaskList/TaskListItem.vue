<script setup lang="ts">
import { BaseCard } from '@/components/ui';
import type { Task } from '@/model/task';
type TaskListItemProps = {
  task: Task;
};

const formatter = new Intl.DateTimeFormat('ru');
defineProps<TaskListItemProps>();
</script>

<template>
  <base-card class="task-card" @click="() => $router.push(`/task/${task.uid}`)">
    <h2 class="heading">{{ task.title }}</h2>
    <p>Создано: {{ formatter.format(Date.parse(task.createdAt)) }}</p>
    <p>Приоритет: {{ task.priority }}</p>
    <p>Отметки: {{ task.tags.join(',') }}</p>
  </base-card>
</template>

<style scoped lang="scss">
.task-card {
  gap: 0.5rem;
  cursor: pointer;
  .heading {
    font-weight: bold;
    transition: 0.3s;
  }

  &:hover {
    .heading {
      color: $primaryColor;
    }
  }
}
</style>
