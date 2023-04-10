import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/TasksView.vue')
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
    }
  ]
});

export default router;
