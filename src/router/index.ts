import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/overview'
      },
      {
        path: 'overview',
        component: () => import('@/views/OverviewPage.vue')
      },
      {
        path: 'food',
        component: () => import('@/views/FoodPage.vue')
      },
      {
        path: 'reaction',
        component: () => import('@/views/ReactionPage.vue')
      },
      {
        path: 'results',
        component: () => import('@/views/ResultsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
