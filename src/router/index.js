import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'BetterLeo'
    }
  }, {
    path: '/article',
    name: 'Article',
    component: resolve => (require(['@/views/article.vue'], resolve)),
    meta: {
      title: 'BetterLeo'
    }
  }, {
    path: '/search',
    name: 'Search',
    component: resolve => (require(['@/views/search.vue'], resolve)),
    meta: {
      title: 'BetterLeo'
    }
  }, {
    path: '/development',
    name: 'Development',
    component: resolve => (require(['@/views/development.vue'], resolve)),
    meta: {
      title: 'BetterLeo'
    }
  }, {
    path: '/digit',
    name: 'Digit',
    component: resolve => (require(['@/views/digit.vue'], resolve)),
    meta: {
      title: 'BetterLeo'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '默认title'
  }
  next()
})

export default router
