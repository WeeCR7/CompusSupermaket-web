import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayOut
    }
  ]
})
