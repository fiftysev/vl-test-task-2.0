<script setup lang="ts">
import type { Task, TaskPriority, TaskTag } from '@/model/task';
import { BaseCard, BaseGroup, BaseInput, BaseSelect, BaseTextarea, BaseButton } from '../ui';
import { ref, toRefs } from 'vue';

type FormProps = {
  task?: Task;
  onSubmit: (...args: any[]) => void;
};

const props = defineProps<FormProps>();
const { task } = toRefs(props);

const emptyTask: Task = {
  uid: '',
  title: '',
  createdAt: '',
  priority: 'Low',
  description: '',
  tags: []
};

let formData = ref<Task>(task?.value ? Object.assign(emptyTask, task.value) : (emptyTask as Task));

const tags: TaskTag[] = ['Design', 'Development', 'Research'];
const priorityTypes: TaskPriority[] = ['Low', 'Medium', 'High'];
</script>

<template>
  <base-button class="back-btn" variant="ghost" @click="() => $router.back()">Назад</base-button>
  <base-card>
    <form
      class="task-form"
      @submit.prevent="
        () => {
          onSubmit(formData);
          $router.push('/');
        }
      "
    >
      <base-group heading="Название">
        <base-input v-model="formData.title" type="text" required />
      </base-group>
      <base-group heading="Приоритет">
        <base-select v-model="formData.priority" required>
          <option
            v-for="priority in priorityTypes"
            :value="priority"
            :key="priority"
            :selected="formData.priority === priority"
          >
            {{ priority }}
          </option>
        </base-select>
      </base-group>
      <base-group heading="Отметки">
        <base-select multiple="true" v-model="formData.tags">
          <option
            v-for="tag in tags"
            :value="tag"
            :key="tag"
            :selected="formData.tags.includes(tag)"
          >
            {{ tag }}
          </option>
        </base-select>
      </base-group>
      <base-group heading="Описание" v-model="formData.description">
        <base-textarea v-model="formData.description"/>
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
