import { Static, t } from 'elysia';

const TaskBody = t.Object({
  title: t.String({
    minLength: 3,
    error: 'Название задачи должно быть не менее 3 символов'
  }),
  description: t.Optional(t.String()),
  priority: t.String({
    default: 'Low'
  }),
  taskTags: t.Optional(t.Array(t.Number()))
});

const PartialTaskBody = t.Partial(TaskBody);

const Uid = t.Object({
  uid: t.String()
});

type TaskBodyDto = Static<typeof TaskBody>;

export { PartialTaskBody, TaskBody, Uid };
export type { TaskBodyDto };
