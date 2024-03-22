import { PrismaClient } from '@prisma/client';
import { Elysia } from 'elysia';

export const TagController = new Elysia()
  .decorate({
    db: new PrismaClient()
  })
  .get('/tags', async ({ db }) => await db.tag.findMany({}));
