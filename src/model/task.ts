export type Task = {
  uid: string;
  title: string;
  description?: string;
  createdAt: string;
  priority: TaskPriority;
  tags: TaskTag[];
};

export type TaskPriority = 'Low' | 'Medium' | 'High';
export type TaskTag = 'Design' | 'Development' | 'Research';

export type SortOrder = 'ASC' | 'DESC';

export type TaskDto = Omit<Task, 'uid' | 'createdAt'>;
