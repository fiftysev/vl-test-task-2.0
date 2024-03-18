import { Elysia } from 'elysia';
import { TaskService } from '../../services/task.service';
import { FiltersQuery, PartialTaskBody, TaskBody, Uid } from './task.validation';

const TaskController = new Elysia()
  .model({
    task: TaskBody,
    partialTask: PartialTaskBody,
    uid: Uid,
    filters: FiltersQuery
  })
  .decorate({
    taskService: new TaskService()
  })
  .get('/tasks', async ({ taskService }) => await taskService.all({}), {
    query: FiltersQuery
  })
  .get('/tasks/:uid', async ({ taskService, params }) => await taskService.find(params.uid), {
    params: 'uid'
  })
  .post('/tasks', async ({ taskService, body }) => await taskService.create(body), {
    body: 'task'
  })
  .patch(
    '/tasks/:uid/update',
    async ({ taskService, params, body }) => await taskService.update(params.uid, body),
    {
      body: 'partialTask',
      params: 'uid'
    }
  )
  .delete('/tasks/:uid', async ({ taskService, params }) => await taskService.delete(params.uid), {
    params: 'uid'
  });

export { TaskController };
