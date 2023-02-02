import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    // path: "/",
    name: "notFound",
    component: () => import("@/views/404/notFound")
  },
  {
    path: '/',
    component: () => import('@/views/Login')
  },
  {
    path:"/layout",
    component:()=>import("@/layout")
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  next()
})

router.afterEach((to, from, next) => {
})

export default router
