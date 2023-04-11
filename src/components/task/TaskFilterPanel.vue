<script setup lang="ts">
import type { TaskPriority, TaskTag } from '@/model/task';
import { BaseCard, BaseGroup, BaseRadioButton, BaseCheckbox } from '../ui';
import { useTasksStore } from '@/stores/tasks';
import { storeToRefs } from 'pinia';

const { sortOrder, priorityFilters, tagsFilters } = storeToRefs(useTasksStore());

const tags: TaskTag[] = ['Design', 'Development', 'Research'];
const priorityTypes: TaskPriority[] = ['Low', 'Medium', 'High'];
</script>

<template>
  <base-card>
    <base-group heading="Сортировка">
      <base-radio-button v-model="sortOrder" value="DESC" label="Сначала новые" />
      <base-radio-button v-model="sortOrder" value="ASC" label="Сначала старые" />
    </base-group>
  </base-card>
  <base-card class="filter-panel">
    <base-group heading="Приоритет">
      <base-checkbox
        v-for="priority in priorityTypes"
        :label="priority"
        :key="priority"
        v-model="priorityFilters"
        :value="priority"
      />
    </base-group>
    <base-group heading="Отметка">
      <base-checkbox
        v-for="tag in tags"
        :label="tag"
        :key="tag"
        v-model="tagsFilters"
        :value="tag"
      />
    </base-group>
  </base-card>
</template>

<style scoped lang="scss">
.filter-panel {
  display: grid;
  grid-template-columns: auto;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
