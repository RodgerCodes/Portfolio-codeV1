import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  } 
];

const router = new VueRouter({
  routes,
  scrollBehavior:function(to, from , savedPosition) {
    if(to.hash) {
      return {selector:to.hash,
      savedPosition}
    }
    else{
      return {x:0, y:0}
    }
  }
});

export default router
