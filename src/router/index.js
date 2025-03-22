import { createRouter, createWebHistory } from 'vue-router'


  export const constantRoutes= [
    {
      path: '/',
      component: () => import('@/views/Notes.vue')
    },
    {
      path: '/test',
      component: () => import('@/views/Test.vue')
    }
  ]
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
});


export default router;
