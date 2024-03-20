<script setup lang="ts">
import TaskForm from '@/components/task/TaskForm.vue';
import { $task } from '@/effector-stores/task-view.store';
import { useVModel } from 'effector-vue/composition';

const task = useVModel($task);
</script>

<template>
  <task-form v-if="task" :on-submit="() => console.log(task)" :task="task" />
</template>

<style scoped lang="scss"></style>
