import { PrismaClient } from '@prisma/client';
import { TaskBodyDto } from '../controllers/task/task.validation';

class TaskService {
  private db: PrismaClient;
  private tagsSelector = {
    include: {
      taskTags: {
        include: {
          tag: true
        }
      }
    }
  };

  constructor() {
    this.db = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
  }

  async all(query: TaskApi.TasksQuery) {
    const result = await this.db.task.findMany({
      ...this.tagsSelector,
      where: {
        AND: [
          {
            priority: {
              in: query.priority
            }
          },
          {
            taskTags: {
              some: {
                tagId: {
                  in: query.tags
                }
              }
            }
          }
        ]
      },
      orderBy: {
        createdAt: query.sort
      },
      skip: query.skip,
      take: query.take
    });

    return result.map((task) => ({
      ...task,
      taskTags: task.taskTags.map((v) => v.tag)
    }));
  }

  async find(uid: string) {
    const task = await this.db.task.findUniqueOrThrow({
      where: {
        uid
      },
      ...this.tagsSelector
    });

    return {
      ...task,
      taskTags: task?.taskTags.map((v) => v.tag)
    };
  }

  async create(taskData: TaskBodyDto) {
    const { taskTags, ...data } = taskData;

    return this.db.task.create({
      data: {
        ...data,
        taskTags: {
          create: taskTags?.map((tagId) => ({
            tag: { connect: { id: tagId } }
          }))
        }
      }
    });
  }

  async update(uid: string, taskData: Partial<TaskBodyDto>) {
    const { taskTags, ...data } = taskData;

    return this.db.task.update({
      where: { uid },
      data: {
        ...data,
        taskTags: {
          deleteMany: {},
          create: taskTags?.map((tagId) => ({
            tag: { connect: { id: tagId } }
          }))
        }
      }
    });
  }

  async delete(uid: string) {
    await this.db.taskTag.deleteMany({
      where: { taskUid: uid }
    });

    return this.db.task.delete({
      where: {
        uid
      }
    });
  }
}

export { TaskService };
