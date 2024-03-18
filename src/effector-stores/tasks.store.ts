import { createEffect, createStore, sample } from 'effector';

import { $http } from '@/lib/api/tasks-api';
import type { SortOrder, Task, TaskPriority } from '@/model/task';

type TasksFilter = {
  priority?: TaskPriority[];
  tags?: number[];
  sort?: SortOrder;
};

const $tasksFilter = createStore<TasksFilter>({
  sort: 'DESC',
  tags: [],
  priority: []
});

const $tasks = createStore<Task[]>([]).reset($tasksFilter);

const loadTasks = async (fetchParams: TasksFilter = {}) => {
  const result = await $http.get<Task[]>('/tasks', { params: fetchParams });

  return result.data as Task[];
};

const loadTasksFx = createEffect<TasksFilter, Task[], Error>(loadTasks);

sample({
  source: $tasksFilter,
  clock: $tasksFilter,
  target: loadTasksFx
});

sample({
  source: $tasks,
  clock: loadTasksFx.doneData,
  fn: (tasks, newTasks) => [...tasks, ...newTasks],
  target: $tasks
});

const $fetchError = createStore<string>('').on(loadTasksFx.failData, (_, error) => error.message);

export { $fetchError, $tasks, $tasksFilter, loadTasksFx };
