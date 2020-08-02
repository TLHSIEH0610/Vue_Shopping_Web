import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsManagement from '@/views/BE/ProductsManagement.vue'

import Home from '@/views/FE/Home.vue'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import ProductsList from '@/views/FE/ProductsList.vue'
import ConfirmPayment from '@/views/FE/ConfirmPayment.vue'
import OrderManagement from '@/views/BE/OrderManagement.vue'
import ProductsPayment from '@/views/FE/ProductsPayment.vue'
import About from '@/views/FE/About.vue'
import Tech from '@/views/FE/Tech.vue'
import Coupon from '@/views/BE/Coupon.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Admin',
      path: '/admin',
      component: Dashboard,
      children: [
        {
          name: 'ProductsManagement',
          path: 'ProductsManagement',
          component: ProductsManagement,
          meta: { requiresAuth: true }
        },
        {
          name: 'OrderManagement',
          path: 'OrderManagement',
          component: OrderManagement,
          meta: { requiresAuth: true }
        },
        {
          name: 'Coupon',
          path: 'coupon',
          component: Coupon,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      name: '',
      path: '/',
      component: Dashboard,
      children: [
        {
          name: 'Home',
          path: '',
          component: Home
        },
        {
          name: 'About',
          path: 'About',
          component: About
        },
        {
          name: 'Tech',
          path: 'Tech',
          component: Tech
        },
        {
          name: 'ProductsList',
          path: 'ProductsList',
          component: ProductsList
        },
        {
          name: 'ConfirmPayment',
          path: 'ConfirmPayment/:orderId',
          component: ConfirmPayment
        },
        {
          name: 'ProductsPayment',
          path: 'ProductsPayment',
          component: ProductsPayment
        }
      ]
    }
  ]
})
