import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    // path:"*",
    path: "/",
    name: "notFound",
    component: () => import("@/views/404/notFound")
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach((to, from, next) => {
  nprogress.done()
  next()
})

export default router
