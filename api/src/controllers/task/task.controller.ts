import { Elysia } from 'elysia';
import { buildQuery } from '../../lib/build-query';
import { TaskService } from '../../services/task.service';
import { PartialTaskBody, TaskBody, Uid } from './task.validation';

const TaskController = new Elysia()
  .model({
    task: TaskBody,
    partialTask: PartialTaskBody,
    uid: Uid
  })
  .decorate({
    taskService: new TaskService()
  })
  .group('/tasks', (router) =>
    router
      .get('/', async ({ taskService, query }) => await taskService.all(buildQuery(query)))
      .get('/:uid', async ({ taskService, params }) => await taskService.find(params.uid), {
        params: 'uid'
      })
      .post('/', async ({ taskService, body }) => await taskService.create(body), {
        body: 'task'
      })
      .patch(
        '/:uid',
        async ({ taskService, params, body }) => await taskService.update(params.uid, body),
        {
          body: 'partialTask',
          params: 'uid'
        }
      )
      .delete(
        '/:uid',
        async ({ taskService, params }) => await taskService.delete(params.uid),
        {
          params: 'uid'
        }
      )
  );

export { TaskController };
