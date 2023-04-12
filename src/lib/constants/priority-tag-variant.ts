import type { TaskPriority } from "@/model/task";

export const priorityTagVariantMap: Record<TaskPriority, 'success' | 'primary' | 'error'> = {
  Low: 'success',
  Medium: 'primary',
  High: 'error'
};
