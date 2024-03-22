import { createEffect, createEvent, createStore, sample } from 'effector';

const $message = createStore<string | null>(null);

const addMessage = createEvent<string>();

const removeFx = createEffect(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
});

sample({
  source: addMessage,
  target: $message
});

sample({
  clock: addMessage,
  target: removeFx
});

$message.reset(removeFx.done);

export const messageHandler = {
  $messages: $message,
  addMessage
};
