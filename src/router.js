import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import register from './views/register.vue'
import login from './views/login.vue'
import retrievePass from './views/retrievePass.vue'
import main from './views/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      meta:{
        level:1,
        title:"扫码入职",
        noAuth:true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:{
        level:2,
        title:"注册"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        level:1,
        title:"注册"
      }
    },
    {
      path: '/retrievePass',
      name: 'retrievePass',
      component: retrievePass,
      meta:{
        level:1,
        title:"重置密码"
      }
    },
  ]
})
