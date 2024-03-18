const defaultQuery: TaskApi.TasksQuery = {
  skip: 0,
  take: 15,
  priority: ['Low', 'Medium', 'High'],
  tags: [1, 2, 3],
  sort: 'desc'
};

export const buildQuery = (query: Record<string, any>): TaskApi.TasksQuery => {
  query = { ...defaultQuery, ...query };

  if (!Array.isArray(query.priority)) query.priority = [query.priority];
  if (!Array.isArray(query.tags)) query.tags = [query.tags];

  query.skip = Number(query.skip);
  query.take = Number(query.take);
  query.tags = query.tags.map(Number);

  return query as TaskApi.TasksQuery;
};
