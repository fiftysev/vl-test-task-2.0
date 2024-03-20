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

const loadTask = async (_uid: string) => {
  const result = await taskApi.getTaskByUid(_uid);

  const { uid, createdAt, ...data } = result;

  return { ...data, taskTags: data.taskTags.map((v) => v.id) } as TaskApi.TaskDto;
};

const loadTaskFx = createEffect(loadTask);

const updateTaskFx = createEffect(taskApi.updateTask);
const submitUpdate = createEvent<string>();

const createTaskFx = createEffect(taskApi.createTask);
const submitCreate = createEvent();

$form.reset(loadTaskFx);

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
  source: $form,
  clock: submitUpdate,
  fn: (taskData, uid) => ({ uid, taskData }),
  target: updateTaskFx
});

sample({
  source: $form,
  clock: submitCreate,
  target: createTaskFx
});

sample({
  clock: updateTaskFx.done,
  fn: () => router.push('/')
});

sample({
  clock: createTaskFx.done,
  fn: () => router.push('/')
});

export const formModel = {
  $form,
  submitUpdate,
  submitCreate,
  loadTaskFx
};
