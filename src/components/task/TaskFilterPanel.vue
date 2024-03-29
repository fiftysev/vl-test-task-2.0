<script setup lang="ts">
import { useStore, useVModel } from 'effector-vue/composition';

import { PRIORITIES } from '@/lib/constants/priority';

import { tagsModel } from '@/stores/tags.store';
import { taskListModel } from '@/stores/task-list.store';

import { BaseCard, BaseCheckbox, BaseGroup, BaseRadioButton } from '../ui';

const filters = useVModel(taskListModel.$tasksFilter);

const taskTags = useStore(tagsModel.$tags);
</script>

<template>
  <base-card>
    <base-group heading="Сортировка">
      <base-radio-button v-model="filters.sort" value="desc" label="Сначала новые" />
      <base-radio-button v-model="filters.sort" value="asc" label="Сначала старые" />
    </base-group>
  </base-card>
  <base-card class="filter-panel">
    <base-group heading="Приоритет">
      <base-checkbox
        v-for="priority in PRIORITIES"
        :label="priority"
        :key="priority"
        v-model="filters.priority"
        :value="priority"
      />
    </base-group>
    <base-group heading="Отметка">
      <base-checkbox
        v-for="tag in taskTags"
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
