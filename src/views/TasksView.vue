<script setup lang="ts">
import {
  BaseButton,
  BaseCheckbox,
  BaseInputGroup,
  BaseRadioButton,
  BaseCard
} from '@/components/ui';

import TaskList from '@/components/task/TaskList/TaskList.vue';
import { Suspense, onMounted, reactive } from 'vue';
import type { Task } from '@/model/task';
import { TasksApiService } from '@/lib/api/tasks-api';

const tasksObserver = new IntersectionObserver((entries) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      console.log('Loading new');
      taskData.push(...(await TasksApiService.getTasks()));
    }
  });
});

let taskData = reactive<Task[]>([]);

onMounted(async () => {
  taskData.push(...(await TasksApiService.getTasks()));
  tasksObserver.observe(document.querySelector('.listend')!);
});

</script>

<template>
  <main class="layout">
    <aside class="menu">
      <base-card>
        <base-input-group heading="Сортировка">
          <base-radio-button label="Сначала новые" />
          <base-radio-button label="Сначала старые" />
        </base-input-group>
      </base-card>
      <base-card>
        <base-input-group heading="Приоритет">
          <base-checkbox label="Low" />
          <base-checkbox label="Normal" />
          <base-checkbox label="High" />
        </base-input-group>
        <base-input-group heading="Отметка">
          <base-checkbox label="Research" />
          <base-checkbox label="Design" />
          <base-checkbox label="Development" />
        </base-input-group>
      </base-card>
    </aside>
    <section class="content">
      <base-button variant="primary" style="margin-bottom: 1rem">Добавить задачу</base-button>
      <task-list :list-data="taskData" />
      <span class="listend"></span>
    </section>
  </main>
</template>

<style lang="scss">
.layout {
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(200px, 18%) 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }

  .menu {
    position: sticky;
    position: -webkit-sticky;
    top: 1rem;
    height: 100vh;

    @include stack;
  }

  .listend {
    width: 0;
    height: 0;
  }
}
</style>
