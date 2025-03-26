import { createRouter, createWebHistory } from 'vue-router'
import { reactive } from 'vue';
import MainLayout from "@/layouts/MainLayout.vue";
//import EmptyLayout from "@/layouts/EmptyLayout.vue";

  export const routes= [
    {
      path: '/',
      name: 'Notes',
      meta: {
        title: 'Notes',
        layout: MainLayout
      },
      component: () => import('@/views/Notes.vue')
    },
    {
      path: '/test',
      meta: {
        title: 'Test',
        layout: MainLayout
      },
      component: () => import('@/views/Test.vue')
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export const route = reactive(router.currentRoute);
export default router
