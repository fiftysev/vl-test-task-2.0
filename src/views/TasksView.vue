<script setup lang="ts">
import { BaseButton } from '@/components/ui';

import TaskFilterPanel from '@/components/task/TaskFilterPanel.vue';
import TaskList from '@/components/task/TaskList/TaskList.vue';
import { onMounted } from 'vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();

const tasksObserver = new IntersectionObserver((entries) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      store.loadNewTasks();
    }
  });
});

onMounted(async () => {
  tasksObserver.observe(document.querySelector('.list-end')!);
});
</script>

<template>
  <main class="layout">
    <aside class="menu">
      <task-filter-panel />
    </aside>
    <section class="content">
      <base-button variant="primary" style="margin-bottom: 1rem">Добавить задачу</base-button>
      <task-list :list-data="store.tasks" />
      <span class="list-end"></span>
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

  .list-end {
    width: 0;
    height: 0;
  }
}
</style>
