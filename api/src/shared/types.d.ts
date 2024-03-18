declare namespace TaskApi {
  type Task = {
    uid: string;
    title: string;
    description: string;
    createdAt: string;
    priority: TaskPriority;
    taskTags: TaskTag[];
  };

  type TaskPriority = 'Low' | 'Medium' | 'High';

  type TaskTag = {
    id: number;
    name: string;
  };

  type SortOrder = 'asc' | 'desc';

  type TasksFilter = {
    priority: string[];
    tags: number[];
    sort: 'asc' | 'desc';
  };

  type Pagination = {
    skip: number;
    take: number;
  };

  type TasksQuery = TasksFilter & Pagination;

  type TasksQueryDto = {
    filter: TasksFilter;
    pagination: Pagination;
  };
}
