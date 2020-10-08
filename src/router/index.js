import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '*',
    beforeEnter (to, from, next) {
      next({ name: 'Login'})
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// ########################## Navigation Guard ##################################
router.beforeEach((to, from, next) => {
  const authenticatedUser = store.state.auth.authenticatedUser;
  if (to.name === 'Dashboard') {
    if (authenticatedUser) {
      next();
    } else {
      next({ name: 'Login' })
    }
  }
  next()
});

export default router
