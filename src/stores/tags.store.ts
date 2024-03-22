import { tagsApi } from '@/lib/api/tags-api';
import { createEffect, createStore, sample } from 'effector';
import { createGate } from 'effector-vue/composition';

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
