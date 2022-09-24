import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SystemView from '../views/SystemView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/',
    redirect: () => ({ path: '/login' }),
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue'),
  },

  {
    path: '/system',
    name: 'system',
    component: SystemView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
