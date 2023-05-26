import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PriceView from '../views/PriceView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/price',
      name: 'price',
      component: PriceView
    }
  ],
  scrollBehavior() {
    return {
      top: 0,
    }
  }
})

export default router
