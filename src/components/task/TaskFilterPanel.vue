<script setup lang="ts">
import { BaseCard, BaseInputGroup, BaseRadioButton, BaseCheckbox } from '../ui';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
</script>

<template>
    <base-card>
      <base-input-group heading="Сортировка">
        <base-radio-button v-model="store.sortOrder" value="DESC" label="Сначала новые" />
        <base-radio-button v-model="store.sortOrder" value="ASC" label="Сначала старые" />
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
</template>

<style scoped lang="scss"></style>
