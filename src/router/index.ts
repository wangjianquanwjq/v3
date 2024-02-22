import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      name: 'layout',
      redirect: { name: 'home', path: "/home" },
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/index.vue"),
          meta: {
            title: '首页',
            icon: 'House'
          },
        },
        {
          path: "/table",
          name: "table",
          meta: {
            title: '表格',
            icon: 'House'
          },
          children: [{
            path: "/table/treeTab",
            name: "treeTabele",
            component: () => import("@/views/table/treeTable/index.vue"),
            meta: {
              title: '树表格',
              icon: 'House'
            },
          }]
        }
      ]
    }
  ]
})

export default router
