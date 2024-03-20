<script setup lang="ts">
import { useStore } from 'effector-vue/composition';
import { useRoute, useRouter } from 'vue-router';

import { taskModel } from '@/effector-stores/task-view.store';

import { priorityTagVariantMap } from '@/lib/constants/priority-tag-variant';

import { BaseButton, BaseCard, BaseGroup, BaseTag } from '@/components/ui';

const { uid } = useRoute().params;
const router = useRouter();

const onBackClick = () => router.back();
const onEditClick = () => router.push(`/edit/${uid}`);
const onDeleteClick = async () => {
  await taskModel.deleteTaskFx(uid as string);
};

const formatter = Intl.DateTimeFormat('ru', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});

const task = useStore(taskModel.$task);
</script>

<template>
  <div class="button-row">
    <base-button @click="onBackClick" variant="ghost">Назад</base-button>
    <div class="action-buttons">
      <base-button variant="primary" @click="onEditClick">Редактировать</base-button>
      <base-button variant="error" @click="onDeleteClick">Удалить</base-button>
    </div>
  </div>
  <base-card class="task-card" v-if="task">
    <base-group heading="Название">
      <p>{{ task.title }}</p>
    </base-group>
    <base-group heading="Дата создания">
      <p>{{ formatter.format(Date.parse(task.createdAt)) }}</p>
    </base-group>
    <base-group heading="Приоритет">
      <base-tag :variant="priorityTagVariantMap[task.priority]" :content="task.priority" />
    </base-group>
    <base-group heading="Отметки" v-if="task.taskTags.length">
      <div class="row">
        <base-tag
          variant="secondary"
          v-for="tag in task.taskTags"
          :content="tag.name"
          :key="tag.id"
        />
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
