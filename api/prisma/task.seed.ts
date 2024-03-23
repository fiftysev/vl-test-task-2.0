import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

for (const tag of ['Research', 'Design', 'Development']) {
  await prisma.tag.create({
    data: {
      name: tag
    }
  });
}

for (let i = 0; i < 100; i++) {
  const randomPriorityId = Math.floor(Math.random() * 3);
  const randomTagId = Math.floor(Math.random() * 3) + 1;

  await prisma.task.create({
    data: {
      title: `Task ${i}`,
      description: `Description for task ${i}`,
      createdAt: randomDate(new Date(2024, 0, 1), new Date()),
      priority: ['Low', 'Medium', 'High'][randomPriorityId],
      taskTags: {
        create: [
          {
            tag: {
              connect: {
                id: randomTagId
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
