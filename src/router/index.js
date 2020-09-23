import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import Seniorsadvice from "../views/Seniorsadvice.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/senior',
    name: "SeniorsAdvice",
    component: Seniorsadvice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
