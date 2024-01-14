import AboutViewVue from '@/views/AboutView.vue'
import CreateViewVue from '@/views/CreateView.vue'
import DetailsViewVue from '@/views/DetailsView.vue'
import RidesViewVue from '@/views/RidesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RidesViewVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/create',
      name: 'create',
      component: CreateViewVue
    },
    {
      path: '/ride/:id',
      name: 'ride',
      component: DetailsViewVue
    }
  ]
})

export default router
