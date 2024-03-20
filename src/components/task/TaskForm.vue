<script setup lang="ts">
import { PRIORITIES } from '@/lib/constants/priority';
import { TASK_TAGS } from '@/lib/constants/tags';
import { BaseButton, BaseCard, BaseGroup, BaseInput, BaseSelect, BaseTextarea } from '../ui';

type FormProps = {
  task: TaskApi.Task;
  onSubmit: (...args: any[]) => void;
};

defineProps<FormProps>();
</script>

<template>
  <base-button class="back-btn" variant="ghost" @click="() => $router.back()">Назад</base-button>
  <base-card>
    <form
      class="task-form"
      @submit.prevent="
        () => {
          onSubmit();
          $router.push('/');
        }
      "
    >
      <base-group heading="Название">
        <base-input v-model="task.title" type="text" required />
      </base-group>
      <base-group heading="Приоритет">
        <base-select v-model="task.priority" required>
          <option
            v-for="priority in PRIORITIES"
            :value="priority"
            :key="priority"
            :selected="task.priority === priority"
          >
            {{ priority }}
          </option>
        </base-select>
      </base-group>
      <base-group heading="Отметки">
        <base-select multiple="true" v-model="task.taskTags">
          <option
            v-for="tag in TASK_TAGS"
            :value="tag"
            :key="tag.id"
            :selected="task.taskTags.includes(tag)"
          >
            {{ tag.name }}
          </option>
        </base-select>
      </base-group>
      <base-group heading="Описание" v-model="task.description">
        <base-textarea v-model="task.description" />
      </base-group>
      <base-button class="submit-btn" variant="primary" type="submit">Сохранить</base-button>
    </form>
  </base-card>
</template>

<style scoped lang="scss">
.task-form {
  @include stack;
  width: 100%;

  .submit-btn {
    align-self: end;
  }
}

.back-btn {
  margin-bottom: 1rem;
}
</style>
