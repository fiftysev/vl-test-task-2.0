<script setup lang="ts">
import { priorityTagVariantMap } from '@/lib/constants/priority-tag-variant';
import { dateFormatter } from '@/lib/format-date';

import { BaseCard, BaseTag } from '@/components/ui';

type TaskListItemProps = {
  task: TaskApi.Task;
};

defineProps<TaskListItemProps>();
</script>

<template>
  <base-card class="task-card" @click="() => $router.push(`/task/${task.uid}`)">
    <h2 class="heading">{{ task.title }}</h2>
    <p>Созданa: {{ dateFormatter.formatDateShort(task.createdAt) }}</p>
    <div class="row">
      <base-tag :variant="priorityTagVariantMap[task.priority]" :content="task.priority" />
      <template v-if="task.taskTags.length">
        <base-tag
          variant="secondary"
          v-for="tag in task.taskTags"
          :content="tag.name"
          :key="tag.name"
        />
      </template>
    </div>
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

  .row {
    @include row;
    margin: 0.5rem 0;
  }
}
</style>
