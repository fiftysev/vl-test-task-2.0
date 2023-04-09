import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { TasksApiService } from '@/lib/api/tasks-api';
import { uid } from 'uid';
import type { SortOrder, Task } from '@/model/task';

export const useTasksStore = defineStore('tasks', () => {
  const _tasks = ref<Task[]>([]);
  const sortOrder = ref<SortOrder>('DESC');

  async function loadNewTasks() {
    _tasks.value.push(...(await TasksApiService.getTasks()));
  }

  function addNewTask(newTask: Omit<Task, 'id' | 'createdAt'>) {
    _tasks.value.push(
      Object.assign(
        {
          uid: uid(),
          createdAt: new Date()
        } as Task,
        newTask
      )
    );
  }

  function deleteTask(taskUid: string) {
    _tasks.value = _tasks.value.filter((task) => task.uid === taskUid);
  }

  const tasks = computed(() =>
    _tasks.value.sort((a, b) => {
      if (sortOrder.value === 'ASC') {
        return a.createdAt.getTime() - b.createdAt.getTime();
      } else {
        return b.createdAt.getTime() - a.createdAt.getTime();
      }
    })
  );

  return { tasks, sortOrder, loadNewTasks, addNewTask, deleteTask };
});
