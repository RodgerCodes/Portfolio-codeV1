import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Books from '../views/Books.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/projects',
    name:'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path:'/contact',
    name:'Contact',
    Component: Contact
  },
  {
    path:'/books',
    name:'Books',
    Component:Books
  }
];

const router = new VueRouter({
  routes
});

export default router
