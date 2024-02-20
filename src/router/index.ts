import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'log',
      component: () => import('../views/login/index.vue'),
      redirect: { name: 'login', path: "/login" },
      children: [
        {
          path: '/login',
          name: "login",
          component: () => import('../views/login/index.vue'),
        },
      ]
    },
    {
      path: '/layout',
      name: 'layout',
      redirect: { name: 'table', path: "/layout/table" },
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: "/layout/table",
          name: "table",
          component: () => import("@/views/table/index.vue"),

        }
      ]
    }
  ]
})

export default router
