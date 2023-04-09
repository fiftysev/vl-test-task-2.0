import type { Task } from '@/model/task';
import { getRandomDateInThisYear, pickRandomElement } from '../utils/mocking';
import { uid } from 'uid';

export class TasksApiService {
  private static ID_SEED = 1000;

  private static generator(count: number): Task[] {
    return Array(count)
      .fill({})
      .map((_) => {
        const taskUid = uid();
        return {
          uid: taskUid,
          title: `Задача ${Math.floor(Math.random() * this.ID_SEED)}`,
          createdAt: getRandomDateInThisYear(),
          priority: pickRandomElement(['Low', 'Medium', 'High']),
          tags: [pickRandomElement(['Development', 'Design', 'Research'])]
        } as Task;
      });
  }
  
  static async getTasks(count: number = 15): Promise<Task[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.generator(count));
      }, 500);
    });
  }
}
