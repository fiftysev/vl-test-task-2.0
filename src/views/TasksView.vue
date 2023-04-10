<script setup lang="ts">
import { BaseButton } from '@/components/ui';

import TaskFilterPanel from '@/components/task/TaskFilterPanel.vue';
import TaskList from '@/components/task/TaskList/TaskList.vue';
import { onMounted, onUnmounted } from 'vue';
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

onUnmounted(() => tasksObserver.disconnect());
</script>

<template>
  <main class="layout">
    <aside class="menu">
      <task-filter-panel />
    </aside>
    <section class="content">
      <base-button
        class="add-button"
        variant="primary"
        style="margin-bottom: 1rem"
        @click="() => $router.push('/add-task')"
        >Добавить задачу</base-button
      >
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

    .add-button {
      width: 100%;
    }
  }

  @media only screen and (min-width: 600px) {
    .menu {
      position: sticky;
      position: -webkit-sticky;
      top: 1rem;
      height: 100vh;
    }
  }

  .menu {
    @include stack;
  }

  .list-end {
    width: 0;
    height: 0;
  }
}
</style>
