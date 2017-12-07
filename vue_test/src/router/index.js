import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import About from '@/components/About'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

export default new Router({
  mode: 'history', //删除地址栏的#号
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }]
})

