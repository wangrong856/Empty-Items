import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: "/404",
    component: () => import("@/views/404/notFound"),
    hidden: true
  },
  {

    path: '/login',
    component: () => import('@/views/Login'),

  },
  {
    path: "/",
    component: layout,
    redirect: "/dashboard",
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import("@/views/dashboard"),
        meta: {
          title: "首页",
          icon: "dashboard",
        }
      }
    ]
  },
  {
    path:'/form',
    component:layout,
    meta:{
      title:"表单",
      icon:"form"
    },
    children:[
      {
        path:'/form',
        component:()=>import("@/views/Form"),

        children:[
          {
            path:"/leve",
            component:()=>import("@/views/Form/leve"),
            meta:{
              title:"数据",
              icon:"form"
            }
          }
        ]
      },

    ]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  next()
})

router.afterEach((to, from, next) => {
})

export default router
