import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'users',
    component: Users
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  }
]

const router = new VueRouter({
  routes
})

export default router
