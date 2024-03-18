import { combine, createEffect, createEvent, createStore, sample } from 'effector';

import { $http } from '@/lib/api/tasks-api';

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

const $tasks = createStore<TaskApi.Task[]>([]).reset($tasksFilter);

const loadTasks = async ({ filter, pagination }: TaskApi.TasksQueryDto) => {
  const result = await $http.get<TaskApi.Task[]>('/tasks', {
    params: { ...filter, ...pagination }
  });

  return result.data;
};

const loadTasksFx = createEffect(loadTasks);
const loadTasksTrigger = createEvent();

sample({
  source: $tasksQuery,
  clock: [loadTasksTrigger, nextPage, $tasksFilter],
  target: loadTasksFx
});

sample({
  source: $tasks,
  clock: loadTasksFx.doneData,
  fn: (tasks, newTasks) => [...tasks, ...newTasks],
  target: $tasks
});

const $fetchError = createStore<string>('').on(loadTasksFx.failData, (_, error) => error.message);

export { $tasks, $tasksFilter, loadTasksFx, loadTasksTrigger, nextPage };
