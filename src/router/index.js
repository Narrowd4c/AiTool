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
    // return 期望滚动到哪个的位置
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
