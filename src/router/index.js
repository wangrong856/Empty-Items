import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // path:"*",
    path:"/",
    name:"notFound",
    component:()=>import("@/views/404/notFound")
  }
]

const router = new VueRouter({
  routes
})

export default router
