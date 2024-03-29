import { combine, createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-vue/composition';

import { taskApi } from '@/lib/api/task-api';

const $tasksFilter = createStore<TaskApi.TasksFilter>({
  sort: 'desc',
  tags: [],
  priority: []
});

const $tasksPagination = createStore<TaskApi.Pagination>({
  skip: 0,
  take: 15
}).reset($tasksFilter);

const nextPage = createEvent();
$tasksPagination.on(nextPage, (pagination) => ({
  ...pagination,
  skip: pagination.skip + pagination.take
}));

const $tasksQuery = combine({ filter: $tasksFilter, pagination: $tasksPagination });

const $tasks = createStore<TaskApi.Task[]>([]);
const loadTasksFx = createEffect(taskApi.getAllTasks);

const tasksGate = createGate();

sample({
  source: $tasksQuery,
  clock: [tasksGate.open, nextPage, $tasksFilter],
  target: loadTasksFx
});

sample({
  source: $tasks,
  clock: loadTasksFx.doneData,
  fn: (tasks, newTasks) => [...tasks, ...newTasks],
  target: $tasks
});

$tasks.reset($tasksFilter);
$tasks.reset(tasksGate.close);

const $fetchError = createStore<string>('').on(loadTasksFx.failData, (_, error) => error.message);

export const taskListModel = { $tasks, $tasksFilter, loadTasksFx, nextPage, tasksGate };
