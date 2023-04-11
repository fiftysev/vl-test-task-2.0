import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { TasksApiService } from '@/lib/api/tasks-api';
import { uid } from 'uid';
import type { SortOrder, Task, TaskDto, TaskPriority, TaskTag } from '@/model/task';

export const useTasksStore = defineStore('tasks', () => {
  const _tasks = ref<Task[]>([]);

  const sortOrder = ref<SortOrder>('DESC');
  const priorityFilters = ref<TaskPriority[]>(['Low', 'Medium', 'High']);
  const tagsFilters = ref<TaskTag[]>(['Design', 'Development', 'Research']);

  async function loadNewTasks() {
    _tasks.value.push(...(await TasksApiService.getTasks()));
  }

  function addNewTask(newTask: TaskDto) {
    _tasks.value.push(
      Object.assign(
        {
          uid: uid(),
          createdAt: new Date().toString()
        } as Task,
        newTask
      )
    );
  }

  function editTask(task: Task) {
    const taskArrayIdx = _tasks.value.findIndex((_task) => _task.uid === task.uid);
    if (taskArrayIdx === -1) throw new Error(`Task with uid ${task.uid} is not found`);

    _tasks.value[taskArrayIdx] = Object.assign(_tasks.value[taskArrayIdx], task);
  }

  function deleteTask(taskUid: string) {
    _tasks.value = _tasks.value.filter((task) => task.uid !== taskUid);
  }

  function getTaskByUid(uid: string): Task {
    const findResult = _tasks.value.find((task) => task.uid === uid)!;

    if (findResult !== undefined) return findResult;
    else throw new Error(`Task with uid ${uid} is not found`);
  }

  const tasks = computed(() =>
    _tasks.value
      .filter((task) => priorityFilters.value.includes(task.priority))
      .filter((task) => task.tags.some((tag) => tagsFilters.value.includes(tag)))
      .sort((a, b) => {
        const [first, second] = sortOrder.value === 'DESC' ? [a, b] : [b, a];
        return Date.parse(first.createdAt) - Date.parse(second.createdAt);
      })
  );

  return {
    tasks,
    priorityFilters,
    tagsFilters,
    sortOrder,
    loadNewTasks,
    getTaskByUid,
    addNewTask,
    editTask,
    deleteTask
  };
});
