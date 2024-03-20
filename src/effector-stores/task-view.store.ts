import { $http } from '@/lib/api/tasks-api';
import router from '@/router';
import { createEffect, createStore, sample } from 'effector';

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

$task.reset(loadTaskFx)

export { $task, loadTaskFx };
