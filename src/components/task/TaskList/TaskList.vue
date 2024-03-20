<script setup lang="ts">
import TaskListItem from './TaskListItem.vue';

type TaskListProps = {
  listData: TaskApi.Task[];
};

defineProps<TaskListProps>();
</script>

<template>
  <div class="task-list">
    <transition-group name="list" tag="task-list-item">
      <task-list-item v-for="(task, idx) in listData" :task="task" :key="idx" />
    </transition-group>
  </div>
</template>

<style scoped lang="scss">

</style>
