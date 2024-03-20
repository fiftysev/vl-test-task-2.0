import { $http } from '@/lib/api/tasks-api';
import router from '@/router';
import { createEffect, createEvent, createStore, sample } from 'effector';

const initialState: TaskApi.Task = {
  uid: '',
  title: '',
  description: '',
  createdAt: new Date().toISOString(),
  priority: 'Low',
  taskTags: []
};

const $task = createStore<TaskApi.Task | null>(null);

const loadTask = async (uid: string) => {
  const result = await $http.get<TaskApi.Task>(`/tasks/${uid}`);

  return result.data;
};

const loadTaskFx = createEffect(loadTask);

sample({
  source: loadTaskFx.doneData,
  target: $task
});

sample({
  clock: loadTaskFx.failData,
  fn: (error) => {
    console.log(error);
    router.push('/404');
  }
});

const resetTask = createEvent();

$task.reset(loadTaskFx);
$task.reset(resetTask);

export { $task, loadTaskFx };
