import { $http } from './http';

const getAllTags = async () => {
  const result = await $http.get<TaskApi.TaskTag[]>('/tags');
  return result.data;
};

export const tagsApi = {
  getAllTags
};
