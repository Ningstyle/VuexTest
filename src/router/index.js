import Vue from 'vue'
import Router from 'vue-router'
import iforma from '../components/iformation'
import Ifshe from '../components/revise'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'iforma',
      component: iforma
    },
    {
      path: '/revise',
      name: 'Ifshe',
      component: Ifshe
    }
  ]
})
