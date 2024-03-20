import { $http } from './http';

const getAllTasks = async ({ filter, pagination }: TaskApi.TasksQueryDto) => {
  const result = await $http.get<TaskApi.Task[]>('/tasks', {
    params: { ...filter, ...pagination }
  });

  return result.data;
};

const getTaskByUid = async (uid: string) => {
  const result = await $http.get<TaskApi.Task>(`/tasks/${uid}`);

  return result.data;
};

const updateTask = async ({ uid, taskData }: { uid: string; taskData: TaskApi.TaskDto }) => {
  const result = await $http.patch<TaskApi.TaskDto>(`/tasks/${uid}`, taskData);

  return result.data;
};

const createTask = async (taskData: TaskApi.TaskDto) => {
  const result = await $http.post<TaskApi.TaskDto>('/tasks', taskData);

  return result.data;
};

const deleteTask = async (uid: string) => {
  const result = await $http.delete(`/tasks/${uid}`);

  return result.data;
};

export const taskApi = {
  getAllTasks,
  getTaskByUid,
  createTask,
  updateTask,
  deleteTask
};
