import { loadTasksTrigger } from '@/effector-stores/tasks.store';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/TasksView.vue'),
      beforeEnter(to, from, next) {
        loadTasksTrigger();
        next();
      }
    },
    {
      path: '/task/:uid',
      component: () => import('@/views/SingleTaskView.vue')
    },
    {
      path: '/add-task',
      component: () => import('@/views/AddTask.vue')
    },
    {
      path: '/edit/:uid',
      component: () => import('@/views/EditTask.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
});

export default router;
