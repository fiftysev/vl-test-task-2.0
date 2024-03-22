import { taskApi } from '@/lib/api/task-api';
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

const loadTaskFx = createEffect(taskApi.getTaskByUid);
const deleteTaskFx = createEffect(taskApi.deleteTask);

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

sample({
  clock: deleteTaskFx.done,
  fn: () => router.push('/')
});

const resetTask = createEvent();

$task.reset(loadTaskFx);
$task.reset(resetTask);

export const taskModel = {
  $task,
  loadTaskFx,
  deleteTaskFx
};
