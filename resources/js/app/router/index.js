import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from './middleware'

/* pages */
import WelcomePage from '../pages/WelcomePage'
import NotFoundPage from '../pages/NotFoundPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WelcomePage,
    name: 'top'
  },
  {
    path: '*',
    component: NotFoundPage,
    name: 'not-found'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})


//ログイン非ログイン状態でのルーティング制御
//router.beforeEach(auth)

export default router