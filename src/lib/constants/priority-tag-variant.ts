import type { TaskPriority } from "@/model/task";

export const priorityTagVariantMap: Record<TaskPriority, string> = {
  Low: 'success',
  Medium: 'primary',
  High: 'error'
};
