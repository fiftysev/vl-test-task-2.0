import cors from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import { TaskController } from './controllers/task/task.controller';

const app = new Elysia()
  .use(
    swagger({
      provider: 'scalar'
    })
  )
  .use(cors())
  .use(TaskController)
  .listen(8080);

export type TaskApi = typeof app;
