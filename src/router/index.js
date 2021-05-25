import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// import Home from '../views/Home.vue'
const Home = () => import('../views/Home.vue')
Vue.use(VueRouter)

const notice = {
  path: '/notice',
  name: 'notice',
  component: () => import('../views/notice'),
}
const mail = {
  path: '/mail',
  name: 'mail',
  component: () => import('../views/mail'),
}
const rightPage = {
  path: '/rightPage',
  name: 'rightPage',
  component: () => import('../views/rightPage'),
}

const urlMap = {
  notice: notice,
  mail: mail,
  rightPage: rightPage,
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    name: 'home',
    meta: { title: '首页' },
    children: [
      // {
      //   path: '/mains',
      //   name: 'mains',
      //   component: () => import('../views/mains'),
      //   meta: { title: 'd' },
      //   children: [
      //     {
      //       name: 'notice',
      //       path: '/notice',
      //       meta: { title: '通知' },
      //       component: () => import('../views/notice'),
      //     },
      //   ],
      // },
      {
        path: '/main',
        name: 'main',
        component: () => import('../views/main'),
      },

      {
        path: '/shows',
        name: 'shows',
        component: () => import('../views/shows'),
        meta: { title: '展示' },
      },
      {
        path: '/introduce',
        name: 'introduce',
        component: () => import('../views/introduce'),
        meta: { title: '介绍' },
      },
    ],
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]
const createRouter = () =>
  new VueRouter({
    mode: 'history',
    routes,
  })
const router = createRouter()
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else {
    const token = sessionStorage.getItem('token')
    if (!token) {
      next('/login')
    } else {
      next()
      // console.log('meta', to.meta)
    }
  }

  // if (to.path == router.options.history.location) {
  //   // router.push(to.path)
  // }
})

export function initDynamicRoutes() {
  const currentRoutes = router.options.routes /* TODO: 获取当前所有的路由信息 */
  console.log('current', currentRoutes)

  const rightUrls = store.state.rightUrl
  console.log('rightUrlsrightUrls', rightUrls)
  console.log('currentRoutes', currentRoutes)
  rightUrls.forEach((item) => {
    console.log('item55', item.name)
    let child = []

    if (item.path && item.children.length <= 0) {
      let model = {
        path: `/${item.path}`,
        name: item.name,
        component: () => import(`@/${item.component}`),
        meta: item.metas,
      }

      currentRoutes[1].children.push(model)
    }

    if (item.components == 'fat' && item.children) {
      item.children.forEach((items, index) => {
        let n = {
          path: `/${items.path}`,
          name: items.name,
          meta: items.metas,
          component: () => import(`@/${items.component}`),
        }

        child.push(n)
      })

      let temp = {
        path: `/${item.path}`,
        name: item.name,
        meta: item.metas,
        component: () => import(`@/${item.component}`),
        children: child,
      }
      currentRoutes[1].children.push(temp)
    }
  })

  currentRoutes[1].children.push({
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404/404.vue'),
  })

  router.matcher = createRouter(routes).matcher
  router.addRoutes(currentRoutes)
  // router.go(0)

  console.log('d====', currentRoutes)

  // window.addEventListener('load', function() {
  //   router.push(router.options.history.location)
  // })

  // console.log('444', router)
}

export default router
