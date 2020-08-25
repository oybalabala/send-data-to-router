import Vue from 'vue'
import Router from 'vue-router'
import detail from '../router/detail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/detail/:Name',
      component: detail
    }
  ]
})
