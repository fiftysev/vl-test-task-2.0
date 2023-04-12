<script setup lang="ts">
import { BaseCard, BaseGroup, BaseButton, BaseTag } from '@/components/ui';
import { priorityTagVariantMap } from '@/lib/constants/priority-tag-variant';
import type { Task } from '@/model/task';
import { useTasksStore } from '@/stores/tasks';
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

let task: Task;
const store = useTasksStore();

const { uid } = useRoute().params;
const router = useRouter();

const onBackClick = () => router.back();
const onEditClick = () => router.push(`/edit/${uid}`);
const onDeleteClick = () => {
  store.deleteTask(uid as string);
  router.back();
};

const formatter = Intl.DateTimeFormat('ru', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});

onBeforeMount(() => {
  try {
    task = store.getTaskByUid(uid as string);
  } catch (e: unknown) {
    console.error((e as Error).message)
  }
});
</script>

<template>
  <div class="button-row">
    <base-button @click="onBackClick" variant="ghost">Назад</base-button>
    <div class="action-buttons">
      <base-button variant="primary" @click="onEditClick">Редактировать</base-button>
      <base-button variant="error" @click="onDeleteClick">Удалить</base-button>
    </div>
  </div>
  <base-card class="task-card">
    <base-group heading="Название">
      <p>{{ task.title }}</p>
    </base-group>
    <base-group heading="Дата создания">
      <p>{{ formatter.format(Date.parse(task.createdAt)) }}</p>
    </base-group>
    <base-group heading="Приоритет">
      <base-tag :variant="priorityTagVariantMap[task.priority]" :content="task.priority" />
    </base-group>
    <base-group heading="Отметки" v-if="task.tags.length">
      <div class="row">
        <base-tag variant="secondary" v-for="tag in task.tags" :content="tag" :key="tag" />
      </div>
    </base-group>
    <base-group heading="Описание" v-if="task.description">
      <p>{{ task.description }}</p>
    </base-group>
  </base-card>
</template>

<style scoped lang="scss">
p {
  font-size: 1.1rem;
}
.task-card {
  @include stack;
  margin-top: 1rem;
}

.button-row {
  @include row;
  justify-content: space-between;

  .action-buttons {
    @include row;
  }
}

.row {
  @include row;
}
</style>
