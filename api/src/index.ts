import cors from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import { TagController } from './controllers/tag/tag.controller';
import { TaskController } from './controllers/task/task.controller';

const app = new Elysia()
  .use(
    swagger({
      provider: 'scalar'
    })
  )
  .use(cors())
  .use(TaskController)
  .use(TagController)
  .listen(Bun.env.PORT ?? 8080, () => {
    console.info(`[${new Date()}] Api started on ${Bun.env.PORT} port`);
  });

export type TaskApi = typeof app;
