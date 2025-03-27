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
      path: '/currency',
      meta: {
        title: 'Currency',
        layout: MainLayout
      },
      component: () => import('@/views/Currency.vue'),
      children: [
        {
          path: 'converter',
          name: 'Converter',
          component: () => import('@/views/Converter.vue'),
          params: true
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*', // 404 Redirect
      redirect: '/',
    },
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
