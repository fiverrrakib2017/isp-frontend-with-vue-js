import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Pages/Home.vue'
import NotFound from '@/views/Pages/404.vue'
import About from '@/views/Pages/About.vue'
import Offer from '@/views/Pages/Offer.vue'
import Price from '@/views/Pages/Price.vue'
import Coverage from '@/views/Pages/Coverage.vue'
import Pay from '@/views/Pages/Pay.vue'
import Contact from '@/views/Pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/offer',
      name: 'offer',
      component: Offer
    },
    {
      path: '/price',
      name: 'price',
      component: Price
    },
    {
      path: '/coverage',
      name: 'coverage',
      component: Coverage
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
