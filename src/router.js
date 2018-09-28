import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: () =>
        import('./views/Index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import('./views/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
        import('./views/Search.vue')
    },
    {
      path: '/room',
      name: 'room',
      component: () =>
        import('./views/Room.vue')
    },
    {
      path: '/good/:id',
      name: 'good',
      component: () =>
        import('./views/Good.vue')
    },
    {
      path: '/sale',
      name: 'sale',
      component: () =>
        import('./views/Sale.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})