import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Pages/Login.vue'
import CustomerList from '@/components/Pages/CustomerList.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/customerlist',
      name: 'CustomerList',
      component: CustomerList
    }
  ]
})

export default router
