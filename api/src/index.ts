import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import { TaskController } from './controllers/task/task.controller';

new Elysia()
  .use(
    swagger({
      provider: 'scalar'
    })
  )
  .use(TaskController)
  .listen(8080);
