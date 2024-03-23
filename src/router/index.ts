import { createRouter, createWebHistory } from 'vue-router';

import { formModel } from '@/stores/task-form.store';
import { taskModel } from '@/stores/task-view.store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/TasksView.vue')
    },
    {
      path: '/task/:uid',
      component: () => import('@/views/SingleTaskView.vue'),
      beforeEnter: async (to, from, next) => {
        await taskModel.loadTaskFx(to.params.uid as string);
        next();
      }
    },
    {
      path: '/add-task',
      component: () => import('@/views/AddTask.vue')
    },
    {
      path: '/edit/:uid',
      component: () => import('@/views/EditTask.vue'),
      beforeEnter: async (to, from, next) => {
        await formModel.loadTaskFx(to.params.uid as string);
        next();
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
});

export default router;
