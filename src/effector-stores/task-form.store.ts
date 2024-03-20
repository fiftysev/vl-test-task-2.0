import { taskApi } from '@/lib/api/taskApi';
import router from '@/router';
import { createEffect, createEvent, createStore, sample } from 'effector';

const initialState: TaskApi.TaskDto = {
  title: '',
  description: '',
  priority: 'Low',
  taskTags: []
};

const $form = createStore<TaskApi.TaskDto>(initialState);

const updateTaskFx = createEffect(taskApi.updateTask);
const submitUpdate = createEvent<string>();

const loadTask = async (_uid: string) => {
  const result = await taskApi.getTaskByUid(_uid);

  const { uid, createdAt, ...data } = result;

  return { ...data, taskTags: data.taskTags.map((v) => v.id) } as TaskApi.TaskDto;
};

const loadTaskFx = createEffect(loadTask);

$form.reset(loadTaskFx);

sample({
  source: $form,
  clock: submitUpdate,
  fn: (taskData, uid) => ({ uid, taskData }),
  target: updateTaskFx
});

sample({
  source: loadTaskFx.doneData,
  target: $form
});

sample({
  clock: loadTaskFx.failData,
  fn: (error) => {
    console.log(error);
    router.push('/404');
  }
});

sample({
  clock: updateTaskFx.done,
  fn: () => router.push('/')
});

export const formModel = {
  $form,
  submitUpdate,
  loadTaskFx
};
