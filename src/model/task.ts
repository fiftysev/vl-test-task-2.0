export type Task = {
  uid: string;
  title: string;
  description?: string;
  createdAt: Date;
  priority: TaskPriority;
  taskTags: TaskTag[];
};

export type TaskPriority = 'Low' | 'Medium' | 'High';

export type TaskTag = {
  id: number;
  name: string;
};

export type SortOrder = 'asc' | 'desc';

export type TaskDto = Omit<Task, 'uid' | 'createdAt'>;
