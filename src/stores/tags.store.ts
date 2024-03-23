import { createEffect, createStore, sample } from 'effector';
import { createGate } from 'effector-vue/composition';

import { tagsApi } from '@/lib/api/tags-api';

const $tags = createStore<TaskApi.TaskTag[]>([]);
const loadTagsFx = createEffect(tagsApi.getAllTags);

const tagsGate = createGate();

sample({
  source: loadTagsFx.doneData,
  target: $tags
});

sample({
  clock: tagsGate.open,
  target: loadTagsFx
});

export const tagsModel = {
  $tags,
  loadTagsFx,
  tagsGate
};
