<script setup lang="ts">
import { $tasksFilter } from '@/effector-stores/tasks.store';
import { useVModel } from 'effector-vue/composition';
import { BaseCard, BaseCheckbox, BaseGroup, BaseRadioButton } from '../ui';

const filters = useVModel($tasksFilter);

const priorityTypes = ['Low', 'Medium', 'High'];

const tags = [
  {
    id: 1,
    name: 'Research'
  },
  {
    id: 2,
    name: 'Development'
  },
  {
    id: 3,
    name: 'Design'
  }
];
</script>

<template>
  <base-card>
    <base-group heading="Сортировка">
      <base-radio-button v-model="filters.sort" value="DESC" label="Сначала новые" />
      <base-radio-button v-model="filters.sort" value="ASC" label="Сначала старые" />
    </base-group>
  </base-card>
  <base-card class="filter-panel">
    <base-group heading="Приоритет">
      <base-checkbox
        v-for="priority in priorityTypes"
        :label="priority"
        :key="priority"
        v-model="filters.priority"
        :value="priority"
      />
    </base-group>
    <base-group heading="Отметка">
      <base-checkbox
        v-for="tag in tags"
        :label="tag.name"
        :key="tag.id"
        v-model="filters.tags"
        :value="tag.id"
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
