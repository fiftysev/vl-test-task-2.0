export type Task = {
  uid: string;
  title: string;
  description?: string;
  createdAt: Date;
  priority: TaskPriority;
  tags: TaskTag[];
};

export type TaskPriority = 'Low' | 'Medium' | 'High';
export type TaskTag = 'Design' | 'Development' | 'Research';
