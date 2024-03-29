<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useGate, useStore } from 'effector-vue/composition';

import { taskListModel } from '@/stores/task-list.store';

import TaskFilterPanel from '@/components/task/TaskFilterPanel.vue';
import TaskList from '@/components/task/TaskList/TaskList.vue';

import { BaseButton } from '@/components/ui';


const store = useStore(taskListModel.$tasks);

const tasksObserver = new IntersectionObserver((entries) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting && store.value.length > 0 && window.scrollY > 300) {
      taskListModel.nextPage();
    }
  });
});

useGate(taskListModel.tasksGate, () => 'all');

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
      >
        Добавить задачу
      </base-button>
      <task-list :list-data="store" />
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
