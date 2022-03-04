import ModelsView from '../views/ModelsView.vue'
import AccessoriesView from '../views/AccessoriesView.vue'
import ColorsView from '../views/ColorsView.vue'
import SummaryView from '../views/SummaryView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'models',
    component: ModelsView,
    props:true
    
  },
  {
    path: '/colors',
    name: 'Colors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ColorsView,
    props:true
  
    

  },
  {
    path: '/accessories',
    name: 'Accessories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AccessoriesView,
    props:true

  },
  {
    path: '/summary',
    name: 'Summary',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SummaryView,
    props:true

  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

