import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

for (const tag of ['Research', 'Design', 'Development']) {
  await prisma.tag.create({
    data: {
      name: tag
    }
  });
}

for (let i = 0; i < 100; i++) {
  const rand = Math.floor(Math.random() * 3);

  await prisma.task.create({
    data: {
      title: `Task ${i}`,
      description: `Description for task ${i}`,
      priority: ['Low', 'Medium', 'High'][rand],
      taskTags: {
        create: [
          {
            tag: {
              connect: {
                id: rand + 1
              }
            }
          }
        ]
      }
    }
  });
}

console.table(await prisma.tag.findMany());
console.table(await prisma.task.findMany());
