import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainPage from './views/mainPage.vue'
import regLog from './views/Register.vue'
import AdminPages from './views/Admin.vue'
import EditForm from './views/editPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage,
      children : [{
        path : '/admin/editItem',
        component : EditForm
      }]
    },
    {
      path: '/about',
      name: 'about',
      component : Home
    },
    {
      path : '/regLog',
      name : 'Register',
      component : regLog
    },
    {
      path : '/admin',
      name : 'AdminPage',
      component : AdminPages
    }
  ]
})
